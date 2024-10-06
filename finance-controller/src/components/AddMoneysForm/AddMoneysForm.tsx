import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addMoneyTypes } from "./AddMoneysForm.interface";

export const AddMoneysForm = () => {
  const initialValues: addMoneyTypes = {
    sum: 0,
    category: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="sum">Sum:</label>
            <Field type="number" id="sum" name="sum" />
            <ErrorMessage name="sum" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <Field as="select" id="category" name="category">
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="entertainment">Entertainment</option>
              <option value="transport">Transport</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="category" component="div" className="error" />
          </div>

          <button type="submit">Add Money</button>
        </Form>
      </Formik>
    </div>
  );
};
