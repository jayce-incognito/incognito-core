export const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const PhoneRegex = /^[0-9]+$/;

export const isEmailValid = (email: string) => EmailRegex.test(email);

export const isPhoneValid = (phone: string) => PhoneRegex.test(phone);
