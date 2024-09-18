"use server";

import React from "react";
import { Resend } from "resend";

import ContactFormEmail from "./email";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export const validateString = (
  value,
  maxLength
) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const sendEmail = async (formData) => {
  const senderName = formData.get("name");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dhominisalgado@gmail.com",
      subject: `Message from ${senderName} <${senderEmail}> - Portfolio Site`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    return {
      data: {
        status: 200,
        // data: data,
      },
    };
  } catch (error) {
    return {
      data: {
        status: 400,
        // error: getErrorMessage(error),
      },
    };
  }

};