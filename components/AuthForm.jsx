'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button, CircularProgress, InputLabel, TextField } from '@mui/material';
import { Container, FormLoader, FormWrapper } from '@/styledComponents/styledComponents';

export const VALIDATE_CONFIG = {
  requiredMessage: 'Обязательное поле',
  email: 'Некорректный адрес электронной почты',
  password:
    'Пароль должен содержать не менее 8 символов, одну заглавную букву и не содержать пробелы',
};

export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASS_REGEXP = /^(?=.*[A-Z])[^\s]{8,}$/;

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const router = useRouter();

  const emailRegister = register('email', {
    required: {
      value: true,
      message: VALIDATE_CONFIG.requiredMessage,
    },
    pattern: {
      value: EMAIL_REGEXP,
      message: VALIDATE_CONFIG.email,
    },
  });

  const passwordRegister = register('password', {
    required: {
      value: true,
      message: VALIDATE_CONFIG.requiredMessage,
    },
    pattern: {
      value: PASS_REGEXP,
      message: VALIDATE_CONFIG.password,
    },
  });


  const registrationRequest = (data) => {
    setIsLoading(true);
    // ref.current.disabled = true;
    setIsDisabled(true);
    setTimeout(() => {
      setIsLoading(false);
      // ref.current.disabled = false;
      setIsDisabled(false);
      // redirect to home page
      router.push('/');
    }, 2000);
  };

  return (
    <>
      {isLoading && 
      <FormLoader>

      <CircularProgress size={100} color="secondary" />
      </FormLoader> 
      }

      <form  onSubmit={handleSubmit(registrationRequest)}>
        <FormWrapper>
          <div>
            <InputLabel
              sx={{
                marginBottom: '0.5rem',
              }}
              htmlFor="email"
            >
              * Электронная почта
            </InputLabel>
            <TextField
              disabled={isDisabled}
              sx={{
                width: 500,
              }}
              error={!!errors?.email}
              id="email"
              {...emailRegister}
              type="email"
              name="email"
              placeholder="email@email.email"
              helperText={errors?.email?.message}
            />
          </div>
          <div>
            <InputLabel
              sx={{
                marginBottom: '0.5rem',
              }}
              htmlFor="password"
            >
              * Пароль
            </InputLabel>
            <TextField
              disabled={isDisabled}
              sx={{
                width: 500,
              }}
              {...passwordRegister}
              type="password"
              name="password"
              placeholder="********"
              className="form__input"
              id="password"
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          </div>

          <Button
            size="large"
            variant="contained"
            color="secondary"
            type="submit"
            sx={{
              textTransform: 'capitalize',
              marginTop: '1.2rem'
            }}
          >
            Авторизация
          </Button>
        </FormWrapper>
      </form>

    </>
  );
};
