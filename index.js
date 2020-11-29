/* Your Code Here */
let createEmployeeRecord = function (row) {
  return {
    firstName: row[0],
    familyName: row[1],
    title: row[2],
    payPerHour: row[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

let createEmployeeRecords = function (employeeRowData) {
  return employeeRowData.map((employee) => createEmployeeRecord(employee));
};

let createTimeInEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  });

  return this;
};

let createTimeOutEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });

  return this;
};

let hoursWorkedOnDate = function (date) {
  const timeIn = this.timeInEvents.find(
    (timeInEvent) => timeInEvent.date === date
  );
  const timeOut = this.timeOutEvents.find(
    (timeOutEvent) => timeOutEvent.date === date
  );

  return (timeOut.hour - timeIn.hour) / 100;
};

let wagesEarnedOnDate = function name(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

let findEmployeeByFirstName = function (employees, firstName) {
  return employees.find((employee) => employee.firstName == firstName);
};

let calculatePayroll = function (employees) {
  return employees.reduce(function (start, employee) {
    return start + allWagesFor.call(employee);
  }, 0);
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
