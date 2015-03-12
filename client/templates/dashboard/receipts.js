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
 
Blaze.saveAsPDF(Template.receipts, {
  filename: "report.pdf", // optional, default is "document.pdf"
  data: "Hello, World!", // optional, render the template with this data context
  x: 0, // optional, left starting position on resulting PDF, default is 4 units
  y: 0, // optional, top starting position on resulting PDF, default is 4 units
  orientation: "landscape", // optional, "landscape" or "portrait" (default)
  unit: "in", // optional, unit for coordinates, one of "pt", "mm" (default), "cm", or "in"
  format: "letter" // optional, see Page Formats, default is "a4"
});