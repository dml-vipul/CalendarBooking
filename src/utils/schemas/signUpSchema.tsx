import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Number must be a valid number')
    .length(10, 'Number must be 10 digits')
    .required('Number is required'),
});

export default SignUpSchema;
