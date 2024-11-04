// src/utils/validation.ts

export const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export const isValidPassword = (password: string) =>
  password.length >= 6 && /\d/.test(password) && /[A-Z]/.test(password);
