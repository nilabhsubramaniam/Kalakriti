import type { AccountMethod, AccountMode, AccountValues } from './validation';

/**
 * The single seam between the account forms and a future backend.
 *
 * There is no account API yet, so this sends nothing and stores nothing: it
 * resolves with `preview`, and the form tells the visitor so. When the API
 * exists, replace the body with a same-origin request (the CSP allows only
 * `connect-src 'self'`) and map its responses onto `AccountResult`.
 */
export type AccountResult =
  | { status: 'preview' }
  | { status: 'error'; message: string };

export interface AccountRequest {
  mode: AccountMode;
  method: AccountMethod;
  values: AccountValues;
}

export async function submitAccountRequest(_request: AccountRequest): Promise<AccountResult> {
  return { status: 'preview' };
}
