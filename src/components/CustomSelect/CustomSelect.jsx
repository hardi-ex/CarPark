import { useField, useFormikContext } from "formik";
import Select from "react-select";
import css from "./CustomSelect.module.css";

const CustomSelect = ({ label, ...props }) => {
  const [field, , helpers] = useField(props);
  const { setValue } = helpers;
  const { values } = useFormikContext();

  return (
    <div className={css.formGroup}>
      <label>{label}</label>
      <Select
        {...field}
        {...props}
        value={
          values[props.name]
            ? { label: values[props.name], value: values[props.name] }
            : null
        }
        onChange={(option) => setValue(option ? option.value : "")}
        onBlur={field.onBlur}
      />
    </div>
  );
};

export default CustomSelect;
