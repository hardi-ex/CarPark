import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css";

const initialValues = {
  carBrand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const SearchBox = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={css.searchForm}>
        <div className={css.formGroup}>
          <label htmlFor="carBrand">Car brand</label>
          <div className={css.inputWrapper}>
            <Field
              id="carBrand"
              name="carBrand"
              placeholder="Enter the text"
              className={css.input}
            />
            <span className={css.dropdownArrow}>&#9662;</span>
          </div>
        </div>
        <div className={css.formGroup}>
          <label htmlFor="price">Price / 1 hour</label>
          <div className={css.inputWrapper}>
            <Field
              id="price"
              name="price"
              placeholder="To $"
              className={css.input}
            />
            <span className={css.dropdownArrow}>&#9662;</span>
          </div>
        </div>
        <div className={css.formGroup}>
          <label htmlFor="mileage">Car mileage / km</label>
          <div className={css.inputWrapper}>
            <Field
              id="mileage"
              name="mileageFrom"
              placeholder="From"
              className={css.input}
            />
            <Field name="mileageTo" placeholder="To" className={css.input} />
          </div>
        </div>
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBox;
