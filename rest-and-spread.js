//spread operator
{
  const user = {
    name: "Wladimir",
    age: 34,
    email: "test@test.de",
  };

  const copy = {
    ...user,
    name: "Leon",
  };

  console.log(copy);

  const numbers = [1, 2, 3, 4];
  const moreNumbers = [5, 6, 7, 8];
  const allNumbers = [...numbers, ...moreNumbers, 9];

  console.log(numbers);
  console.log(...numbers);

  const students = ["Stephie", "Leon"];
  const updatedStudents = [...students, "Jennifer"];
  console.log(updatedStudents);

  function logInputs(first, second) {
    console.log(first);
    console.log(second);
  }

  logInputs(...students);
}

// rest operator

{
  const user = {
    name: "Wladimir",
    age: 34,
    email: "test@test.de",
  };

  const { age, ...remainingUser } = user;

  console.log(remainingUser);

  const numbers = [1, 2, 3, 4];
  const [first, ...nums] = numbers;
  console.log(nums);

  function logAllInputs(...inputs) {
    console.log(inputs);
    inputs.forEach((input) => console.log(input));
  }

  logAllInputs(1, 2, 3, "Felix");
}
