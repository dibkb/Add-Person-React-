import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card.component";
import Button from "./Button.component";
const ErrorModal = (props) => {
  return (
    <div className = {classes.backdrop} onClick = {props.quitModal}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick ={props.quitModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
