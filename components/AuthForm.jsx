'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CircularProgress } from '@mui/material';

export const VALIDATE_CONFIG = {
  requiredMessage: 'Обязательное поле',
  email: 'Невалидный формат email',
  password:
    'Пароль должен содержать минимум 8 символов, одну заглавную букву и не содержать пробелов',
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
  const ref = useRef(null);


  useEffect(() => {
    const element = ref.current.disabled;
  }, []);

  const registrationRequest = (data) => {
    setIsLoading(true);
    ref.current.disabled = true;
    setTimeout(() => {
      setIsLoading(false);
      ref.current.disabled = false;
      // redirect to home page
      router.push('/');
    }, 2000);
  };

  

  return (
    <>
    <CircularProgress size={100} color="secondary" />
      <form
        onSubmit={handleSubmit(registrationRequest)}
        className="form__modals"
        title="Регистрация"
      >
        <fieldset
          ref={ref}
        >
          <input
            {...emailRegister}
            type="email"
            name="email"
            placeholder="Email"
            className="form__input"
          />
          {errors.email && (
            <span className="form__errors">{errors?.email?.message}</span>
          )}
          <input
            {...passwordRegister}
            type="password"
            name="password"
            placeholder="Пароль"
            className="form__input"
          />
          {errors.password && (
            <span className="form__errors">{errors?.password?.message}</span>
          )}

          <button className="auth__navigation">Вход</button>
        </fieldset>
      </form>
    </>
  );
};
