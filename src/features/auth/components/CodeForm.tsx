"use client";

import { CodeInput } from "@/components/CodeInput";
import { useState } from "react";
import { Button } from "@mui/material";
import { useSendCodeEmail } from "../hooks/useSendCodeEmail";

export const CodeForm = () => {
  const [code, setCode] = useState<(string | null)[]>([null, null, null, null]);
  const { mutate: sendEmailCode, error } = useSendCodeEmail();

  const onSubmit = (data: (string | null)[]) => {
    const code = data.join("");

    sendEmailCode({ code });
  };

  const sendNewCode = () => {
    console.log("Código enviado com sucesso");
  }

  return (
    <>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex flex-col gap-2 ">
          <CodeInput
            value={code}
            onChange={setCode}
            onFirstComplete={onSubmit}
          />
          <span className="text-blue-600 cursor-pointer">Reenviar código</span>
        </div>

        {error && <span className="text-red-600">{error?.message}</span>}
      </div>

      <Button
        disabled={!error}
        className="rounded-lg w-full"
        variant="outlined"
        onClick={() => onSubmit(code)}
      >
        Confirmar código
      </Button>
    </>
  );
};
