/**
 * Account form rules — shared by sign-in and sign-up, and free of React so
 * the same checks can run on the server once an API exists.
 */

export type AccountMode = 'signin' | 'signup';
/** Password, a one-time link by email, or a one-time code by SMS. */
export type AccountMethod = 'password' | 'link' | 'phone';

export interface AccountValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  /** Dialling code chosen from `COUNTRY_CODES`, e.g. "+91". */
  countryCode: string;
  /** The number as typed, without the dialling code. */
  phone: string;
  /** Sign-in only: keep the session on this device. */
  remember: boolean;
  /** Sign-up only: optional news about new regional chapters. */
  updates: boolean;
}

export type AccountField = 'firstName' | 'lastName' | 'email' | 'password' | 'phone';
export type AccountErrors = Partial<Record<AccountField, string>>;

/** India first; the others match the shop's markets and large diaspora
    audiences. The code leads each label so it survives truncation on phones. */
export const COUNTRY_CODES = [
  { code: '+91', label: '+91 India' },
  { code: '+1', label: '+1 US / Canada' },
  { code: '+44', label: '+44 UK' },
  { code: '+971', label: '+971 UAE' },
  { code: '+65', label: '+65 Singapore' },
  { code: '+61', label: '+61 Australia' },
  { code: '+49', label: '+49 Germany' },
  { code: '+33', label: '+33 France' },
] as const;

export const emptyAccountValues: AccountValues = {
  firstName: '', lastName: '', email: '', password: '', countryCode: '+91', phone: '', remember: false, updates: false,
};

/* Letters from any script (Devanagari, Bengali, Tamil, Latin…), combining
   marks, and the separators real names use. */
const NAME = /^[\p{L}\p{M}][\p{L}\p{M}' .-]*$/u;
/* Deliberately loose: the address is only proven by the email that will be
   sent to it. This catches typos, not edge cases of RFC 5322. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const PASSWORD_MIN = 8;
export const PASSWORD_HINT = `At least ${PASSWORD_MIN} characters, including a letter and a number.`;
export const PHONE_HINT = 'We’ll text a one-time code to this number.';

/** The fields a form shows for a given mode and method, in display order. */
export function fieldsFor(mode: AccountMode, method: AccountMethod): AccountField[] {
  const names: AccountField[] = mode === 'signup' ? ['firstName', 'lastName'] : [];
  if (method === 'phone') return [...names, 'phone'];
  return [...names, 'email', ...(method === 'password' ? ['password' as const] : [])];
}

/**
 * The national number as digits only, with separators removed and a repeated
 * dialling code or Indian trunk "0" dropped — people paste numbers in every
 * form ("+91 98765-43210", "098765 43210").
 */
export function nationalDigits(phone: string, countryCode: string): string {
  let v = phone.replace(/[\s().-]/g, '');
  const code = countryCode.replace('+', '');
  if (v.startsWith('+' + code)) v = v.slice(code.length + 1);
  else if (v.startsWith('00' + code)) v = v.slice(code.length + 2);
  if (countryCode === '+91' && v.length === 11 && v.startsWith('0')) v = v.slice(1);
  return v;
}

/** E.164 form (+919876543210) for whichever backend sends the code. */
export function e164(values: Pick<AccountValues, 'phone' | 'countryCode'>): string {
  return values.countryCode + nationalDigits(values.phone, values.countryCode);
}

function nameError(value: string, label: string): string | undefined {
  const v = value.trim();
  if (!v) return `Enter your ${label}.`;
  if (v.length > 50) return `Your ${label} must be 50 characters or fewer.`;
  if (!NAME.test(v)) return `Your ${label} can use letters, spaces, apostrophes, full stops and hyphens.`;
  return undefined;
}

function phoneError(values: AccountValues): string | undefined {
  if (!values.phone.trim()) return 'Enter your mobile number.';
  const digits = nationalDigits(values.phone, values.countryCode);
  if (!/^\d+$/.test(digits)) return 'Your mobile number can only use digits, spaces and hyphens.';
  if (values.countryCode === '+91') {
    return /^[6-9]\d{9}$/.test(digits) ? undefined : 'Enter a 10-digit Indian mobile number starting with 6, 7, 8 or 9.';
  }
  /* E.164 allows 15 digits including the country code. */
  return digits.length >= 6 && digits.length + values.countryCode.length - 1 <= 15
    ? undefined
    : 'Enter your mobile number without the country code.';
}

/** One field's error message, or undefined when it is valid. */
export function validateField(field: AccountField, values: AccountValues, mode: AccountMode): string | undefined {
  switch (field) {
    case 'firstName': return nameError(values.firstName, 'first name');
    case 'lastName': return nameError(values.lastName, 'last name');
    case 'phone': return phoneError(values);
    case 'email': {
      const v = values.email.trim();
      if (!v) return 'Enter your email address.';
      if (v.length > 254 || !EMAIL.test(v)) return 'Enter an email address in the format name@example.com.';
      return undefined;
    }
    case 'password': {
      const v = values.password;
      if (!v) return mode === 'signin' ? 'Enter your password.' : 'Create a password.';
      /* Sign-in only checks presence: the server decides if it is right. */
      if (mode === 'signin') return undefined;
      if (v.length < PASSWORD_MIN) return `Your password must be at least ${PASSWORD_MIN} characters.`;
      if (v.length > 128) return 'Your password must be 128 characters or fewer.';
      if (!/\p{L}/u.test(v) || !/\d/.test(v)) return 'Your password must include a letter and a number.';
      return undefined;
    }
  }
}

/** Every visible field's error, in display order. Empty when the form is valid. */
export function validateAccount(values: AccountValues, mode: AccountMode, method: AccountMethod): AccountErrors {
  const errors: AccountErrors = {};
  for (const field of fieldsFor(mode, method)) {
    const message = validateField(field, values, mode);
    if (message) errors[field] = message;
  }
  return errors;
}
