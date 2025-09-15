export type ErrorCodes = (typeof ERROR_CODES)[number];

export const ERROR_CODES = [
  "INVALID_EMAIL_OR_PASSWORD",
  "INVALID_PASSWORD",
  "PASSWORD_TOO_SHORT",
  "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL",
] as const;
