Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'landingPage'});

Router.route('/sign_up', {name: 'signUp'});
Router.route('/dashboard', {name: 'dashboard'});