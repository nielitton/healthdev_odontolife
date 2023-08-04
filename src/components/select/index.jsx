import { useForm, Controller } from "react-hook-form";
import { CustomSelectStyle } from "./style";

const CustomSelect = ({ options, field, value }, props) => {
  return (
    <CustomSelectStyle
      value={value}
      {...props}
      className="select-input"
      options={options}
      {...field}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: "#F1F1F1",
        }),
        indicatorSeparator: (baseStyles, state) => ({
          ...baseStyles,
          display: "none",
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused && "var(--blue-color)",
          rotate: state.isFocused && "180deg",
        }),
      }}
    />
  );
};

export { CustomSelect };
