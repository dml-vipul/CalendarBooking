import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  number: Yup.string()
    .trim()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Invalid phone number'),
});

export default SignInSchema;
