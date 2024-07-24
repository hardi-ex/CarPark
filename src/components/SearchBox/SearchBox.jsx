import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import carMakes from "../../data/makes.json";
import { useTranslation } from "react-i18next";

const initialValues = {
  carBrand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

const mileageOptions = Array.from({ length: 11 }, (_, i) => 3000 + i * 500);

const SearchBox = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = (values) => {
    const parsedValues = {
      ...values,
      mileageFrom: values.mileageFrom
        ? parseInt(values.mileageFrom.replace(/,/g, ""), 10)
        : "",
      mileageTo: values.mileageTo
        ? parseInt(values.mileageTo.replace(/,/g, ""), 10)
        : "",
    };

    Object.entries(parsedValues).forEach(([key, value]) => {
      dispatch(changeFilter({ name: key, value }));
    });
  };

  const onReset = (resetForm) => {
    resetForm();
    Object.entries(initialValues).forEach(([key, value]) => {
      dispatch(changeFilter({ name: key, value: initialValues[key] }));
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ resetForm }) => (
        <Form className={css.searchForm}>
          <div className={css.formGroup}>
            <label htmlFor="carBrand">{t("carBrand")}</label>
            <div className={css.inputWrapper}>
              <Field
                as="select"
                id="carBrand"
                name="carBrand"
                className={css.input}
              >
                <option value="">{t("selectBrand")}</option>
                {carMakes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="price">{t("pricePerHour")}</label>
            <div className={css.inputWrapper}>
              <Field as="select" id="price" name="price" className={css.input}>
                <option value="">{t("selectPriceRange")}</option>
                {Array.from({ length: 50 }, (_, i) => 30 + i * 10).map(
                  (price) => (
                    <option key={price} value={price}>
                      {t("upTo")} ${price}
                    </option>
                  )
                )}
              </Field>
            </div>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="mileageFrom">{t("mileageFrom")}</label>
            <div className={css.inputWrapper}>
              <Field
                as="select"
                id="mileageFrom"
                name="mileageFrom"
                className={css.input}
              >
                <option value="">{t("from")}</option>
                {mileageOptions.map((mileage) => (
                  <option key={mileage} value={mileage}>
                    {t("from")} {mileage.toLocaleString("en-US")}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                id="mileageTo"
                name="mileageTo"
                className={css.input}
              >
                <option value="">{t("to")}</option>
                {mileageOptions.map((mileage) => (
                  <option key={mileage} value={mileage + 500}>
                    {t("to")} {(mileage + 500).toLocaleString("en-US")}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className={css.buttonGroup}>
            <button type="submit" className={css.searchButton}>
              {t("search")}
            </button>
            <button
              type="button"
              className={css.searchButton}
              onClick={() => onReset(resetForm)}
            >
              {t("reset")}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
