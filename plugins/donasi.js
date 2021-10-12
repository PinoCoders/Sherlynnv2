let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [081220670449]
│ • DANA [081220670449]
│ • Saweria https://saweria.co/kurrtod
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
