const sha256 = require('sha256');

/* eslint-disable import/prefer-default-export */
const users = [
  { password: 'b748b73d9ae5520bab13edfb9e544c752e2f1c6285e70ea200bf6518b3e523e2' },
  // { password: '456', name: 'Lee' },
];

export function signIn({ password }) {
  const user = users.find(
    // eslint-disable-next-line no-shadow
    (user) => user.password === sha256(password)
  );
  if (user === undefined) throw new Error();
  return user;
}
