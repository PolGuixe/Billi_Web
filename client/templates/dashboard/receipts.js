
if (Meteor.is_client) {
  
  Template.receipts.events = {
    'click #btnExportReceiptsCSV' : function () {
      // Data array - to change
      var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
      console.log("data", data);

      // Algorithm to create .csv file content
      var csvContent = "data:text/csv;charset=utf-8,";
      var dataString;
      data.forEach(function(infoArray, index){

         dataString = infoArray.join(",");
         csvContent += index < data.length ? dataString+ "\n" : dataString;

      }); 
      console.log("csvContent", csvContent);
      console.log("dataString", dataString);

      // OPTION 1:
      var encodedUri = encodeURI(csvContent);
      var a = document.createElement("a");
      a.setAttribute("href", encodedUri);
      a.setAttribute("target", "_blank");
      a.setAttribute("download", "myReceipts.csv");
      console.log("a: ", a);

      // OPTION 2:
      /*
      var a = document.createElement('a');
      a.href = 'data:attachment/csv,' + csvString;
      a.target = '_blank';
      a.download = 'myReceipts.csv';
      document.body.appendChild(a);
      */
      console.log("here");
      a.click();
      console.log("here2");
    }
  };
}
