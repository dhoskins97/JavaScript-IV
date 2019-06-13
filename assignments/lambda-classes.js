// CODE here for your Lambda Classes

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

class Person {
    constructor(aPerson){
        this.name = aPerson.name;
        this.age = aPerson.age;
        this.location = aPerson.location;
    }
speak(){return `Hello my name is ${this.name} I am from ${this.location}`}
}

class Instructor extends Person {
    constructor(anInstructor){
        super(anInstructor);
        this.specialty = anInstructor.specialty;
        this.favLanguage = anInstructor.favLanguage;
        this.catchPhrase = anInstructor.catchPhrase;
    }   
demo(subject){return `Today we are learning about ${subject}`};
grade(student, subject){return `${student.name} received a perfect score on ${subject}!`}
refactorGrade(student, number){return student.grade = student.grade - randomNum(1, 100)}
}

class Student extends Person {
    constructor(aStudent){
        super(aStudent);
        this.previousBackground = aStudent.previousBackground;
        this.className = aStudent.className;
        this.favSubject = aStudent.favSubject;
        this.grade = aStudent.grade;
    }
listsSubjects(){return this.favSubject.toString()}
PRAssignment(subject){return `${this.name} has submitted a PR for ${subject}`}
sprintChallenge(subject){return `${this.name} has begun a Sprint Challenge on ${subject}`}
graduate(){if(this.grade >= 70) {return `${this.name} has graduated! Yeet!`} else {return `${this.name} flunked out. Time to flex!`}}
}

class ProjectManager extends Instructor {
    constructor(aPM){
        super(aPM);
        this.gradClassName = aPM.gradClassName;
        this.favInstructor = aPM.favInstructor;
    }
standUp(channel){return `${this.name} anounces to ${channel}, @channel standy times!`}
debugsCode(student, subject){return `${this.name} debugs ${student.name}'s code on ${subject}`}
}

const dak = new Student({
    name: `Dakota`,
    age: 21,
    location: `Indianapolis`,
    previousBackground: `none`,
    className: 'Web21',
    favSubject: ['JavaScript', 'FlexBox', 'CSS'],
    grade: 99
});

const dan = new Instructor({
    name: 'Dan',
    age: 28,
    location: 'Colorado?',
    specialty: 'Instructing',
    favLanguage: 'Java',
    catchPhrase: 'I spilled my coffee!'
});

const henry = new ProjectManager({
    name: 'Henry',
    age: 24,
    location: 'New York',
    gradClassName: `Web18`,
    favInstructor: 'Josh Knell'
});

henry.refactorGrade(dak)
console.log(dak.graduate())