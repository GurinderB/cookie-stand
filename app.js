//"use strict";

/*var hrs = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'];
var shopPike = {
  name: '1\'st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custPHr: [],
  cookPHr: [],
  HrsOfOpp: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
  dailyTot: 0,
  custPerHour: function (minCust, maxCust) {
    return (Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    // var x = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    //console.log(x);
  },
  totalCookies: function () {
    var sum = 0;
    for (var hours = 0; hours <= 14; hours++) {
      var totalCookies = Math.floor(this.avgCookies * this.custPerHour());
      sum = sum + totalCookies;
    }
    //console.log("totalcookies", sum); console.log("average customers", this.custPerHour());
  },

};
*/
var shops = [];
function CookStnd(name, minCust, maxCust, avgCookPerCust) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookPerCust = avgCookPerCust;
  this.HrsOfOpp = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'];
  this.custPerHr = [];
  this.hourlySales = [];
  this.dailySales = 0;
  this.randC = function (min, max) {
    for (var i = 0; i < this.HrsOfOpp.lenght; i++) {
      var randCust = Math.floor(Math.random() * (max - min) + min);
      this.custPerHr.push(randCust);

    }
  };
  this.generateHourlySales = function () {
    this.randC(this.minCust, this.maxCust);

    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHr[i] * this.avgCookPerCust);
      this.hourlySales.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailySales += perHour;
    }
  };
  shops.push(this);
}

new CookStnd('Pike', 6, 65, 6.3);

