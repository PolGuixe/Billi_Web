 Template.receipts.events = {
   'click #btnExportReceiptsCSV' : function () {
     saveReceiptsFile('-Billi-My-receipts.csv');
   },
   
   'click #btnExportReceiptsTXT' : function () {
     saveReceiptsFile('-Billi-My-receipts.txt')
   }
 }
 
saveReceiptsFile = function(name) {
  // Data array - to change
   var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];

  // Algorithm to create .csv file content
  var csvContent = "data:text/csv;charset=utf-8,";
  var dataString;
  data.forEach(function(infoArray, index){
    dataString = infoArray.join(",");
    csvContent += index < data.length ? dataString+ "\n" : dataString;
  }); 

  var encodedUri = encodeURI(csvContent);
  var a = document.createElement("a");
  a.setAttribute("href", encodedUri);
  a.setAttribute("target", "_blank");

  // File name
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd='0'+dd
  } else {
    dd=dd.toString();
  }
  if(mm<10) {
    mm='0'+mm
  } else {
    mm=mm.toString();
  }

  var fileName = yyyy.toString()+dd+mm+name;
  a.setAttribute("download", fileName);
  a.click();
}
 
