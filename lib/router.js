Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'landingPage'});

Router.route('/sign_up', {name: 'signUp'});

// Dashboard
Router.route('/dashboard', {name: 'dashboard'});
Router.route('/dashboard/receipts', {name: 'receipts'});
Router.route('/dashboard/reports', {name: 'reports'});
Router.route('/dashboard/statistics', {name: 'statistics'});
Router.route('/dashboard/settings', {name: 'settings'});