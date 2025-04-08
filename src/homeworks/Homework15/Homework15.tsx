import { useFormik } from "formik";
import * as Yup from "yup";
import { Homework15Container, ValidationForm } from "./styles";
import { ValidationFormValues } from "./types";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";


function Homework15() {
  const validationSchema = Yup.object().shape({
    // code: Yup.string()
    //   .required("Field is required")
    //   .matches(/^d{6}$/, "Code must contain 6 symbols"),
    code: Yup.number()
      .required("Field required")
      .test(
        "6symb",
        "Must contain 6 symbols",
        (value) => String(value).length === 6
      ),
    privacy: Yup.boolean().oneOf([true], "Please agree"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      privacy: false,
    } as ValidationFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: () => {
      console.log("Login successful ");
    },
  });
  return (
    <Homework15Container>
      <ValidationForm onSubmit={formik.handleSubmit}>
        <Input
          name="code"
          label="Validation code"
          id="code_id"
          type="number"
          placeholder="Enter you code"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.errors.code}
        />
        <Checkbox
          name="privacy"
          checked={formik.values.privacy}
          onChange={formik.handleChange}
          id="privacy_id"
          label="Privacy and Policy"
          error={formik.errors.privacy}
        />
        <Button name="Login" />
      </ValidationForm>
    </Homework15Container>
  );
}
export default Homework15;
