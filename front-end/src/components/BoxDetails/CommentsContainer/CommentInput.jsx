import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  button: {
    background:
      "linear-gradient: 45deg, rgb(250, 245, 246) 30%, rgb(214, 214, 213) 90%",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.14)",
    color: "black",
    height: 48,
    padding: "0 30px"
  }
}));

export default function CommentInput(props) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { create } = props;
  const onSubmit = data => {
    console.log(data);
    create(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Form.Control
        name="commentForm"
        ref={register({ required: true, maxLength: 140 })}
        id="outlined-basic"
        label="Put your comment here"
        variant="outlined"
      />
      <Button type="submit" className={classes.button}>
        Send Comment
      </Button>
    </form>
  );
}
