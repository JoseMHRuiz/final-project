import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckboxesGroup(props) {
  console.log(props);
  const classes = useStyles();
  const [state, setState] = React.useState({
    openBox: false,
    dropBar: false,
    juniorClass: false,
    kidsClass: false,
    affiliate: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    props.checkBoxChange(state);
  };

  const { openBox, dropBar, juniorClass, kidsClass, affiliate } = state;
  console.log(state);
  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={openBox}
              onChange={handleChange("openBox")}
              value="openBox"
            />
          }
          label="Open Box"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={dropBar}
              onChange={handleChange("dropBar")}
              value="dropBar"
            />
          }
          label="Drop Bar"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={juniorClass}
              onChange={handleChange("juniorClass")}
              value="juniorClass"
            />
          }
          label="Principiants class"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={kidsClass}
              onChange={handleChange("kidsClass")}
              value="kidsClass"
            />
          }
          label="Kids class"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={affiliate}
              onChange={handleChange("affiliate")}
              value="affiliate"
            />
          }
          label="Affiliate"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}
