"use strict";


var stores = [];
var hrsOfOpp = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'];
function Store(name, minCust, maxCust, avgCookPerCust) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookPerCust = avgCookPerCust;
  this.custPerHr = [];
  this.cookPerHr = [];
  this.dailyTotal = 0;

  stores.push(this);
  this.render();
  createTableFooter();
}

Store.prototype.genRanCusPerHour = function (min, max) {
  for (var i = 0; i < hrsOfOpp.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHr.push(randomCust);
  }
};

Store.prototype.generateHourlySales = function () {
  this.genRanCusPerHour(this.minCust, this.maxCust);

  for (var i = 0; i < hrsOfOpp.length; i++) {
    var perHour = Math.round(this.custPerHr[i] * this.avgCookPerCust);
    this.cookPerHr.push(perHour);

    this.dailyTotal += perHour;
  }
};

Store.prototype.render = function () {
  this.generateHourlySales();
  var tbodyEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for (var i = 0; i < hrsOfOpp.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookPerHr[i];
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

  for (var i = 0; i < hrsOfOpp.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hrsOfOpp[i];
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
  trEl.appendChild(emptyThEl);
  var grandTotal = 0;

  for (var i = 0; i < hrsOfOpp.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;

    for (var j = 0; j < stores.length; j++) {
      totals += stores[j].cookPerHr[i];
    }

    tdEl.textContent = totals;
    trEl.appendChild(tdEl);
    grandTotal += totals;
  }

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

new Store('1St anf Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


