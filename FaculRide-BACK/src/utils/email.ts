import nodemailer from 'nodemailer';

const host = process.env.BREVO_HOST || 'smtp-relay.brevo.com';
const port = Number(process.env.BREVO_PORT || 587);
const user = process.env.BREVO_USER;
const pass = process.env.BREVO_PASS;

const is465 = port === 465; // 465 = TLS direto

export const brevoTransporter = nodemailer.createTransport({
  host,
  port,
  secure: is465,          // true só se 465
  auth: { user, pass },
  requireTLS: !is465,     // força STARTTLS em 587/2525
  connectionTimeout: 15000,
  greetingTimeout: 10000,
  socketTimeout: 20000,
  logger: true,           // loga no console do Render
  debug: true,
  tls: {
    rejectUnauthorized: true,
    minVersion: 'TLSv1.2',
  },
});

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

  await brevoTransporter.sendMail({
    from: process.env.MAIL_FROM || `"FaculRide" <${user}>`, // usa login Brevo se não definir MAIL_FROM
    to: destinatario,
    subject: 'Bem-vindo(a) à FaculRide 🎉',
    html,
  });
}
