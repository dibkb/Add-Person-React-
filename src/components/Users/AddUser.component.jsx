import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card.component";
import Button from "../UI/Button.component";
import ErrorModal from "../UI/ErrorModal.component";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const updateUsername = (event) => {
    setUsername(event.target.value);
  };
  const [error, setError] = useState();
  const updateAge = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Empty Field Bitch",
        message: `Don't ever enter empty fields ever again on my sites.\n This is the first and last WARNING`,
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "You are toooo little",
        message: `Play with your toys .\n Wait till you are old enough `,
      });

      return;
    }
    props.addUser(enteredUsername, enteredAge);
    console.log(enteredUsername, enteredAge);
    setUsername("");
    setAge("");

  };
  const quitModal = () =>{
    setError(null)
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} quitModal = {quitModal}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={updateUsername}
          ></input>

          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={updateAge}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
