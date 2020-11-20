import React, { useRef, useState } from "react";

interface Person {
  //Here we define our own type -> like structure in c
  name: String;
  age: Number;
  ok?: boolean; // -> with ? we tell that this is an optional prop
  greeting: () => String | void; //Here we require a function that only returns a string or void (nothing)
}

interface Props {
  // name: String,
  // age: Number

  person: Person;
}
//Ctrl + space gives the list of passed props
const TextField: React.FC<Props> = ({ person }) => {
  const { name, age } = person;
  console.log(person.greeting());

  const [count, setCount] = useState("pewds"); //type inferred here

  const [count1, setCount1] = useState<string | number | null>(null); //Here we say that our count1 can be string , number or null

  const [person1, setPerson1] = useState<Person | string | null | undefined>();

  interface newInterface {
    name: string;
    id: number | undefined;
  }

  const newVariable: newInterface = {
    name: "Name",
    id: 423,
  };

  const [newVal, setNewVal] = useState<newInterface>(newVariable); //Without null or undefined we can use the spread operator in setState

  console.log(newVal);

  type func = (event: React.ChangeEvent<HTMLInputElement>) => void;
  const handleChange: func = (e) => {
    e.preventDefault();
    // setNewVal({ name: e.target.value, id: newVal?.id });
    setNewVal({
      ...newVal,
      name: e.target.value,
    });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);

  return (
    <div>
      <input
        type="text"
        placeholder="Input"
        ref={inputRef}
        onChange={handleChange}
      />
      <div>
        Name: {newVal?.name} ,age: {age}
      </div>
    </div>
  );
};

export default TextField;
