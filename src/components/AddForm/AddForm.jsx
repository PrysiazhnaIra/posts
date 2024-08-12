import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addPostsThunk } from "../../redux/operations";
import css from "./AddForm.module.css";
export default function AddForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(addPostsThunk(values));
    options.resetForm();
  };
  const initialValues = {
    title: "",
    body: "",
    avatar: "",
  };
  return (
    <div className={css.formBlock}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        className={css.formik}
      >
        <Form className={css.form}>
          <Field name="title" placeholder="Enter title" className={css.field} />
          <Field name="body" placeholder="Enter body" className={css.field} />
          <Field
            name="avatar"
            placeholder="Enter avatar URL"
            className={css.field}
          />
          <button type="submit" className={css.button}>
            Add post
          </button>
        </Form>
      </Formik>
    </div>
  );
}
