// src/utils/email.ts
import * as Brevo from '@getbrevo/brevo';

// ---- envs ----
const API_KEY = process.env.BREVO_API_KEY as string;

// Você pode usar MAIL_FROM_NAME / MAIL_FROM_EMAIL (recomendado)
const FROM_NAME = process.env.MAIL_FROM_NAME || 'FaculRide';
const FROM_EMAIL =
  process.env.MAIL_FROM_EMAIL ||
  // fallback: tenta extrair de MAIL_FROM tipo "Nome <email@dominio>"
  (process.env.MAIL_FROM?.match(/<([^>]+)>/)?.[1] ??
    process.env.MAIL_FROM ??
    'no-reply@faculride.com');

if (!API_KEY) {
  console.warn('[email] BREVO_API_KEY ausente. Envio real não funcionará.');
}

// SDK client
const brevoClient = new Brevo.TransactionalEmailsApi();
brevoClient.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, API_KEY);

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

  try {
    const resp = await brevoClient.sendTransacEmail({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: destinatario, name: nome }],
      subject: 'Bem-vindo(a) à FaculRide 🎉',
      htmlContent: html,
    });

    console.log('[email] enviado via Brevo API:', resp);
  } catch (err: any) {
    console.error('[email] Falha ao enviar:', err?.response?.text || err?.message || err);
    throw err;
  }
}
