import { InputStyle } from "./styled";

export const Input = ({ type, placeholder }) => {
  return (
    <>
      <InputStyle type={type} placeholder={placeholder} />
    </>
  );
};
