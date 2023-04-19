/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function length(month, year) {
  const monthsWith30Days = ['April', 'June', 'September', 'November']
  const monthsWith31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December']

  if (monthsWith31Days.includes(month)) {
    return 31;
  }
  if (monthsWith30Days.includes(month)) {
    return 30;
  }
  if (month === 'February' && year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
    return 29;
  }
  return 28;
}

let date = {
  day: 1,
  weekday: 'Monday',
  month: 'January',
  year: 1900,
  increment() {
    // the weekday always increments in the same way
    this.weekday = weekdays[(weekdays.indexOf(this.weekday) + 1) % 7];

    // middle of the month
    if (this.day < length(this.month, this.year)) {
      this.day++;
    
    // end of the month
    } else if (this.day === length(this.month, this.year)) {
      this.day = 1;
      this.month = months[(months.indexOf(this.month) + 1) % 12];
      if (this.month === 'January') {
        this.year++;
      }
    }
  }
};

while (date.year < 1901) {
  date.increment();
}

let sundayCount = 0;

while (date.year < 2001) {
  if (date.day === 1 && date.weekday === 'Sunday') {
    sundayCount++;
  }
  date.increment();
}
console.log(sundayCount);