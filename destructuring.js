// Destructuring Objects / Arrays

// const userName = user.name;
// const userName = user['name'];
// const key = 'name'
// const userName = user[key];

function getUser() {
  const user = {
    age: 24,
    email: "test@test.de",
    name: "Jennifer",
    location: {
      lat: 1,
      long: 2,
    },
  };

  return user;
}

const {
  name,
  location: { lat, long },
} = getUser();

console.log(name, lat, long);

const numbers = [1, 2, 3, 4];

const [brokkoli, secondNumber, , lastNumber] = numbers;

console.log(brokkoli, secondNumber, lastNumber);

function useState(startValue) {
  let value = startValue;

  function setValue(newValue) {
    startValue = newValue;
  }

  return [value, setValue];
}

const [student, setStudent] = useState("Jennifer");

console.log(student);
setStudent("Predrag");
console.log(student);

// function Card(props) {
//   const { text, className } = props;
//   const element = document.createElement("article");
//   element.textContent = text;
//   element.className = className;

//   return element;
// }

function Card({ text, className }) {
  const element = document.createElement("article");
  element.textContent = text;
  element.className = className;

  return element;
}

const myCard = Card({ text: "Hello World", className: "card" });
const mySecondCard = Card({ className: "card", text: "Hello Stephie" });

document.body.append(myCard, mySecondCard);
