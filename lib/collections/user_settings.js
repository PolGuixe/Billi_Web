UserSettings = new Mongo.Collection('userSettings');

var Schema = {};

Schema.ExpenseCategories = new SimpleSchema({
  meals: {
    type: Boolean,
    label: 'Meals',
    defaultValue: true,
  },
  breakfast: {
    type: Boolean,
    label: 'Breakfast',
    defaultValue: false
  },
  lunch: {
    type: Boolean,
    label: 'Lunch',
    defaultValue: false
  },
  dinner: {
    type: Boolean,
    label: 'Dinner',
    defaultValue: false
  },
  trip: {
    type: Boolean,
    label: 'Trip',
    defaultValue: true
  },
  fuel: {
    type: Boolean,
    label: 'Fuel',
    defaultValue: true
  }
});

Schema.ImportSettings = new SimpleSchema({
  merchant: {
    type: Boolean,
    label: 'Merchant',
    defaultValue: true
  },
  location: {
    type: Boolean,
    label: 'Location',
    defaultValue: true
  },
  amount: {
    type: Boolean,
    label: 'Amount',
    defaultValue: true
  },
  date: {
    type: Boolean,
    label: 'Date',
    defaultValue: true
  },
  tax: {
    type: Boolean,
    label: 'Tax',
    defaultValue: true
  },
  category: {
    type: Boolean,
    label: 'Category',
    defaultValue: true
  },
  paymentMethod: {
    type: Boolean,
    label: 'Payment Method',
    defaultValue: true
  }
 
//  currency: {
//    type: String,
//    label: 'Currency',
//    defaultValue: 'EUR',
//    autoform: {
//      options: [
//        {
//          value: 'USD',
//          label: '$'
//        },
//        {
//          value: 'EUR',
//          label: '€'
//        },
//        {
//          value: 'GBP',
//          label: '£'
//        }
//    ]
//    }
//  }
});


Schema.Settings = new SimpleSchema({
  belongsTo: {
    type: String
  },
  importSettings: {
    type: Schema.ImportSettings,
    label: 'Customize your import settings',
    optional: true
  },
  expenseCategories: {
    type: Schema.ExpenseCategories,
    label: 'Select the expense categories',
    optional: true
  }
});

UserSettings.attachSchema(Schema.Settings);