// CODE here for your Lambda Classes

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function displayEach(arr) {
    for (i = 0; i < arr.length; ++i) {
        console.log(arr[i])
    }
}

class Person {
    constructor(aPerson) {
        this.name = aPerson.name;
        this.age = aPerson.age;
        this.location = aPerson.location;
    }
    speak() {
        return `Hello my name is ${this.name} I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(anInstructor) {
        super(anInstructor);
        this.specialty = anInstructor.specialty;
        this.favLanguage = anInstructor.favLanguage;
        this.catchPhrase = anInstructor.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    };
    grade(student, subject) {
        return `${student.name} received a perfect score on ${subject}!`
    }
    refactorGrade(student, number) {
        return student.grade = student.grade - randomNum(1, 100)
    }
}

class Student extends Person {
    constructor(aStudent) {
        super(aStudent);
        this.previousBackground = aStudent.previousBackground;
        this.className = aStudent.className;
        this.favSubject = aStudent.favSubject;
        this.grade = aStudent.grade;
    }
    listsSubjects() {
        return displayEach(this.favSubject)
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a Sprint Challenge on ${subject}`
    }
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has graduated! Yeet!`
        } else {
            return `${this.name} flunked out. Time to flex!`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(aPM) {
        super(aPM);
        this.gradClassName = aPM.gradClassName;
        this.favInstructor = aPM.favInstructor;
    }
    standUp(channel) {
        return `${this.name} anounces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const dak = new Student({
    name: `Dakota`,
    age: 21,
    location: `Indianapolis`,
    previousBackground: `none`,
    className: 'Web21',
    favSubject: ['JavaScript', 'FlexBox', 'CSS'],
    grade: 90
});

const jim = new Student({
    name: `Jim`,
    age: 33,
    location: `Des Moines`,
    previousBackground: `3+ years in IT`,
    className: 'Web21',
    favSubject: ['C#', 'C++'],
    grade: 85
});

const dan = new Instructor({
    name: 'Dan',
    age: 28,
    location: 'Colorado?',
    specialty: 'Instructing',
    favLanguage: 'Java',
    catchPhrase: 'I spilled my coffee!'
});

const ryan = new Instructor({
    name: 'Ryan',
    age: 30,
    location: 'San Francisco',
    specialty: 'Recording videos',
    favLanguage: 'JavaScript',
    catchPhrase: 'Foo is equal to bar.'
});

const henry = new ProjectManager({
    name: 'Henry',
    age: 24,
    gradClassName: `Web18`,
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'React/Redux',
    favLanguage: 'Redux',
    catchPhrase: 'Those people are psychopaths.'
});

const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});

console.log(dak.listsSubjects())
console.log(jim.PRAssignment(`Class Constructors`))
console.log(dak.sprintChallenge(`C++`))

console.log(dan.demo(`Ruby`))
console.log(ryan.grade(jim, `Python`))

console.log(henry.standUp(`#web21_henry`))
console.log(austin.debugsCode(dak, `JavaScript`))

henry.refactorGrade(dak)
console.log(dak.graduate())