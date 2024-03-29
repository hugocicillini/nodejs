const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {

    async index(req, res) {
        const { orderBy } = req.query
        const contacts = await ContactsRepository.findAll(orderBy)

        res.json(contacts)
    }

    async show(req, res) {
        const { id } = req.params
        const contact = await ContactsRepository.findById(id)

        if (!contact) {
            return res.status(404).json({
                error: "User Not Found"
            })
        }

        res.json(contact)
    }

    async store(req, res) {
        const { name, email, phone, category_id } = req.body

        if (!name) {
            return res.status(400).json({ error: "Nome obrigatório!" })
        }

        const contactExists = await ContactsRepository.findByEmail(email)

        if (contactExists) {
            return res.status(400).json({ error: "Email já cadastrado!" })
        }

        const contact = await ContactsRepository.create({
            name, email, phone, category_id
        })

        res.json(contact)
    }

    async update(req, res) {
        const { id } = req.params
        const { name, email, phone, category_id } = req.body

        const contactExists = await ContactsRepository.findById(id)
        if (!contactExists) {
            return res.status(400).json({ error: "Usuário não encontrado!" })
        }

        if (!name) {
            return res.status(400).json({ error: "Nome obrigatório!" })
        }

        const contactByEmail = await ContactsRepository.findByEmail(email)

        if (contactByEmail && contactByEmail.id !== id) {
            return res.status(400).json({ error: "Email já cadastrado!" })
        }

        const contact = await ContactsRepository.update(id, {
            name, email, phone, category_id
        })

        res.json(contact)
    }

    async delete(req, res) {
        const { id } = req.params

        await ContactsRepository.delete(id)
        res.sendStatus(204)
    }

}

module.exports = new ContactController()