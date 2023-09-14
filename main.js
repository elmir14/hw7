function User(name, age) {
    let userName = name;
    let userAge = age;
this.say = function() {
    console.log(`Имя пользователя: ${userName}, Возраст: ${userAge}`);
    };
}

const misha = new User('elina', 17);
console.log(misha.userName);
console.log(misha.userAge);

misha.userName = 'Ulan'; 
misha.userAge = 40; 

misha.say();

//// 2 exercise

// class User {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }

//     getFullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   }

//   class Student extends User {
//     constructor(name, surname, yearOfAdmission) {
//       super(name, surname);
//       this.yearOfAdmission = yearOfAdmission;
//     }

//     getCourse() {
//       const currentYear = new Date().getFullYear();
//       const course = currentYear - this.yearOfAdmission + 1;

//       if (course < 1) {
//         return 1;
//       } else if (course > 3) {
//         return 3;
//       } else {
//         return course;
//       }
//     }
//   }

//   const student = new Student("Шайлообеков", "Байсал", 2021);
//   console.log(student.getFullName()); 
//   console.log(student.getCourse()); 

///// 3 exercise

const Car = function (make, speed) {
this.make = make;
this.speed = speed;
};

Car.prototype.output = function () {
console.log(`Name ${this.make} speed: ${this.speed}`);
};

Car.prototype.accelerate = function () {
this.speed += 10;
console.log(`Name ${this.make} speed: ${this.speed}`);
};

Car.prototype.decelerate = function () {
this.speed -= 10;
console.log(`Name ${this.make} speed: ${this.speed}`);
};

const ford = new Car('Ford', 130);

ford.output(); 
ford.accelerate(); 
ford.decelerate();
ford.decelerate();
ford.decelerate();






///// доп

class Cleaning {
do() {
    console.log('Мама сказала убраться дома');
}
}

class FirstSon extends Cleaning {
do() {
    console.log('Вытирать пыль');
}
}

class SecondSon extends Cleaning {
do() {
    console.log('Пылесосить');
}
}