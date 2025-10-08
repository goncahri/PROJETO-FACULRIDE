import Brevo from "@getbrevo/brevo";

const apiKey = process.env.BREVO_API_KEY; // crie esta var no Render com a chave da aba "Parâmetros API"
const mailFrom = process.env.MAIL_FROM || "FaculRide <no-reply@faculride.com>";

const brevoClient = new Brevo.TransactionalEmailsApi();
brevoClient.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  apiKey as string
);

export async function enviarEmailBoasVindas(destinatario: string, nome: string) {
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Bem-vindo(a) à FaculRide 🚗✨</h2>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Seu cadastro foi realizado com sucesso!</p>
      <p>A partir de agora, você faz parte da nossa comunidade. 🚀</p>
      <p style="font-size: 0.9rem; color: #555;">
        Este é um e-mail automático, não responda.
      </p>
    </div>
  `;

  await brevoClient.sendTransacEmail({
    sender: { email: mailFrom },
    to: [{ email: destinatario }],
    subject: "Bem-vindo(a) à FaculRide 🎉",
    htmlContent: html,
  });
}
