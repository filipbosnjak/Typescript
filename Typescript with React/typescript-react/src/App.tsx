import { count } from "console";
import React from "react";
import "./App.css";
import Counter from "./Counter";
import TextField from "./TextField";
import TodoApp from "./TodoApp";

const App: React.FC = () => {
  class MyPerson {
    name: String;
    age: Number;
    ok: boolean;
    func: () => String | void;

    constructor(name: String, age: Number, ok: boolean) {
      this.name = name;
      this.age = age;
      this.ok = ok;
      this.func = () => {
        return this.name;
      };
    }
  }
  const person = {
    name: "Filip",
    age: 24,
    ok: true,
    greeting: () => {
      return person.name; //this.name does not work
    },
  };
  const greeting = () => {
    return "Hello";
  };

  return (
    <div className="App">
      Hello
      {/*React now yells at us if we dont pass correct number and type props */}
      {/*Ctrl + space -> list of the props needed*/}
      <TextField person={person} />
      <TodoApp />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button
              onClick={() => {
                setCount((current) => current + 1);
              }}
            >
              Inc
            </button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
