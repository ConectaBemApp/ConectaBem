// import { api } from '@/libs/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useCredentialLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ data }: Args) => {
      console.log(data);
      // const response = await api.post('/auth/google', data);
      // return response.data;
    },
    onSuccess: () => {
      router.refresh();

      router.push(`/auth/confirm-code`);
    },
  });
};

type Data = {
  email: string;
};

type Args = {
  data: Data;
  onSucess?: () => void;
  onError?: () => void;
};
