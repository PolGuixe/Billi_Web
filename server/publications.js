Meteor.publish('expenses',function(){
  return Expenses.find({createdBy: this.userId});
});

Meteor.publish('userSettings',function(){
  return UserSettings.find({belongsTo: this.userId});
});
