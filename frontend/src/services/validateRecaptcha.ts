import { load } from "recaptcha-v3";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const validateRecaptcha = async (): Promise<boolean> => {
  if (!siteKey) {
    console.error("siteKey not found in environment");
    return false;
  }

  try {
    // Carrega o reCAPTCHA e obtém o token
    const recaptcha = await load(siteKey);
    const token = await recaptcha.execute("submit");

    // Envia o token para a API de validação
    const response = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    // Retorna true se a resposta do servidor foi bem-sucedida
    if (!response.ok) {
      console.error("Erro na resposta do servidor ao validar o reCAPTCHA");
      return false;
    }

    const data = await response.json();
    return data.success;
  } catch (err) {
    console.error("Erro ao validar o reCAPTCHA no cliente:", err);
    return false;
  }
};
