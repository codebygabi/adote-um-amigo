const ENDPOINT = "http://localhost:3000/pets"

const api = {
    async getPets() {
        try {
            const response = await fetch(ENDPOINT)
            return await response.json()
        } catch (error) {
            console.error("Erro ao buscar informações", error);
        }

    },

    async getPetById(petId) {
        try {
            const response = await fetch(`${ENDPOINT}/${petId}`)
            return await response.json()
        } catch (error) {
            console.error("Erro ao buscar informações", error);
        }

    },

    async savePet(pet) {
        try {
            const response = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pet)
            })
            return await response.json()
        } catch (error) {
            console.error("Erro ao salvar informações", error);
        }
    },

    async editPet(pet) {
        try {
            const response = await fetch(`${ENDPOINT}/${pet.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pet)
            })
            return await response.json()
        } catch (error) {
            console.error("Erro ao editar informações", error);
        }
    },

    async deletePet(pet) {
        try {
            const response = await fetch(`${ENDPOINT}/${pet.id}`, {
                method: "DELETE",
            })
        } catch (error) {
            console.error("Erro ao excluir informações", error);
        }
    }
}

export default api;