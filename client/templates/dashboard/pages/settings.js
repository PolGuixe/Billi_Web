Template.settings.helpers({
  user: function() {
    return Meteor.user();
  },
  userId: function() {
    return UserSettings.findOne({
      belongsTo: Meteor.uesrId()
    });
  }
})
  
