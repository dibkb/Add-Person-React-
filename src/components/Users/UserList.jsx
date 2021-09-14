import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card.component";

const UserList = (props) => {
  return (
    <Card className ={classes.users}>
      <ul className = {classes.usersUl}>
        {props.users.map((user) => (
          <li key = {user.id} className = {classes.usersLi}>
            {user.name} ({user.age} years old.)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
