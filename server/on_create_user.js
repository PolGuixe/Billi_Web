Accounts.onCreateUser(function(options, user) {
  user._id = Meteor.users._makeNewID();
    
  UserSettings.insert({belongsTo: user._id});
  
  // DON'T DELETE - We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;
  return user;
});