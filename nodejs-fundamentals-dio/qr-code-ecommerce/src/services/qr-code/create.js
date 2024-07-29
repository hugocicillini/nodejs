import prompt from "prompt"
import promptQRCode from "../../prompts/prompt-qrcode.js"
import handleQRCode from "./handle.js"

async function createQRCode() {
  prompt.get(promptQRCode, handleQRCode)

  prompt.start()
}

export default createQRCode