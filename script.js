let schoolOfRock = {
    name: "School of Rock",
    students: [],
    teachers: [],
    relegateStudent: function (student) {
        this.students = this.students.filter((s) => s !== student); // Ta bort studenten från skolan
        student.subjects.forEach((subject) => {
            subject.students = subject.students.filter((s) => s !== student); // Ta bort studenten från ämnena
        });
        student.subjects = []; // Nollställ studentens ämnesrelationer
        console.log(`${student.name} has been removed from the school.`);
    },
    fireTeacher: function (teacher) {
        this.teachers = this.teachers.filter((t) => t !== teacher); // Ta bort läraren från skolan
        teacher.subjects.forEach((subject) => {
            subject.teacher = null; // Ta bort läraren från ämnet
        });
        teacher.subjects = []; // Nollställ lärarens ämnesrelationer
        console.log(`${teacher.name} has been fired.`);
    },

    /*skolans övriga egenskaper*/
  };

  let math = {
    name: "math",
    students: [],
    teacher:  {

    },
    addStudent: function (student) {
        this.students.push(student);
        student.subjects.push(this);
      },
      removeTeacher: function () {
        if (this.teacher) {
            this.teacher.subjects = this.teacher.subjects.filter((s) => s !== this); // Ta bort ämnet från lärarens lista
            this.teacher = null; // Nollställ läraren
            console.log(`Teacher removed from subject: ${this.name}`);
        }
    },
    
};

let history = {
    name: "history",
    students: [],
    teacher: {

    },
    addStudent: function (student) {
        this.students.push(student);
        student.subjects.push(this);
      },
    
    
};

let geography = {
    name: "geography",
    students: [],
    teacher: {},
    addStudent: function (student) {
        this.students.push(student);
        student.subjects.push(this);
      },
};

let Shadynasty = { 
    name: "SHAdynasty", 
    age: 16, 
    gender: "Female", 
    subjects: [] 
};

let Bob = { 
    name: "Bob", 
    age: 18, 
    gender: "Male", 
    subjects: [] 
};

let Henrik = { 
    name: "Henrik", 
    age: 16, 
    gender: "Man", 
    subjects: [] 
};

let Calle = { 
    name: "Calle", 
    age: 16, 
    gender: "Man", 
    subjects: [] 
};

let Susanne = { 
    name: "Susanne", 
    age: 17, 
    gender: "Female", 
    subjects: [] 
};

let Monica = { 
    name: "Monica", 
    age: 16, 
    gender: "Female", 
    subjects: [] 
};

let Alice = { 
    name: "Alice", 
    age: 16, 
    gender: "Female", 
    subjects: [],
};

let Arne = { 
    name: "Arne", 
    subjects: [], 
    addSubject: function (subject) {
        this.subjects.push(subject); // Lägg till ämnet i lärarens ämnesarray
        subject.teacher = this; // Sätt läraren som ansvarig för ämnet
      },
    };
  
  // Använd metoden för att lägga till ämnet till läraren
  Arne.addSubject(history);
  
  // Inspektera resultaten i konsolen
  console.log("Teacher Arne after adding subject:", Arne);
  console.log("History after assigning teacher Arne:", history);
  

const Karin = { 
    name: "Karin", 
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject); // Lägg till ämnet i lärarens ämnesarray
        subject.teacher = this; // Sätt läraren som ansvarig för ämnet
      },
};

function initializeSchool() {
    // Lägg till lärare och studenter till skolan
    schoolOfRock.teachers.push(Arne);
/*     schoolOfRock.students.push(Alice, Bob);
 */
    // Lägg till ämne till lärare
    Arne.addSubject(math);

    // Lägg till studenter till ämnet
    math.addStudent(Alice);
    math.addStudent(Bob);
    geography.addStudent(Monica);
    geography.addStudent(Henrik);

    //Ta bort studenter från ämnen
    math.relegateStudent(Alice);

    console.log("School initialized with data:");
    console.log("School:", schoolOfRock);
    console.log("Math:", math);
    console.log("Geography:", geography);
    console.log("History", history);

}

Arne.subjects.push(math);
Karin.subjects.push(history);


console.log("teacher after adding math", Arne);
console.log("Subject after assigning teacher:", math);

math.teacher = Arne;

math.students.push(Henrik);
console.log("Math after adding a student:", math);

// Lägger till  ett ämne i studentens subjecctesS-array
Henrik.subjects.push(math);
console.log("Student after enrolling in a subject:", Henrik);

// Lägg till studenter och lärare i skolans arrays
schoolOfRock.students.push(Henrik, Calle, Susanne, Monica, Alice, Bob, Shadynasty);
schoolOfRock.teachers.push(Arne, Karin);

// Inspektera datan på hjela skolan
console.log("School data:", schoolOfRock);

function displayAllStudents() {
    console.log("All students in the school:");
    for (let index in schoolOfRock.students) {
        const student = schoolOfRock.students[index];
        console.log(
            `Student ${parseInt(index) + 1}: ${student.name}, Age: ${student.age}, Gender: ${student.gender}, Subjects: ${student.subjects
                .map((sub) => sub.name)
                .join(", ")}`
        );
    }
}

initializeSchool();

// Visa alla studenter
displayAllStudents();







