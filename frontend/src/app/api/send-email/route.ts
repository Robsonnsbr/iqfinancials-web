import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@components/common/email-templates/EmailTemplate";
import { FormData } from "src/types/formType";
interface SendEmailRequest {
  formData: FormData;
  subject: string;
}

const resend = new Resend(process.env.SECRET_EMAIL_API_KEY);

export async function POST(req: Request) {
  try {
    // Recebe os dados do corpo da requisição
    const { formData, subject }: SendEmailRequest = await req.json();

    // Envia o email usando Resend
    const { data, error } = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME || "IQ Financials Web"} <${
        process.env.EMAIL_FROM_EMAIL || "onboarding@resend.dev"
      }>`,
      to: ["financialsiq@gmail.com"],
      subject: subject,
      react: EmailTemplate({ formData }),
    });

    // Retorna a resposta com o status do envio
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
