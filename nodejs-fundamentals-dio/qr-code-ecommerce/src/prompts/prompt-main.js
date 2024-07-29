import colors from '@colors/colors'

const mainPrompt = [
  {
    name: 'select',
    description: colors.red('Escolha a ferramenta: \n 1) QR Code \n 2) Password'),
    pattern: /1|2/,
    message: 'Opção inválida',
    required: true,
  }
]

export default mainPrompt