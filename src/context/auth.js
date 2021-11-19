const sha256 = require('sha256');
const crypto = require('crypto');

const key = '9945ef113707f96255008d580492b9e8';

export const encryptAES = (plainText) => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(plainText);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + encrypted.toString('hex');
};

const decryptAES = (cipherText) => {
  const iv = Buffer.from(cipherText.substring(0, 32), 'hex');
  const encrypted = Buffer.from(cipherText.substring(32), 'hex');

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
};

const now = new Date();
const nowDate = String(new Date(now.setDate(now.getDate() - 7)).getTime());

// console.log(encryptAES(String(new Date().getTime())));

const users = { password: 'b748b73d9ae5520bab13edfb9e544c752e2f1c6285e70ea200bf6518b3e523e2' };

export function signIn({ password }) {
  if (users.password === sha256(password)) return true;
  return false;
}

export function authPass({ params }) {
  // console.log(`dec: ${decryptAES(params)}`);
  // console.log(`now: ${nowDate}`);
  try {
    if (nowDate <= Number(decryptAES(params))) return true;
  } catch {
    return false;
  }
  return false;
}
