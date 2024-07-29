import handlePassword from "./handle.js"

async function createPassword() {
  const password = await handlePassword()
  console.log(password)
}

export default createPassword