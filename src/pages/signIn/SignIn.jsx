import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Label,
  FieldStyle,
  ErrorMessageStyle,
  FormStyle,
  GoogleBtn,
  AuthorizationText,
  GoogleIcon,
} from 'components/common.styled';
import { AuthorizationBlock } from 'components/common.styled';
import { useDispatch } from 'react-redux';
import { authSignIn, signInWithGoogle } from 'redux/authOperations';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Введите валидный E-mail')
    .max(255)
    .required('Email обязательное поле'),
  password: yup
    .string()
    .required('Пароль обязательное поле')
    .min(7, 'Пароль должен быть не менее 7 символов'),
});

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(authSignIn({ email, password }));
    resetForm();
  };

  return (
    <AuthorizationBlock>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyle>
          <Label htmlFor="name">
            <AuthorizationText>Email</AuthorizationText>
            <ErrorMessageStyle name="email" component="div" />
            <FieldStyle type="email" name="email" id="email" />
          </Label>
          <Label htmlFor="number">
            <AuthorizationText>Пароль</AuthorizationText>
            <ErrorMessageStyle name="password" component="div" />
            <FieldStyle type="password" name="password" id="password" />
          </Label>
          <Button variant="contained" type="submit">
            Войти
          </Button>
        </FormStyle>
      </Formik>
      <AuthorizationText>или</AuthorizationText>
      <GoogleBtn onClick={signInWithGoogle}>
        <GoogleIcon
          src="https://img.icons8.com/color/48/null/google-logo.png"
          width={20}
          alt="google"
        />
        Продолжить с Google
      </GoogleBtn>
    </AuthorizationBlock>
  );
};
export default SignIn;
