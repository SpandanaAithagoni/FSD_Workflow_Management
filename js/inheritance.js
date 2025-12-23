// User Constructor
function User(name, email) {
    this.name = name;
    this.email = email;
}

// Method using prototype
User.prototype.login = function () {
    console.log(this.name + " has logged in.");
};

// Student Constructor
function Student(name, email, rollNo) {
    User.call(this, name, email);
    this.rollNo = rollNo;
}

// Inherit User prototype
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

// Student method
Student.prototype.registerEvent = function () {
    console.log(this.name + " registered for an event.");
};

// Organizer Constructor
function Organizer(name, email, department) {
    User.call(this, name, email);
    this.department = department;
}

// Inherit User prototype
Organizer.prototype = Object.create(User.prototype);
Organizer.prototype.constructor = Organizer;

// Organizer method
Organizer.prototype.createEvent = function () {
    console.log(this.name + " created a new event.");
};

// Object creation
const student1 = new Student("Rahul", "rahul@mail.com", 101);
student1.login();
student1.registerEvent();

const organizer1 = new Organizer("Anita", "anita@mail.com", "CSE");
organizer1.login();
organizer1.createEvent();

class UserClass {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(this.name + " has logged in.");
    }
}

class StudentClass extends UserClass {
    constructor(name, email, rollNo) {
        super(name, email);
        this.rollNo = rollNo;
    }

    registerEvent() {
        console.log(this.name + " registered for an event.");
    }
}

class OrganizerClass extends UserClass {
    constructor(name, email, department) {
        super(name, email);
        this.department = department;
    }

    createEvent() {
        console.log(this.name + " created a new event.");
    }
}

// Objects
const s1 = new StudentClass("Amit", "amit@mail.com", 102);
s1.login();
s1.registerEvent();

const o1 = new OrganizerClass("Neha", "neha@mail.com", "ECE");
o1.login();
o1.createEvent();
