import { useField, useFormikContext } from "formik";
import Select from "react-select";
import css from "./CustomSelect.module.css";
import { useTranslation } from "react-i18next";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "10px",
    borderColor: state.isFocused ? "var(--black)" : "#6e6e6e",
    boxShadow: "none",
    "&:hover": {
      borderColor: "var(--dark-gray)",
    },
    color: "var(--dark-gray)",
    width: "200px",
    minHeight: "40px",
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--black)",
    caretColor: "transparent",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--black)",
    textAlign: "center",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--super-light-gray)",
    textAlign: "center",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "15px",
    overflow: "hidden",
    width: "200px",
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    maxHeight: "250px",
    overflowY: "auto",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "var(--super-light-gray)"
      : state.isFocused
      ? "var(--light-gray)"
      : "var(--dark-gray)",
    color: "var(--light-white)",
    "&:hover": {
      backgroundColor: "var(--light-gray)",
    },
    textAlign: "center",
  }),
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CustomSelect = ({ label, type, ...props }) => {
  const [field, , helpers] = useField(props);
  const { setValue } = helpers;
  const { values } = useFormikContext();
  const id = `select-${props.name}`;
  const { t } = useTranslation();

  const formatOptionLabel = (data) => {
    const formattedLabel = numberWithCommas(data.label);
    if (type === "price") {
      return `${t("to")} $${formattedLabel}`;
    } else if (type === "mileage" && props.name === "mileageFrom") {
      return `${t("from")} ${formattedLabel}`;
    } else if (type === "mileage" && props.name === "mileageTo") {
      return `${t("to")} ${formattedLabel}`;
    }
    return formattedLabel;
  };

  return (
    <div className={css.formGroup}>
      <label htmlFor={id}>{label}</label>
      <Select
        {...field}
        {...props}
        inputId={id}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        value={
          values[props.name]
            ? {
                label: numberWithCommas(values[props.name]),
                value: values[props.name],
              }
            : null
        }
        onChange={(option) => setValue(option ? option.value : "")}
        onBlur={field.onBlur}
      />
    </div>
  );
};

export default CustomSelect;
