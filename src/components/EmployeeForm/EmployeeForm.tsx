import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormComponent,
  Title,
  ErrorMessage,
} from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    full_name: Yup.string()
      .required("Field 'Full name' is required")
      .min(5, "Minimum 5 symbols")
      .max(50, "Maximum 50 symbols"),
    age: Yup.number()
      .typeError("Type of value is number")
      .required("Field 'Age' is required")
      .min(18, "Minimum age is 18")
      .max(80, "Maximum age is 50"),
    agreement: Yup.boolean().oneOf([true], "Accept agreement"),
    password: Yup.string()
      .required("Field password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/,
        "Password must contain min 8 characters (uppercase letter, lowercase letter, number, special character)"
      ),
    code: Yup.number()
      .typeError("Field code must be number")
      .test(
        "Min length",
        "Min 3 symbols",
        (value) => value!= null && String(value).length >= 3
      )
      .test(
        "Max length",
        "Max 8 symbols",
        (value) => value != null && String(value).length <= 8
      ),
  });

  const employeeFormik = useFormik({
    initialValues: {
      full_name: "",
      age: "",
      agreement: false,
      password: "",
      code: "",
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  return (
    <EmployeeFormComponent onSubmit={employeeFormik.handleSubmit}>
      <Title>Employee form</Title>
      <Input
        name="full_name"
        label="Full Name *"
        id="full_name_id"
        placeholder="Enter your full name"
        value={employeeFormik.values.full_name}
        onChange={employeeFormik.handleChange}
        error={employeeFormik.errors.full_name}
      />
      <Input
        name="age"
        label="Age *"
        id="age_id"
        placeholder="Enter your age"
        value={employeeFormik.values.age}
        onChange={employeeFormik.handleChange}
        error={employeeFormik.errors.age}
      />
      <Input
        name="password"
        label="Password *"
        id="password_id"
        placeholder="Enter your password"
        value={employeeFormik.values.password}
        onChange={employeeFormik.handleChange}
        error={employeeFormik.errors.password}
      />

      <Input
        name="code"
        label="code"
        id="code_id"
        placeholder="Enter your employee code"
        value={employeeFormik.values.code}
        onChange={employeeFormik.handleChange}
        error={employeeFormik.errors.code}
      />

      <CheckboxContainer>
        <Checkbox
          name="agreement"
          type="checkbox"
          id="agree_id"
          checked={employeeFormik.values.agreement}
          onChange={employeeFormik.handleChange}
        ></Checkbox>
        <CheckboxLabel htmlFor="agree_id">
          I agree privacy and policy
        </CheckboxLabel>
      </CheckboxContainer>
      <ErrorMessage>{employeeFormik.errors.agreement}</ErrorMessage>
      <Button name="Create" />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
