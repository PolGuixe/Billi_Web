Template.settings.helpers({
  user: function() {
    return Meteor.user();
  },
  userId: function() {
    return UserSettings.findOne({
      belongsTo: Meteor.userId()
    });
  },

  field: function () {
    var allFields = UserSettings.findOne({
      belongsTo: Meteor.userId()
    });
    var trueFields = [];

    allFieldsToExport = allFields.exportSettings;

    _.each(allFieldsToExport, function (values, keys) {
      if (values)
        trueFields.push(keys);
        _.each(allFieldsToExport, function (values2, keys2) {
          if (keys + keys2.slice(keys.length) === keys2)
            trueFields.push(keys2);
            console.log("keys = keys2 works in settings.js");
        });
    });
    
    return trueFields;
  }
  
});