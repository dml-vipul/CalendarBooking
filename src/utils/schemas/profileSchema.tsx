import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'Name should not be more than 25 characters'),
  // number: Yup.string()
  //   .matches(/^[0-9]+$/, 'Number must be a valid number')
  //   .length(10, 'Number must be 10 digits')
  //   .required('Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});
