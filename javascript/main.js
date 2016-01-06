/**
 * Created by dvircohen on 1/6/16.
 */
var Employee = Class(function() {
    var employees = 0;

    return {

        $static: {
            employeesCount: function() {
                return employees;
            }
        },

        constructor: function(first_name, last_name, id) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.id = id;
            employees++;
            this.employee_serial_id = employees;
        },

        toString: function() {
            return "#" + this.employee_serial_id + ": " + this.first_name + " " + this.last_name + " (" + this.id + ")";
        },

        $ready: function(clazz, parent, api) {
            if (this !== clazz) {
                console.log(api.type + " initialized");
            }
        }
    }
});

var Programmer = Class(Employee, {

    type: "programmer",

    constructor: function(firstname, lastname, id) {
        Programmer.$super.call(this, firstname, lastname, id);
    },

    work: function() {
        console.log("Writing code...");
    }
});

var QA = Class(Employee, {

    type: "QA",

    constructor: function(firstname, lastname, id, salary) {
        QA.$super.call(this, firstname, lastname, id, salary);
    },

    work: function() {
        console.log("Testing code...");
    }
});

var EatingActions = Class({

    eat: function () {
        console.log("eating...");
    },

    drink: function () {
        console.log("drinking...");
    }

});

jsface.extend(Employee, EatingActions);
var dvir = new Programmer("dvir", "cohen", 203950977);
var lior = new QA("lior", "pesoa", 123456789);

dvir.work();
lior.work();
dvir.eat();
dvir.drink();
console.log("Employees count: " + Employee.employeesCount());
