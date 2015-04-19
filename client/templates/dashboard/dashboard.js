var startDatePieChart = new Date(2015, 0, 1); // 1st Jan 2015
var finishDatePieChart = new Date();
var startDateColumnChart = new Date(2015, 0, 1); // 1st Jan 2015
var finishDateColumnChart = new Date();

// https://github.com/jhuenges/highcharts-demo/tree/master/client/demos

/*
 * Function to draw the area chart
 */
function builtArea() {

    $('#container-area').highcharts({
        
        chart: {
            type: 'area'
        },
        
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        
        credits: {
            enabled: false
        },
        
        subtitle: {
            text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                'thebulletin.metapress.com</a>'
        },
        
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        
        series: [{
            name: 'USA',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    });
}

/*
 * Function to draw the column chart
 */
function builtColumn() {
    var data = aggregateExpensesByMonth();
    $('#container-column').highcharts({
        
        chart: {
            type: 'column'
        },
        
        title: {
            text: 'Monthly Expenses'
        },
        
        credits: {
            enabled: false
        },
        
        xAxis: {
          categories: data[1]
        },
        
        yAxis: {
            min: 0,
            title: {
                text: 'Need to define currency!'
            }
        },
        
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.2f} currency TBD</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        
        series: [{
          name: 'Accumulated expenses',
          data: data[0]
        }]
        
    });
}

/*
 * Function to draw the pie chart
 */
function builtPie() {
    
    var data = aggregateExpensesByCategory(startDatePieChart, finishDatePieChart);
    
    $('#container-pie').highcharts({
        
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        
        title: {
            text: ''
        },
        
        credits: {
            enabled: false
        },
        
        tooltip: {
            /*formatter: function () {
                return this.series.name + ': <b>' + this.y + '</b><br/>{point.percentage:.1f}%';
            }*/
            pointFormat: '{series.name}: {point.percentage:.1f}%' //<b>{point.y:.2f}%</b><br>
        },
        
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        
        series: [{
            type: 'pie',
            name: 'Total',
            data: data
        }]
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.dashboard.rendered = function() {    
    builtArea();
    builtColumn(); 
    builtPie();
}

Template.dashboard.helpers({
  Expenses: function () {
    return Expenses;
  },
  isExpenses: function () {
    if(Expenses.find({}).fetch().length > 0) {
      return true;
    }
    else {
      return false;
    }
  },
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
function aggregateExpensesByCategory() {
  var i, j;
  
  // Find all different categories
  var nCategories = _.uniq(Expenses.find({}, {sort: {category: 1}, fields: {category: true}}).fetch().map(function(x) {return x.category;}), true);
  
  // Initialise input array for chart
  var agregatedExpenses = [];
  for (i = 0; i < nCategories.length; i++) {
    agregatedExpenses.push([capitalizeFirstLetter(nCategories[i]), 0]);
  }
  
  // Sum all exprenses in each category
  var subCollection;
  for (i = 0; i < nCategories.length; i++) {
    subCollection = Expenses.find({category: nCategories[i]}).fetch();
    for (j = 0; j < subCollection.length; j++) {
      agregatedExpenses[i][1] = agregatedExpenses[i][1] + subCollection[j].amount.number;
    }
  }
  
  return agregatedExpenses;
}
*/

function aggregateExpensesByCategory(startDate, finishDate) {
  var i, j;
  
  // Find all different categories
  var nCategories = _.uniq(Expenses.find({date: {$gte: startDate, $lte: finishDate}}, {sort: {category: 1}, fields: {category: true}}).fetch().map(function(x) {return x.category;}), true);
  
  // Initialise input array for chart
  var agregatedExpenses = [];
  for (i = 0; i < nCategories.length; i++) {
    agregatedExpenses.push([capitalizeFirstLetter(nCategories[i]), 0]);
  }
  
  // Sum all exprenses in each category
  var subCollection;
  for (i = 0; i < nCategories.length; i++) {
    subCollection = Expenses.find({category: nCategories[i]}).fetch();
    for (j = 0; j < subCollection.length; j++) {
      agregatedExpenses[i][1] = agregatedExpenses[i][1] + subCollection[j].amount.number;
    }
  }
  
  return agregatedExpenses;
}

function generateDate(yearStart, monthStart, monthsFromStart) {
  var month = (monthStart + monthsFromStart) % 11;
  var year = yearStart + (monthStart + monthsFromStart - month) / 11 - 2000;
  return [new Date(year, month, 1), numberToMonth(month)+" '"+year.toString()];
}

function numberToMonth(month) {
  var monthName;
  switch (month) {
    case 0: monthName = 'Jan'; break;
    case 1: monthName = 'Feb'; break;
    case 2: monthName = 'Mar'; break;
    case 3: monthName = 'Apr'; break;
    case 4: monthName = 'May'; break;
    case 5: monthName = 'Jun'; break;
    case 6: monthName = 'Jul'; break;
    case 7: monthName = 'Aug'; break;
    case 8: monthName = 'Sep'; break;
    case 9: monthName = 'Oct'; break;
    case 10: monthName = 'Nov'; break;
    case 11: monthName = 'Dec'; break;  
  }
  return monthName;
}

function aggregateExpensesByMonth() {
  
  var i, j;
  
  // Find sort by date (ascending order) and find oldest and newest receipt
  var sortedExpenses = Expenses.find({}, {sort: {date: 1}}).fetch();
  
  // Find all different categories
  var numberCategories = (sortedExpenses[sortedExpenses.length-1].date.getFullYear() - sortedExpenses[0].date.getFullYear())*12 + (sortedExpenses[sortedExpenses.length-1].date.getMonth() - sortedExpenses[0].date.getMonth()) + 1;
  
  var nCategories = [];
  for (i = 0; i < numberCategories; i++) {
    nCategories.push(generateDate(sortedExpenses[0].date.getFullYear(), sortedExpenses[0].date.getMonth(), i));
  }
   
  // Initialise input arrays for chart
  var agregatedExpenses = [];
  var categoriesExpenses = [];
  for (i = 0; i < numberCategories; i++) {
    agregatedExpenses.push(0);
    categoriesExpenses.push(nCategories[i][1]);
  }
  
  // Sum all exprenses in each category
  var subCollection;
  for (i = 0; i < numberCategories - 1; i++) {
    subCollection = Expenses.find({date: {$gte: nCategories[i][0], $lt: nCategories[i+1][0]}}).fetch();
    for (j = 0; j < subCollection.length; j++) {
      agregatedExpenses[i] = agregatedExpenses[i] + subCollection[j].amount.number;
    }
  }
  // Latest month
  subCollection = Expenses.find({date: {$gte: nCategories[numberCategories - 1][0], $lt: new Date()}}).fetch();
  for (j = 0; j < subCollection.length; j++) {
    agregatedExpenses[numberCategories - 1] = agregatedExpenses[numberCategories - 1] + subCollection[j].amount.number;
  }
  
  return [agregatedExpenses, categoriesExpenses];
}

