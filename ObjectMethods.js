const Tasleem = {
  firstName: "Tasleem",
  lastName: "Ahmad",
  birthYear: 2003,
  job: "Programmer",
  friends: ["Obaid", "Hammad", "Farhan"],
  hasDriversLicense: false,

  // calcAge: (birthYear) => {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   //console.log(this);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old, ${
      Tasleem.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} Drivers License. `;
  },
};

console.log(Tasleem.calcAge());
console.log(Tasleem.age);
console.log(Tasleem.age);
console.log(Tasleem.age);

//Challenge
console.log(Tasleem.getSummary());

//challenge 3
//mass in kg and height in meters
const markMiller = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markMiller.calcBMI();
console.log(markMiller.bmi);

const johnSmith = {
  name: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

johnSmith.calcBMI();
console.log(johnSmith.bmi);

if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `${markMiller.name}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.name}'s BMI (${johnSmith.bmi})`
  );
} else {
  console.log(
    `${johnSmith.name}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.name}'s BMI (${markMiller.bmi})`
  );
}
