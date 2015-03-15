Template.addReceipt.helpers({
  field: function () {
    var allFields = UserSettings.findOne({
      belongsTo: Meteor.uesrId()
    });
    var trueFields = [];

    allFields = allFields.importSettings;

    _.each(allFields, function (values, keys) {
      if (values)
        trueFields.push(keys);
    });
    console.log("trueFields: ", trueFields);
    return trueFields;
  },
  categories: function () {
    var allCategories = UserSettings.findOne({
      belongsTo: Meteor.uesrId()
    });
    allCategories = allCategories.expenseCategories;

    var trueCategories = [];

    _.each(allCategories, function (values, keys) {
      if (values)
        trueCategories.push({
          value: keys,
          label: keys.charAt(0).toUpperCase() + keys.substring(1)
        });
    });
    console.log("trueCategories: ", trueCategories);
    
    return trueCategories;
  },
  date: function () {
    var now = new Date().getTime();
    return moment(now).format('YYYY-MM-DD') + 'T' + moment(now).format('hh:mm'); //TODO:add datepicker
  },
  location: function () {
    return Session.get('city');
  },
  amount: function () {
    return '$10';
  },
  image: function () {
    return Session.get('image');
  },
  isCategory: function (field) {
    return field === "category";
  },
  isDate: function (field) {
    return field === "date";
  },
  isLocation: function (field) {
    return field === "location";
  }
});