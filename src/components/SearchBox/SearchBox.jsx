import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const carMakes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Kia",
  "Land Rover",
];

const initialValues = {
  carBrand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

const SearchBox = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    for (let key in values) {
      dispatch(changeFilter({ name: key, value: values[key] }));
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={css.searchForm}>
        <div className={css.formGroup}>
          <label htmlFor="carBrand">Car brand</label>
          <div className={css.inputWrapper}>
            <Field
              as="select"
              id="carBrand"
              name="carBrand"
              className={css.input}
            >
              <option value="">Select a brand</option>
              {carMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </Field>
            <span className={css.dropdownArrow}>&#9662;</span>
          </div>
        </div>
        <div className={css.formGroup}>
          <label htmlFor="price">Price / 1 hour</label>
          <div className={css.inputWrapper}>
            <Field as="select" id="price" name="price" className={css.input}>
              <option value="">Select a price range</option>
              {Array.from({ length: 50 }, (_, i) => (i + 1) * 10).map(
                (price) => (
                  <option key={price} value={price}>
                    Up to ${price}
                  </option>
                )
              )}
            </Field>
            <span className={css.dropdownArrow}>&#9662;</span>
          </div>
        </div>
        <div className={css.formGroup}>
          <label htmlFor="mileageFrom">Car mileage / km</label>
          <div className={css.inputWrapper}>
            <Field
              id="mileageFrom"
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
