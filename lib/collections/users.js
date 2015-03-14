var Schema = {};


Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    label: 'First Name',
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'First Name'
    }
  },
  lastName: {
    type: String,
    label: 'Last Name',
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Last Name'
    }
  },
  NIF: {
    type: String,
    label: 'NIF',
    regEx: /^[a-z0-9A-Z-]{6,9}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'NIF'
    }
  },
  organitzation: {
    type: String,
    label: 'Organitzation',
    regEx: /^[a-z0-9A-Z-]{2,30}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Organitzation'
    }
  },
  department: {
    type: String,
    label: 'Department',
    regEx: /^[a-z0-9A-Z-]{2,30}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Department'
    }
  },
  position: {
    type: String,
    label: 'Position',
    regEx: /^[a-z0-9A-Z-]{2,30}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Position'
    }
  },
  phone: {
    type: String,
    label: 'Phone Number',
    regEx: /^[0-9-]{2,30}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Phone Number'
    }
  }
});


//AWARE:may need to add other fields depending login options e.g. Facebook, Twitter, etc.
Schema.User = new SimpleSchema({
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
});
Meteor.users.attachSchema(Schema.User);