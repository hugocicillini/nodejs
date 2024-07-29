import colors from '@colors/colors'

const promptQRCode = [
  {
    name: 'link',
    description: colors.red('Insira o link para gerar o QR Code: '),
  },
  {
    name: 'type',
    description: colors.yellow('Escolha o tipo do QR Code: \n 1) Normal \n 2) Terminal'),
    pattern: /1|2/,
    message: colors.red('Opção inválida'),
    required: true,
  }
]

export default promptQRCode