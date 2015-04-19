Template.editReceipt.helpers({
  /*
  userId: function() {
    return UserSettings.findOne({
      belongsTo: Meteor.userId()
    });
  }
  */
  receipt: function() {
    console.log("this: ", this);
    return this;
  },
  
  field: function () {
    var allFields = UserSettings.findOne({
      belongsTo: Meteor.userId()
    });
    var trueFields = [];

    allFields = allFields.importSettings;

    _.each(allFields, function (values, keys) {
      if (values)
        trueFields.push(keys);
    });
    
    return trueFields;
  },
  categories: function () {
    var allCategories = UserSettings.findOne({
      belongsTo: Meteor.userId()
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