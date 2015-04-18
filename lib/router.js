var landingPageYields = {
    'landingPageNav': {
        to: 'nav'
    },
    'footer': {
        to: 'footer'
    }
};

var dashboardYields = {
    'dashboardNav': {
        to: 'nav'
    },
    'footer': {
        to: 'footer'
    }
};


Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'landingPage',
    yieldTemplates: landingPageYields
});

Router.route('/features', {
    template: 'landingPage',
    yieldTemplates: landingPageYields
});

Router.route('/sign-in', {
    name: 'signIn',
    yieldTemplates: landingPageYields
});

Router.route('/dashboard', {
    name: 'dashboard',
    yieldTemplates: dashboardYields
});

Router.route('/dashboard/receipts', {
    name: 'receipts',
    yieldTemplates: dashboardYields
});

Router.route('/dashboard/addReceipt', {
    name: 'addReceipt',
    yieldTemplates: dashboardYields
});

Router.route('/dashboard/settings', {
    name: 'settings',
    yieldTemplates: dashboardYields
});



Router.onBeforeAction(function() {
    if (Meteor.userId()) {
        if (this.params.name != 'dashboard') {
            this.next();
        } else {
            Router.go('/dashboard');
            this.next();
        }
    } else {
        Router.go('/');
        this.next();
    }
}, {
    except: ['signIn']
});

// Router.map(function() {

//     // -------- Dashboard: Edit Receipt ---------
//     /*
//     this.route('dashboard-editReceipt', {
//       path: '/dashboard/editReceipt/:_id',
//       template: 'addReceipt',
//       layoutTemplate: 'dashboardLayout',
//       yieldTemplates: {
//         'dashboardHeader': {to: 'header'},
//         'dashboardAside': {to: 'aside'},
//         'footer': {to: 'footer'}
//         },
//       data: function() { return Expenses.findOne(this.params._id); }
//     });
//     */

//     // ---------- Dashboard: Reports -----------
//     this.route('dashboard-reports', {
//         path: '/dashboard/reports',
//         template: 'reports',
//         layoutTemplate: 'dashboardLayout',
//         yieldTemplates: {
//             'dashboardAside': {
//                 to: 'aside'
//             }
//         }
//     });


//     // ---------- Dashboard: Statistics -----------
//     this.route('dashboard-statistics', {
//         path: '/dashboard/statistics',
//         template: 'statistics',
//         layoutTemplate: 'dashboardLayout',
//         yieldTemplates: {
//             'dashboardAside': {
//                 to: 'aside'
//             }
//         }
//     });

//     this.route('pdfFile', {
//         where: 'server',
//         path: '/test.pdf',
//         action: function() {

//             // This action function allows you to edit the response buffer.

//             // create some http buffers for your pdf file
//             var headers = {
//                 'Content-type': 'application/pdf',
//                 'Content-Disposition': "attachment; filename=test.pdf"
//             };

//             // Add the headers to the response buffer
//             this.response.writeHead(200, headers);

//             // Load the wkhtmltopdf module.
//             // Notice we are using Meteor.npmRequire here, available trough the meteorhacks:npm module.
//             var wk = Meteor.npmRequire('wkhtmltopdf');

//             // Render the html response of 'http://www.google.com' to the response buffer.
//             var r = wk("http://www.google.com").pipe(this.response);
//         }
//     });

// });

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
