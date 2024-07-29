import qr from "qrcode-terminal"

async function handleQRCode(err, result) {
  if (err) console.log(err)
  
  const isSmall = result.type == 2
  qr.generate(result.link, { small: isSmall }, (link) => console.log(link))
}

export default handleQRCode