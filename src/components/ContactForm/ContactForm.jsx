import {ErrorMessage, Field, Form, Formik} from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import ReactInputMask from "react-input-mask";
import {useId} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contactsSlice";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const idFieldName = useId();
  const idFieldNumber = useId();

  const initialValues = {
    nameContact: "",
    numberContact: "",
  };

  const handleSubmit = (values, actions) => {
    const action = addContact({
      id: crypto.randomUUID(),
      name: values.nameContact,
      number: values.numberContact,
    });

    dispatch(action);

    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    nameContact: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .matches(/^[A-Za-z]+$/, "Name must consist only of letters!")
      .required("Required"),

    numberContact: Yup.string().required("Required"),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      {({setFieldValue}) => (
        <Form className={css.form}>
          <h2 className={css.title}>Add Contact</h2>
          <label htmlFor="{idFieldName}">
            <span className={css.label}>Name</span>
            <Field
              id={idFieldName}
              type="text"
              name="nameContact"
              className={css.field}
              placeholder="John"
            />
            <ErrorMessage name="nameContact" component="div" className={css.message__error} />
          </label>

          <label htmlFor="{idFieldNumber}">
            <span className={css.label}>Number</span>
            <Field id={idFieldNumber} type="text" name="numberContact" placeholder="123-45-67">
              {({field}) => (
                <ReactInputMask
                  {...field}
                  className={css.field}
                  mask="999-99-99"
                  maskChar="_"
                  placeholder="___-__-__"
                  onChange={(e) => setFieldValue("numberContact", e.target.value)}
                />
              )}
            </Field>
            <ErrorMessage name="numberContact" component="div" className={css.message__error} />
          </label>

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
