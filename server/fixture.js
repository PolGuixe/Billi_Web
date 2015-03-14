if (Expenses.find().count() === 0) {

  console.log('Fixture executed');

  // ---- Initilization ---- //
  // User names - createdBy
  var userNames = ['Ana', 'David', 'María', 'Carlos', 'Cristina', 'Alejandro'];

  // Category
  var categoryNames = ['M&E', 'Hotel', 'Taxi', 'Airfare']; //Quiero añadir mas categorias

  // Location
  var locationNames = ['Barcelona', 'Londres', 'Bruselas'];

  // Merchants
  var merchantsME = [['Starbucks', 'Restaurante La Paloma', 'El Mussol', 'Restaurante Set Portes'], ['McDonalds', 'Starbucks', 'Lizarran', 'Wagamama'], ['Starbucks', 'Comme Chez Soi Restaurant', 'Restaurant Vicent', 'Le Pain Quotidien']];
  var merchantsHotel = ['Sheraton', 'AC Marriot', 'NH Hotels', 'Silken'];
  var merchantsAirfare = ['Iberia', 'British Airways', 'KLM', 'Air Europa'];
  var merchantsTaxi = ['Excel Taxis', 'The London Taxi Company', 'Taxis Bleus'];


  // ---- Data Base Entries ---- //
  var category;
  var now = moment();
  var days = 182; // 6 minths
  var N = 20; // #expenses in database

  for (var i = 0; i < N; i++) {

    var expense = {};

    expense.createdBy = userNames[parseInt(Math.random() * (userNames.length - 1))];

    var loc = parseInt(Math.random() * (locationNames.length - 1));
    expense.location = locationNames[loc];
    expense.date = moment(now).utc().subtract(parseInt(Math.random() * days * 24 * 60), 'minutes').format();
    expense.amount = {};

    if (i < N * 0.6) {
      category = 0
      expense.merchant = merchantsME[loc][parseInt(Math.random() * (merchantsME[loc].length - 1))];
      expense.amount.number = parseInt((Math.random() * 20 + 5) * 100) / 100;
    } else if (i < N * 0.8) {
      category = 1
      expense.merchant = merchantsHotel[parseInt(Math.random() * (merchantsHotel.length - 1))];
      expense.amount.number = parseInt((Math.random() * 300 + 100) * 100) / 100;
    } else if (i < N * 0.9) {
      category = 2
      expense.merchant = merchantsAirfare[parseInt(Math.random() * (merchantsAirfare.length - 1))];
      expense.amount.number = parseInt((Math.random() * 200 + 100) * 100) / 100;
    } else {
      category = 3
      expense.merchant = merchantsTaxi[loc];
      expense.amount.number = parseInt((Math.random() * 25 + 5) * 100) / 100;
    }

    expense.category = categoryNames[category];
    if (loc === 1) {
      expense.amount.currency = 'GBP';
    } else {
      expense.amount.currency = 'EUR';
    }

    expense.tax = '20%';
    _.extend(expense, {
      paymentMethod: 'Card' // se puede con card o cash
    });
    
//    expense.image = 

    Expenses.insert(expense);
  }
}