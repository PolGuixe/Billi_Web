Expenses = new Mongo.Collection('expenses');



Expenses.attachSchema(new SimpleSchema({
  merchant: {
    type: String,
    optional: true,
    label: 'Merchant',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Merchant'
    },
    max: 200
  },
  date: {
    type: Date, //Change it to a datetime picker
    optional: true,
    label: 'Date',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Date and Time'
    }
  },
  location: {
    type: String,
    optional: true,
    label: 'Location',
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Location'
    },
    max: 400
  },
  amount: {
    type: Object,
    optional: true,
  },
  'amount.number': {
    type: Number,
    decimal: true,
    optional: true,
    label: 'Amount',
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'amount'
    },
  },
  'amount.currency': {
    type: String,
    optional: true,
    label: 'Currency',
    autoform: {
      options: [
        {
          value: 'USD',
          label: '$'
        },
        {
          value: 'EUR',
          label: '€'
        },
        {
          value: 'GBP',
          label: '£'
        }
      ]
    }
  },
  tax: {
    type: String,
    optional: true,
    label: 'Tax',
    autoform: {
      options: [
        {
          value: '20%',
          label: '20%'
        },
        {
          value: '10%',
          label: '10%'
        },
        {
          value: '5%',
          label: '5%'
        }
    ]
    }
  },
  category: {
    type: String,
    optional: true,
    label: 'Category',
    autoform: {
      options: [
        {
          value: 'M&E',
          label: 'Meals and Entertainment'
        },
        {
          value: 'Hotel',
          label: 'Hotel'
        },
        {
          value: 'Fuel',
          label: 'Fuel'
        },
        {
          value: 'Trip',
          label: 'Trip'
        }
      ]
    }
  },
  paymentMethod: {
    type: String,
    optional: true,
    label: 'Payment Method',
    autoform: {
      options: [
        {
          value: 'Card',
          label: 'Card'
        },
        {
          value: 'Cash',
          label: 'Cash'
        }
      ],
      type: 'select-radio'
    }
  },
  image:{
     type: String,
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function () {
      if (this.isInsert) {
        if(this.isSet){
          return;
        }else{
         return Meteor.userId(); //TODO: try this.userId -- it is recommended
        }
      } else {
        this.unset();
      }
    }
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else {
        this.unset();
      }
    }
  }
}));