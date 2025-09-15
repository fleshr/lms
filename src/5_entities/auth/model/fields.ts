import { z } from "zod";

export const NameFieldSchema = z.string().min(2).max(50);

export const EmailFieldSchema = z.email();

export const ImageFieldSchema = z.url();

export const PasswordFieldSchema = z.string().min(8).max(128);
