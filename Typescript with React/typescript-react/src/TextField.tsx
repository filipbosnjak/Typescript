import React from "react";

interface Person {
  //Here we define our own type -> like structure in c
  name: String;
  age: Number;
  ok?: boolean; // -> with ? we tell that this is an optional prop
  func: () => String | void; //Here we require a function that only returns a string or void (nothing)
}

interface Props {
  // name: String,
  // age: Number

  person: Person;
}
//Ctrl + space gives the list of passed props
const TextField: React.FC<Props> = ({ person }) => {
  const { name, age } = person;
  console.log(person.func());
  return (
    <div>
      <input type="text" placeholder="Input" />
      <div>
        Name: {name} ,age: {age}
      </div>
    </div>
  );
};

export default TextField;
