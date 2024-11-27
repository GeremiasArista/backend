class gruposModel {
    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }

    defineModel = async (orientDB) => {
        this.#orientDB = await orientDB;
    }

    fetchGruposAll = async () => {
        let session = await this.#orientDB.pool.acquire();
        let data = await session.select().from('Grupos').all();
        session.close();
        return data;
    }

    createGrupos = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'Grupos').set(object).one();
        return idRecord;
    }

    updateGrupos = async (id_grupo, object) => {
        let session = await this.#orientDB.pool.acquire();
        try {
            let result = await session.update('Grupos')
                .set(object)
                .where({ 'id_grupo': id_grupo })
                .return('AFTER')
                .one();
            return result;
        } catch (error) {
            throw new Error('Error actualizando el grupo');
        } finally {
            session.close();
        }
    };

    deleteGrupo = async (id_grupo) => {
        let session = await this.#orientDB.pool.acquire();
        let deletedCount = await session.delete('Vertex', 'Grupos').where({ 'id_grupo': id_grupo }).one();
        return deletedCount;
    };
}

module.exports = new gruposModel();
