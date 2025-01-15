import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

// Configurações do Twilio (obtidas do arquivo .env)
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const fromPhone = process.env.TWILIO_WHATSAPP_NUMBER!;
const toPhone = process.env.MY_WHATSAPP_NUMBER!;

const client = twilio(accountSid, authToken);

interface EmailSent {
  created_at: string;
  data: {
    created_at: string;
    email_id: string;
    from: string;
    subject: string;
    to: string[];
  };
  type: string;
}

export async function POST(req: NextRequest) {
  try {
    // Recebe e extrai o payload da requisição
    const payload: EmailSent = await req.json();
    const { from, to, subject } = payload.data;

    // Monta a mensagem para WhatsApp
    const mensagemWhatsApp = `📧 Novo e-mail recebido!
    - Assunto: ${subject}
    - De: ${from}
    - Para: ${to.join(", ")}`;

    // Envia a mensagem via Twilio
    const message = await client.messages.create({
      from: fromPhone, // Número do Twilio
      to: toPhone, // Seu número de WhatsApp
      body: mensagemWhatsApp, // Corpo da mensagem
    });

    console.log("Mensagem enviada com sucesso:", message.sid);

    // Retorna resposta de sucesso
    return NextResponse.json(
      { message: "Requisição POST processada e notificação enviada!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro:", error);
    return NextResponse.json(
      { error: `Erro ao processar a requisição: ${error}` },
      { status: 500 }
    );
  }
}
