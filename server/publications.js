Meteor.publish('expenses',function(user){
  return Expenses.find({createdBy: user});
});

Meteor.publish('userSettings',function(user){
  return UserSettings.find({belongsTo: user});
});