import { ERROR_CODES, type ErrorCodes } from "../model/errorCodes";

export const isAuthErrorCode = (code: string): code is ErrorCodes => {
  return ERROR_CODES.some((errorCode) => errorCode === code);
};
