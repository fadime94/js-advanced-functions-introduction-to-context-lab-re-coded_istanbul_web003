// Your code here
const employee= ["firstName", "LastName", "title", "payPerHour"];
function createEmployeeRecord(employee){
    const employeeRecord= {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],              
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;
};
const employees = [["hello","kitty","cat",3], ["ann","ann","dancer", 1]];
// function createEmployeeRecords(employees){  // why doesnt work
//     const employeesList= employees.reduce((acc,employee)=>(acc.push(createEmployeeRecord(employee))), [])
//     return employeesList;
// };

function createEmployeeRecords(employees){
    const employeesList = [];
    for(const person of employees){
        employeesList.push(createEmployeeRecord(person));
    }
    return employeesList;
  }
const time = "YYYY-MM-DD 1100";
function createTimeInEvent(employee, time){
    const timeArr= time.split(" ");
    const hour= timeArr[1];
    const day=timeArr[0];
    const timeInfo= {
        type: "TimeIn",
        hour: parseInt(hour),
        date: day
    };
    employee.timeInEvents.push(timeInfo);
    return employee;
};


function createTimeOutEvent(employee, time){
    const timeArr= time.split(" ");
    const hour= timeArr[1];
    const day=timeArr[0];
    const timeInfo= {
        type: "TimeOut",
        hour: parseInt(hour),
        date: day
    };
    employee.timeOutEvents.push(timeInfo);
    return employee;
}
const date= "YYYY-MM-DD"; 

function hoursWorkedOnDate(employee,date){
    const dayStart= employee.timeInEvents.find(timeInfo=> timeInfo.date===date);
    const dayEnd= employee.timeOutEvents.find(timeInfo=> timeInfo.date===date);
    const start = dayStart.hour;
    const end = dayEnd.hour;
    const hourWorked= (end - start)/100; //hour = hhmm 2h=200
    return hourWorked;
}

 //employee.payPerHour
function wagesEarnedOnDate(employee,date){
    const dailyhours= hoursWorkedOnDate(employee,date);
    const payOwned= dailyhours*employee.payPerHour;
    return payOwned;
}

function allWagesFor(employee){
    //loop inside timeİnfo.date=> add wagesEarnedOnDate to total
    let totalWage = 0;
    for(let i = 0; i < employee.timeInEvents.length; i++){
        totalWage += wagesEarnedOnDate(employee, employee.timeInEvents[i].date);
    }
    return totalWage;
}


function findEmployeeByFirstName(srcArray, firstName){
   for (const person of srcArray){
       person.firstName===firstName;
       return person;//return only the first match
   }
    return undefined;
}


function calculatePayroll(empolyeesArray){
    let total= 0;
    for( const employee of empolyeesArray){
        total+=allWagesFor(employee);
    }
    return total;
}