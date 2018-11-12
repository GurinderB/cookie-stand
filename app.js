'use strict';
var stores = [];

var hoursOfOps = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

function Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.render();
  createTableFooter();
}
Store.prototype.generateRandomCustPerHour = function (minCustPerHour, maxCustPerHour) {
  for (var i = 0; i < hoursOfOps.length; i++) {
    var randomCust = Math.floor(Math.random() * (maxCustPerHour - minCustPerHour
      + 1) + minCustPerHour
    );
    this.custPerHour.push(randomCust);
  }
  console.log('custPerHour', this.custPerHour);
};
Store.prototype.generateHourlySales = function () {
  //line below will populate custPerHour array
  this.generateRandomCustPerHour(this.minCustPerHour
    , this.maxCustPerHour);
  for (var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
  }
};
Store.prototype.render = function () {
  this.generateHourlySales();
  //step1-DOM: create an element:
  var tbodyEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  //step2-DOM: provide content for the element:
  thEl.textContent = this.name;
  //step3-DOM: append the element to the page (in a specific place):
  trEl.appendChild(thEl);
  //each store should have varying hours of operation ==> use a for loop to do this:
  //assistance provided by Ahmad:
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement('td');
  totalEl.textContent = this.dailyTotal;
  trEl.appendChild(totalEl);
  tbodyEl.appendChild(trEl);
};

function createTable() {
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  tblEl.id = 'sales-table';
  mainEl.appendChild(tblEl);
}

function createTableHeader() {
  var tblEl = document.getElementById('sales-table');
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var emptyTh = document.createElement('th');
  trEl.appendChild(emptyTh);

  for (var i = 0; i < hoursOfOps.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hoursOfOps[i];
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';
  trEl.appendChild(totalEl);

  theadEl.appendChild(trEl);
  tblEl.appendChild(theadEl);
}

function createTableBody() {
  var tblEl = document.getElementById('sales-table');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbl-body';
  tblEl.appendChild(tbodyEl);
}

function createTableFooter() {
  var tfootElCheck = document.getElementById('tbl-foot');

  if (tfootElCheck) {
    tfootElCheck.remove();
  }

  var tblEl = document.getElementById('sales-table');
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  tfootEl.id = 'tbl-foot';
  var emptyThEl = document.createElement('th');
  emptyThEl.textContent = 'Hourly Totals';
  trEl.appendChild(emptyThEl);

  var grandTotal = 0;
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;
    for (var j = 0; j < stores.length; j++) {
      totals += stores[j].cookiesPerHour[i];
    }
    tdEl.textContent = totals;
    trEl.appendChild(tdEl);
    grandTotal += totals;
  };

  //Anchor to the html doc:
  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);

  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);
}
(function run() {
  createTable();
  createTableHeader();
  createTableBody();
})();

//use 'new' keyword to make the conext local scope:
new Store('First and Pike', 23, 65, 6.4);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

document.getElementById('sales-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var storename = event.target.storename.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  new Store(storename, min, max, avg);

  event.target.storename.value = '';
  event.target.min.value = '';
  event.target.max.value = '';
  event.target.avg.value = '';
});