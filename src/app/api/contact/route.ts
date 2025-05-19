// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Faltan campos obligatorios'
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email no válido'
        },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Email content for notification to yourself
    const notificationMailOptions = {
      from: `"Parque Naranja" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // The email address where you want to receive notifications
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #3B82F6; margin-bottom: 20px;">Nuevo mensaje de contacto</h2>
          
          <div style="margin-bottom: 15px;">
            <strong>Nombre:</strong> ${name}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>Email:</strong> ${email}
          </div>
          
          ${phone ? `
          <div style="margin-bottom: 15px;">
            <strong>Teléfono:</strong> ${phone}
          </div>
          ` : ''}
          
          <div style="margin-bottom: 15px;">
            <strong>Asunto:</strong> ${subject}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>Mensaje:</strong>
            <p style="margin-top: 5px; white-space: pre-line;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e1e1e1; color: #666; font-size: 14px;">
            Este mensaje ha sido enviado desde el formulario de contacto de TuWebEmprende.
          </div>
        </div>
      `
    };

    // Send notification email to yourself first
    await transporter.sendMail(notificationMailOptions);

    // After successfully sending the notification email, send confirmation to the user
    const confirmationMailOptions = {
      from: `"Parque Naranja" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Hemos recibido tu mensaje | Parque Naranja',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #3B82F6; margin-bottom: 20px;">¡Gracias por contactar con nosotros!</h2>
          
          <p style="margin-bottom: 15px;">Hola ${name},</p>
          
          <p style="margin-bottom: 15px;">
            Hemos recibido tu mensaje correctamente. Nuestro equipo revisará tu consulta y te responderá 
            a la mayor brevedad posible, normalmente dentro de las próximas 24 horas laborables.
          </p>
          
          <div style="background-color: #EFF6FF; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin-top: 0; margin-bottom: 10px;"><strong>Resumen de tu mensaje:</strong></p>
            <p style="margin-top: 0; margin-bottom: 5px;"><strong>Asunto:</strong> ${subject}</p>
            <p style="margin-top: 0; margin-bottom: 0;"><strong>Mensaje:</strong> ${message.length > 100 ? message.substring(0, 100) + '...' : message}</p>
          </div>
          
          <p style="margin-bottom: 15px;">
            <strong>Información importante:</strong>
          </p>
          <ul style="margin-top: 0; padding-left: 20px;">
            <li style="margin-bottom: 5px;">Horario de atención: Lunes a Viernes de 9:00 a 18:00 CET</li>
            <li style="margin-bottom: 5px;">Por favor, no respondas a este email automático.</li>
          </ul>
          
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e1e1e1; color: #666; font-size: 14px; text-align: center;">
            <p style="margin-top: 0; margin-bottom: 10px;">© ${new Date().getFullYear()} Parque Naranja - Todos los derechos reservados</p>
            <p style="margin-top: 0; margin-bottom: 0;">
              <a href="https://parquenaranja.com" style="color: #3B82F6; text-decoration: none;">parquenaranja.com</a>
            </p>
          </div>
        </div>
      `
    };

    try {
      // Send confirmation email to the user
      await transporter.sendMail(confirmationMailOptions);
    } catch (confirmationError) {
      // Log the error but don't return an error to the client
      // since the main notification email was sent successfully
      console.error('Error sending confirmation email:', confirmationError);
    }

    // Respond to the client
    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      },
      { status: 500 }
    );
  }
}