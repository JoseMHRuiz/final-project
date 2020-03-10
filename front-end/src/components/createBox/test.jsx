import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme
} from "@material-ui/core";

const defaultValues = {
  boxName: "",
  affiliate: false,
  area: "",
  city: "",
  openBox: false,
  dropBar: false,
  juniorClass: false,
  kidsClass: false
};

function Form(props) {
  const { handleSubmit, register, reset, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  return (
    <form onSubmit={handleSubmit(data => setData(data))}>
      <Controller
        as={<Input />}
        type="text"
        placeholder="boxName"
        name="boxName"
        control={control}
        ref={register({ required: true })}
      />
      <Controller
        as={<Checkbox />}
        control={control}
        type="checkbox"
        placeholder="affiliate"
        name="affiliate"
        ref={register}
      />
      <Controller
        as={<Input />}
        control={control}
        type="number"
        placeholder="area"
        name="area"
        ref={register({ required: true })}
      />
      <Controller
        as={<Input />}
        control={control}
        type="text"
        placeholder="city"
        name="city"
        ref={register({ required: true })}
      />
      <Controller
        as={<Checkbox />}
        control={control}
        type="checkbox"
        placeholder="openBox"
        name="openBox"
        ref={register}
      />
      <Controller
        as={<Checkbox />}
        control={control}
        type="checkbox"
        placeholder="dropBar"
        name="dropBar"
        ref={register}
      />
      <Controller
        as={<Checkbox />}
        control={control}
        type="checkbox"
        placeholder="juniorClass"
        name="juniorClass"
        ref={register}
      />
      <Controller
        as={<Checkbox />}
        control={control}
        type="checkbox"
        placeholder="kidsClass"
        name="kidsClass"
        ref={register}
      />

      <input type="submit" />
    </form>
  );
}
export default Form;

import React, { Component } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CheckboxesGroup from "./CheckBox";
import Input from "@material-ui/core/Input";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./createBox.css";
import { Switch } from "@material-ui/core";
const defaultValues = {
  boxName: "",
  affiliate: false,
  area: "",
  city: "",
  openBox: false,
  dropBar: false,
  juniorClass: false,
  kidsClass: false
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      box: {
        boxName: "",

        area: "",
        city: ""
      },
      redirect: null
    };
  }
  checkBoxChange = event => {
    console.log(event);
    this.setState(prevState => ({
      ...prevState,
      box: {
        openBox: event.openBox,
        dropBar: event.dropBar,
        juniorClass: event.juniorClass,
        kidsClass: event.kidsClass,
        affiliate: event.affiliate
      }
    }));
    // console.log(this.state);
  };
  handleChange = checked => {
    // const { name, value } = event.target;
    // const newValueSearch = event.target.value;
    // console.log(event.target);
    //   console.log(this.state);
    this.setState({ checked });
    console.log(this.state);
    // this.setState(prevState => ({
    //   box: {
    //     ...prevState.box, // copy all other key-value pairs of food object
    //     [name]: value
    //   }
    // }));
  };
  handleSubmit(event) {
    console.log(this.state);

    // event.preventDefault();
    // this.setState({
    //   redirect: `/box/search/${this.state.search}`
    // });
  }

  render() {
    return (
      <div className="AppCreate">
        <div className="card card-nav-tabs">
          <div className="card-header card-header-primary">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <ul className="nav nav-tabs" data-tabs="tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#profile"
                      data-toggle="tab"
                    >
                      <i className="material-icons">house</i> Box
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#coaches" data-toggle="tab">
                      <i className="material-icons">face</i> Coaches
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#material" data-toggle="tab">
                      <i className="material-icons">fitness_center</i> Material
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">NameBox</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body ">
            <div className="tab-content text-center">
              <div className="tab-pane active" id="profile">
                <div className="row">
                  <Card className="col data">
                    <div className="map">Map</div>
                    <h4>Schedule</h4>
                    <div className="schedule">
                      <div>
                        <div>
                          <h5>Monday-Friday</h5>

                          {"-"}
                        </div>
                      </div>
                      <div>
                        <div>
                          <h5>Saturday</h5>

                          {"-"}
                        </div>
                        <div>
                          <h5>Sunday</h5>

                          {"-"}
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="col data">
                    <div className="mini-data">
                      {" "}
                      <form onSubmit={e => this.handleSubmit(e)}>
                        <Input
                          type="text"
                          placeholder="boxName"
                          name="boxName"
                          onChange={event => this.handleChange(event)}
                        />

                        <Input
                          type="number"
                          placeholder="area"
                          onChange={event => this.handleChange(event)}
                          name="area"
                        />

                        <Input
                          type="text"
                          placeholder="city"
                          onChange={event => this.handleChange(event)}
                          name="city"
                        />
                        <Switch
                          type="switch"
                          onChange={this.handleChange}
                          checked={this.state.checked}
                          //   onChange={event => this.handleChange(event)}
                        ></Switch>
                        <CheckboxesGroup checkBoxChange={this.checkBoxChange} />
                        <input type="submit" />
                      </form>
                    </div>
                    <div className="mini-data">test3</div>
                  </Card>
                </div>
              </div>
              <div className="tab-pane" id="coaches">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam itaque blanditiis ipsum! Minima totam vero
                  voluptatibus in. Iusto consectetur, tempore molestiae
                  suscipit, minus vel quaerat excepturi delectus quae
                  reprehenderit quia!
                </p>
              </div>
              <div className="tab-pane" id="material">
                <div className="mini-data row">
                  <div className="col">
                    <h3>Machines</h3>
                  </div>
                  <div className="col">
                    <h3>Material</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}