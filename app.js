'use strict';

var pikeAndFirst = {
  storename: 'first and pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
  dailyTotal: 0,

  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('Pike And First - customers per hour', this.custPerHour);
  },

  generateHourlySales: function () {
    this.generateRandomCustPerHour();
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function () {
    //line below will generate hourly sales which also generates customers per hour
    this.generateHourlySales();

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },

};
pikeAndFirst.generateRandomCustPerHour();
pikeAndFirst.render();

var seaTacAirport = {
  storename: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
  dailyTotal: 0,

  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('SeaTac Airport - customers per hour', this.custPerHour);
  },

  generateHourlySales: function () {
    this.generateRandomCustPerHour();
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
};
seaTacAirport.generateRandomCustPerHour()

var seattleCenter = {
  storename: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
  dailyTotal: 0,
  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('Seattle Center - customers per hour', this.custPerHour);
  },

  generateHourlySales: function () {
    //line below will populate custPerHour array
    this.generateRandomCustPerHour();
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
};
seattleCenter.generateRandomCustPerHour();

var capitolHill = {
  storename: 'Capital Hill',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
  dailyTotal: 0,
  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('Seattle Center - customers per hour', this.custPerHour);
  },

  generateHourlySales: function () {
    this.generateRandomCustPerHour();
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
};
capitolHill.generateRandomCustPerHour();

var Alki = {
  storename: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
  dailyTotal: 0,
  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('Alki - customers per hour', this.custPerHour);
  },

  generateHourlySales: function () {
    this.generateRandomCustPerHour();
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
    // console.log('cookiesPerHour', this.cookiesPerHour);
  },
};
Alki.generateRandomCustPerHour();