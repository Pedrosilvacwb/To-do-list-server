import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
  name: yup.string().required('Campo "Nome" é obrigatório!'),
  email: yup
    .string()
    .email('Digite um email válido!')
    .required('Campo "Email" é obrigatório!'),
  password: yup
    .string()
    .required('Campo "Senha" é obrigatório!')
    .min(8, 'A senha deve conter no minimo 8 caracteres!')
    .matches(/(?=.*\d)/, 'A senha deve conter ao menos um digito!')
    .matches(
      /(?=.*[A-Z])/,
      'A senha deve conter ao menos um caracter Maiúsculo!',
    ),
  imgUrl: yup.string(),
});

export const userResponseSchema = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string(),
  imgUrl: yup.string().nullable(),
  createdAt: yup.date(),
  isActive: yup.boolean(),
  activities: yup.array(),
});

export const loginUserSchema = yup.object().shape({
  email: yup.string().required('Campo Email é obrigatório!'),
  password: yup.string().required('Campo Senha é obrigatório!'),
});
