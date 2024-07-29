async function handlePassword() {
  let caracters = []
  let password = ''

  const passwordLength = process.env.PASSWORD_LENGTH

  if (process.env.UPPERCASE_LETTERS) caracters.push(... 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')

  if (process.env.LOWERCASE_LETTERS) caracters.push(... 'abcdefghijklmnopqrstuvwxyz')

  if (process.env.NUMBERS) caracters.push(... '0123456789')

  if (process.env.SPECIAL_CHARACTERS) caracters.push(... '!@#$%^&*()_+-=[]{}|;:,.<>?')

  for (let i = 0; i < passwordLength; i++) {
    password += caracters[Math.floor(Math.random() * caracters.length)]
  }
  return password
}

export default handlePassword