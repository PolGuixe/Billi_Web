Router.configure({
  layoutTemplate: 'layout'
});

// Landing page
//Router.route('/', {name: 'landingPage'});

Router.map(function () {
  this.route('home', {
  path: '/',
  template: 'landingPage',
  layoutTemplate: 'layout',
  yieldTemplates: {
    'landingPageHeader': {to: 'header'},
    'landingPageAside': {to: 'aside'},
    'landingPageFooter': {to: 'footer'}
    }
  });

  this.route('signIn', {
  path: '/sign-in',
  template: 'signIn',
  layoutTemplate: 'layout',
  yieldTemplates: {
    'dashboardHeader': {to: 'header'},
    'landingPageAside': {to: 'aside'},
    'dashboardFooter': {to: 'footer'}
    }
  });

  this.route('dashboard', {
  path: '/dashboard',
  template: 'dashboard',
  layoutTemplate: 'layout',
  yieldTemplates: {
    'dashboardHeader': {to: 'header'},
    'dashboardAside': {to: 'aside'},
    'dashboardFooter': {to: 'footer'}
    }
  });
});


// Dashboard
//Router.route('/dashboard', {name: 'dashboard'});
Router.route('/dashboard/receipts', {name: 'receipts'});
Router.route('/dashboard/reports', {name: 'reports'});
Router.route('/dashboard/statistics', {name: 'statistics'});
Router.route('/dashboard/settings', {name: 'settings'});

// PDF
/*
this.route('pdfFile', {
    where: 'server',                                              
    path: '/test.pdf',                                              
    action: function() {

        // This action function allows you to edit the response buffer.

        // create some http buffers for your pdf file
        var headers = {
            'Content-type': 'application/pdf',
            'Content-Disposition': "attachment; filename=test.pdf"
        };

        // Add the headers to the response buffer
        this.response.writeHead(200, headers);

        // Load the wkhtmltopdf module.
        // Notice we are using Meteor.npmRequire here, available trough the meteorhacks:npm module.
        var wk = Meteor.npmRequire('wkhtmltopdf');

        // Render the html response of 'http://www.google.com' to the response buffer.
        var r = wk("http://www.google.com").pipe(this.response);
    }
});
*/