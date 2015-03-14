Meteor.methods({
  OCRTesseract: function (path) {

    //TODO refactor and accept and image data as input
    console.log('inside the OCRTesseract');
    var tesseract = Meteor.npmRequire('node-tesseract');
    console.log('after tesseract ' + path);

    var pathBase = Npm.require('path');
    var base = pathBase.resolve('.');
    base = base.split('.meteor')[0];
    console.log(base);
    
    var options = {
      l: 'eng',
      psm: 6
    };


    var text = Async.runSync(function (done) {
      tesseract.process(base + path, options, function (err, data) {
        if (err) {
          console.error(err);
        } else {
          done(null, data); //TODO: done should also be able to take an error. 
        }
      });
    });

    console.log(text.result);
    return text.result; //TODO: Is returning the result the best option. Adding it to the Database could be better? 
  }
});