import React from "react";
import { Formik } from "formik";
import { Input, Title, Button, Label, Form } from "./theme.js";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const CheckboxExample = () => (
  <div>
    <Formik
      initialValues={{
        boxName: "",
        area: "",
        city: "",
        affiliate: false,
        openBox: false,
        dropBar: false,
        juniorClass: false,
        kidsClass: false
      }}
      onSubmit={async values => {
        // await sleep(1);
        console.log(values);
      }}
    >
      {({ isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Title className="label">Basic Info</Title>
          <Label>
            Box Name
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="boxName"
              placeholder="Box Name"
              id="boxName"
            />
          </Label>
          <Label>
            Area
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="area"
              placeholder="Area in m2"
              id="area"
            />
          </Label>
          <Label>
            City
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="city"
              placeholder="City"
              id="box-name"
            />
          </Label>
          <label>
            <Input onChange={handleChange} type="checkbox" name="affiliate" />
            Affiliate
          </label>
          <label>
            <Input onChange={handleChange} type="checkbox" name="openBox" />
            Open Box
          </label>
          <label>
            <Input onChange={handleChange} type="checkbox" name="dropBar" />
            Drop Bar
          </label>
          <label>
            <Input onChange={handleChange} type="checkbox" name="juniorClass" />
            Principiant Class
          </label>
          <label>
            <Input onChange={handleChange} type="checkbox" name="kidsClass" />
            Kids Class
          </label>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CheckboxExample;
