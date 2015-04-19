// datepicker
Template.datepicker.rendered = function() {
    $('.datetimepicker').datetimepicker();
}

// dateOptions to format dates in reactive table
var dateOptions = {
  weekday: "long", year: "numeric", month: "short",
  day: "numeric", hour: "2-digit", minute: "2-digit"
};

// receipts
Template.receipts.helpers({
  Expenses: function () {
    return Expenses;
  },
  settings: function () {
    return {
      fields: [
        { 
          key: 'date',
          label: 'Date',
          fn: function (value) { return value.toLocaleTimeString("en-us", dateOptions); }
        },
        { key: 'category', label: 'Category' },
        { key: 'location', label: 'Location' },
        { key: 'amount.number', label: 'Amount' },
        { key: 'amount.currency', label: 'Currency' },
        { key: 'tax', label: 'Tax', hidden: true },
        { key: 'merchant', label: 'Merchant', hidden: true },
        { key: 'paymentMethod', label: 'Payment Method', hidden: true },
        { key: 'image', label: 'Image', hidden: true },
        { key: 'createdBy', label: 'Create By', hidden: true },
        { key: 'createdAt', label: 'Created At', hidden: true }, 
        
        {
          key: 'edit',
          label: 'Edit',
          cellClass: 'receipt-table-edit',
          fn: function (object) {
            return new Spacebars.SafeString('<a href=#>Edit</a>');
          }
        },
        
        {
          key: 'delete',
          label: 'Delete',
          cellClass: 'receipt-table-delete',
          fn: function (object) {
            return new Spacebars.SafeString('<a href=#>Delete</a>');
          }
        }
      ]
    };
  }
});

Template.receipts.events = {
   'click #btnExportReceiptsCSV' : function () {
     saveReceiptsFile('-Billi-My-Expenses.csv');
   },
   
   'click #btnExportReceiptsTXT' : function () {
     saveReceiptsFile('-Billi-My-Expenses.txt')
   },
  
    'click .reactive-table tr': function (e) {
      e.preventDefault();
      
      var receipt = this;
      // checks if the actual clicked element has the class 'receipt-table-edit'
      if (e.target.parentElement.className == "receipt-table-delete") {
        // asks for confirmation
        if (confirm("Delete this receipt?")) {
          Expenses.remove(receipt._id);
        }
      }
      
      if (e.target.parentElement.className == "receipt-table-edit") {
        Router.go('editReceipt', {id: receipt._id}, {query: 'id='+receipt._id});
      }
    }
 }
 

 //This needs some sort of wrapper.
saveReceiptsFile = function(name) {
  // Data array - to change
  var data = [["Date", "Location", "Category", "Amount", "Currency"]];
  var N = Expenses.find().count();
  for (var i = 0; i < N; i++){
    data.push([Expenses.find().fetch()[i].date, Expenses.find().fetch()[i].location, Expenses.find().fetch()[i].category, Expenses.find().fetch()[i].amount.number, Expenses.find().fetch()[i].amount.currency]);
  }

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

  var fileName = yyyy.toString()+mm+dd+name;
  a.setAttribute("download", fileName);
  a.click();
}