Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  // --------- Landing page ---------
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

  // ------------ Sign in -----------
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

  // ---------- Dashboard -----------
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
  
  // ---------- Dashboard: Receipts -----------
  this.route('dashboard-receipts', {
    path: '/dashboard/receipts',
    template: 'receipts',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'dashboardHeader': {to: 'header'},
      'dashboardAside': {to: 'aside'},
      'dashboardFooter': {to: 'footer'}
      }
  });
  
  // -------- Dashboard: Add Receipt ---------
  this.route('dashboard-addReceipt', {
    path: '/dashboard/addReceipt',
    template: 'addReceipt',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'dashboardHeader': {to: 'header'},
      'dashboardAside': {to: 'aside'},
      'dashboardFooter': {to: 'footer'}
      }
  });
  
  // -------- Dashboard: Edit Receipt ---------
  /*
  this.route('dashboard-editReceipt', {
    path: '/dashboard/editReceipt/:_id',
    template: 'addReceipt',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'dashboardHeader': {to: 'header'},
      'dashboardAside': {to: 'aside'},
      'dashboardFooter': {to: 'footer'}
      },
    data: function() { return Expenses.findOne(this.params._id); }
  });
  */
  
  // ---------- Dashboard: Reports -----------
  this.route('dashboard-reports', {
    path: '/dashboard/reports',
    template: 'reports',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'dashboardHeader': {to: 'header'},
      'dashboardAside': {to: 'aside'},
      'dashboardFooter': {to: 'footer'}
      }
  });

  // ---------- Dashboard: Settings -----------
  this.route('dashboard-settings', {
    path: '/dashboard/settings',
    template: 'settings',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'dashboardHeader': {to: 'header'},
      'dashboardAside': {to: 'aside'},
      'dashboardFooter': {to: 'footer'}
      }
  });
  
  // ---------- Dashboard: Statistics -----------
  this.route('dashboard-statistics', {
    path: '/dashboard/statistics',
    template: 'statistics',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'dashboardHeader': {to: 'header'},
      'dashboardAside': {to: 'aside'},
      'dashboardFooter': {to: 'footer'}
      }
  });
  
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
  
});

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