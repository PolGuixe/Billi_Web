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

/*
Schema.ExportSettings = new SimpleSchema({
  // Fields to include in exported document
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
  },
  
  // Fields name in exported document
  merchantField: {
    type: String,
    label: 'Merchant field name',
    defaultValue: 'Merchant'
  },
  locationField: {
    type: String,
    label: 'Location field name',
    defaultValue: 'Location'
  },
  amountField: {
    type: String,
    label: 'Amount field name',
    defaultValue: 'Amount'
  },
  dateField: {
    type: String,
    label: 'Date field name',
    defaultValue: 'Date'
  },
  taxField: {
    type: String,
    label: 'Tax field name',
    defaultValue: 'Tax'
  },
  categoryField: {
    type: String,
    label: 'Category field name',
    defaultValue: 'Category'
  },
  paymentMethodField: {
    type: String,
    label: 'Payment Method field name',
    defaultValue: 'Payment Method'
  },
 
  // Fields order in exported document
  merchantPosition: {
    type: Number,
    label: 'Merchant field position',
    defaultValue: 1
  },
  locationPosition: {
    type: Number,
    label: 'Location field position',
    defaultValue: 2
  },
  amountPosition: {
    type: Number,
    label: 'Amount field position',
    defaultValue: 3
  },
  datePosition: {
    type: Number,
    label: 'Date field position',
    defaultValue: 4
  },
  taxPosition: {
    type: Number,
    label: 'Tax field position',
    defaultValue: 5
  },
  categoryPosition: {
    type: Number,
    label: 'Category field position',
    defaultValue: 6
  },
  paymentMethodPosition: {
    type: Number,
    label: 'Payment Method field position',
    defaultValue: 7
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
 */

Schema.Settings = new SimpleSchema({
  belongsTo: {
    type: String
  },
  importSettings: {
    type: Schema.ImportSettings,
    label: 'Customize your import settings',
    optional: true
  },
  /*
  exportSettings: {
    type: Schema.ExportSettings,
    label: 'Customize your export settings',
    optional: true
  },
  */
  expenseCategories: {
    type: Schema.ExpenseCategories,
    label: 'Select the expense categories',
    optional: true
  }
});

UserSettings.attachSchema(Schema.Settings);