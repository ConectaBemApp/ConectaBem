'use client';

import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '../hooks/useGoogleLogin';
import { Button } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export const GoogleSign = () => {
  // const { mutate: login } = useGoogleLogin();

  return (
    <Button
      className="text-black bg-white text-sm "
      variant="outlined"
      size="large"
      startIcon={<Image alt='google logo' src={'/images/google-logo.svg'} width={20} height={20} />}
      onClick={() => signIn('google')}
    >
      Entrar com o Google
    </Button>
  );
};
