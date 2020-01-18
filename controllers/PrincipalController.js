module.exports = {

    async index(req, res) {
        return res.json({ inicio : 'TELA INICIAL DO SISTEMA SEMANA OMNISTACK 10!!', data:  new Date()})
    }
};