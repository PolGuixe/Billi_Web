if (Meteor.isClient) {
 Meteor.connection = DDP.connect('http://billi.meteor.com');
 Accounts.connection = Meteor.connection;
 Meteor.users = new Meteor.Collection('users');
 Expenses = new Meteor.Collection('Expenses');
 Meteor.connection.subscribe('users');
 Meteor.connection.subscribe('Expenses');
 // rest if the code just as always
}