import nodemailer from 'nodemailer';

export const brevoTransporter = nodemailer.createTransport({
  host: process.env.BREVO_HOST || 'smtp-relay.brevo.com',
  port: Number(process.env.BREVO_PORT) || 587,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
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
    from: '"FaculRide" <98ca7e001@smtp-brevo.com>',  // remetente válido/verificado
    to: destinatario,
    subject: 'Bem-vindo(a) à FaculRide 🎉',
    html,
  });
}
