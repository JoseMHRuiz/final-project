import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
}));

export default function CommentInput(props) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { create } = props;
  const onSubmit = data => {
    // service.postComment(data, userInSession, boxId);
    create(data);
    // console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      {/* <TextField
        // id="standard-basic"
        // label="Comment"
        // type="text"
        // placeholder="Comment"
        name="Comment"
        ref={register}
      /> */}
      <input
        name="commentForm"
        ref={register({ required: true, maxLength: 140 })}
        className={classes.button}
      />
      <Button type="submit" className={classes.button}>
        Send Comment
      </Button>
    </form>
  );
}
