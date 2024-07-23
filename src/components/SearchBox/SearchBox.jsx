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

const mileageOptions = Array.from({ length: 11 }, (_, i) => 3000 + i * 500);

const SearchBox = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    Object.entries(values).forEach(([key, value]) => {
      dispatch(changeFilter({ name: key, value }));
    });
  };

  const onReset = (resetForm) => {
    resetForm();
    Object.entries(initialValues).forEach(([key]) => {
      dispatch(changeFilter({ name: key, value: initialValues[key] }));
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ resetForm }) => (
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
            </div>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="price">Price / 1 hour</label>
            <div className={css.inputWrapper}>
              <Field as="select" id="price" name="price" className={css.input}>
                <option value="">Select a price range</option>
                {Array.from({ length: 50 }, (_, i) => 30 + i * 10).map(
                  (price) => (
                    <option key={price} value={price}>
                      Up to ${price}
                    </option>
                  )
                )}
              </Field>
            </div>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="mileage">Car mileage / km</label>
            <div className={css.inputWrapper}>
              <Field
                as="select"
                id="mileageFrom"
                name="mileageFrom"
                className={css.input}
              >
                <option value="">From</option>
                {mileageOptions.map((mileage) => (
                  <option key={mileage} value={mileage}>
                    From {mileage}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                id="mileageTo"
                name="mileageTo"
                className={css.input}
              >
                <option value="">To</option>
                {mileageOptions.map((mileage) => (
                  <option key={mileage} value={mileage + 500}>
                    To {mileage + 500}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className={css.buttonGroup}>
            <button type="submit" className={css.searchButton}>
              Search
            </button>
            <button
              type="button"
              className={css.searchButton}
              onClick={() => onReset(resetForm)}
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
