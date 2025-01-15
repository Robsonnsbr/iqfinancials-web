//RESTRICT FUNCTION FOR DEVELOPMENT & TESTING

import { dataTableTest } from "@data/index";
import { FormData } from "src/types/formType";

export async function sendTestEmail() {
  try {
    const subject = "Assunto do Teste";
    const formData: FormData = dataTableTest;
    // Preparando o corpo da requisição
    const requestData = {
      formData,
      subject,
    };

    // Enviando os dados para o endpoint da API
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // Verificando se o envio foi bem-sucedido
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro ao enviar email:", errorData);
      return { success: false, message: "Falha ao enviar o email de test" };
    }

    // Se o envio foi bem-sucedido
    const result = await response.json();
    console.log("Email enviado com sucesso:", result);
    return { success: true, message: "Email de teste enviado com sucesso!" };
  } catch (error) {
    console.error("Erro inesperado ao enviar email:", error);
    return {
      success: false,
      message: "Erro inesperado ao enviar o email de teste",
    };
  }
}
