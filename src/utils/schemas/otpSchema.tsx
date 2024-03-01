import * as Yup from 'yup';

export const otpValidationSchema = Yup.object().shape({
  digit1: Yup.string()
    .matches(/^[0-9]+$/, 'Must be a single digit')
    .required('Required'),
  digit2: Yup.string()
    .matches(/^[0-9]+$/, 'Must be a single digit')
    .required('Required'),
  digit3: Yup.string()
    .matches(/^[0-9]+$/, 'Must be a single digit')
    .required('Required'),
  digit4: Yup.string()
    .matches(/^[0-9]+$/, 'Must be a single digit')
    .required('Required'),
});
