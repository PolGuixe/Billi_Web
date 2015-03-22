Template.user.helpers({
  //Code used in both clients! can mode to package.
  username: function () {
    var username;
    if (!!Meteor.user().profile) {
      if (!!Meteor.user().profile.firstName && !!Meteor.user().profile.lastName) {
        username = Meteor.user().profile.firstName + ' ' + Meteor.user().profile.lastName;
      } else {
        username = Meteor.user().emails[0].address;
      }
    } else {
      username = Meteor.user().emails[0].address;
    }
    return username;
  }
});