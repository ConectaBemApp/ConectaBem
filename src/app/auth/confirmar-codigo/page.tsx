"use client";

import { FormMultiStep } from "@/components/FormMultiStep";
import { CodeForm } from "@/features/auth/components/CodeForm/CodeForm";
import { useCredentialLogin } from "@/features/auth/hooks/useCredentialLogin";
import { useAuthStore } from "@/features/auth/stores/useAuthStore";
import { Divider } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function ConfirmCode() {
  const { email, setEmail } = useAuthStore();
  const { mutate: login } = useCredentialLogin();
  const session = useSession();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (session.data?.user?.email && !hasSubmitted) {
      login({
        email: session.data.user.email,
      });
    }

    if (session.data?.user?.email) {
      setEmail(session.data.user.email);
    }

    setHasSubmitted(true);
  }, [session, login, hasSubmitted]);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col md:max-w-[450px] justify-center gap-8">
        <FormMultiStep.Header>
          <Link href={"/auth"}>
            <FormMultiStep.BackStepButton />
          </Link>
          <FormMultiStep.Title>
            Digite o código enviado para {email}!
          </FormMultiStep.Title>
        </FormMultiStep.Header>

        <CodeForm />

        <Divider />

        <div className="flex flex-col gap-4 text-gray-600">
          <span className="">
            Não se esqueça de verificar sua caixa de spam, caso não encontre
            nosso e-mail
          </span>
          <div className="flex items-center gap-2">
            <FaRegQuestionCircle />

            <span className="">Precisa de ajuda?</span>
          </div>
        </div>
      </div>
    </main>
  );
}
