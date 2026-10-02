const ALLOWED_BASE_HOST = 's3.bybit.com';
const TAX_BASE_PATH = /^\/tax\/?$/;
const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f]/;
const URL_SCHEME = /^[a-z][a-z\d+.-]*:/i;

export interface TaxDownloadInfo {
  Files: string[];
  Basepath: string;
}

/** Parse and validate the server-provided tax download descriptor. */
export function parseTaxDownloadInfo(value: unknown): TaxDownloadInfo {
  let parsed: unknown = value;
  if (typeof value === 'string') {
    try {
      parsed = JSON.parse(value);
    } catch {
      throw new Error('Invalid tax download JSON.');
    }
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Invalid tax download descriptor.');
  }
  const record = parsed as Record<string, unknown>;
  if (!Array.isArray(record.Files) || record.Files.length === 0 || record.Files.length > 50) {
    throw new Error('Invalid tax download file list.');
  }
  if (!record.Files.every((file) => typeof file === 'string')) {
    throw new Error('Invalid tax download file path.');
  }

  const basepath = validateBasepath(record.Basepath);
  const files = record.Files.map(validateFilePath);
  return { Files: files, Basepath: basepath };
}

/** Canonicalize a required URL descriptor, or allow an empty pending batch URL. */
export function sanitizeTaxDownloadInfoField(value: unknown, allowEmpty = false): string {
  if (allowEmpty && value === '') return '';
  return JSON.stringify(parseTaxDownloadInfo(value));
}

function validateBasepath(value: unknown): string {
  if (typeof value !== 'string' || CONTROL_CHARACTERS.test(value)) {
    throw new Error('Invalid tax download base path.');
  }
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error('Invalid tax download base URL.');
  }
  if (
    parsed.protocol !== 'https:' ||
    parsed.hostname !== ALLOWED_BASE_HOST ||
    parsed.port !== '' ||
    parsed.username !== '' ||
    parsed.password !== '' ||
    parsed.search !== '' ||
    parsed.hash !== '' ||
    !TAX_BASE_PATH.test(parsed.pathname)
  ) {
    throw new Error('Unsupported tax download base URL.');
  }
  return parsed.toString().replace(/\/$/, '');
}

function validateFilePath(value: string): string {
  if (
    value.length === 0 ||
    value.length > 1024 ||
    CONTROL_CHARACTERS.test(value) ||
    value.includes('\\') ||
    value.includes('?') ||
    value.includes('#') ||
    value.startsWith('/') ||
    value.includes('//') ||
    URL_SCHEME.test(value)
  ) {
    throw new Error('Invalid tax download file path.');
  }

  let decoded: string;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    throw new Error('Invalid tax download file path.');
  }
  if (CONTROL_CHARACTERS.test(decoded) || decoded.split('/').some((part) => part === '.' || part === '..')) {
    throw new Error('Invalid tax download file path.');
  }
  return value;
}
