import { ErrorMessage, Field } from "formik";
import { ErrorMessageStyled, InputContainerStyled, LoginInputStyled } from "./LoginInputStyles";

const LoginInput = ({ type, placeholder, name }) => {
  return (
    <Field name={name}>
      {({ field, form: {errors, touched} }) => {
        const isError = errors[field.name] && touched[field.name];
        const errorClass = isError ? 'error' : '';

        return (
          <InputContainerStyled>
            <LoginInputStyled 
              type={type} 
              placeholder={placeholder}
              {...field}
              className={errorClass}
            />

            <ErrorMessage name={field.name}>
              {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
            </ErrorMessage>
          </InputContainerStyled>
        );
      }}
    </Field>
  );
};

export default LoginInput;