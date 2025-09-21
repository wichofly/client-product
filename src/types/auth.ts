import { object, string, minLength, email, pipe } from 'valibot';

export const RegisterSchema = object({
  name: pipe(string(), minLength(3, 'Name is required')),
  email: pipe(string(), email('Not a valid email address')),
  password: pipe(
    string(),
    minLength(6, 'Password should be at least 6 characters long')
  ),
});

export const LoginSchema = object({
  email: pipe(string(), email('Not a valid email address')),
  password: pipe(
    string(),
    minLength(6, 'Password should be at least 6 characters long')
  ),
});
