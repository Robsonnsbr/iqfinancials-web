import { NextResponse } from "next/server";

const secretKey = process.env.RECAPTCHA_SECRET_KEY;

if (!secretKey) {
  throw new Error("The RECAPTCHA_SECRET_KEY is not defined");
}

export interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token do reCAPTCHA não fornecido" },
        { status: 400 }
      );
    }

    // Faz a solicitação ao Google reCAPTCHA
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    // Valida a resposta do Google
    if (!res.ok) {
      console.error("Erro ao se comunicar com o reCAPTCHA:", res.statusText);
      return NextResponse.json(
        { success: false, error: "Erro ao verificar o reCAPTCHA com o Google" },
        { status: res.status }
      );
    }

    const result: RecaptchaResponse = await res.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro no servidor ao processar o reCAPTCHA:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar o reCAPTCHA" },
      { status: 500 }
    );
  }
}
