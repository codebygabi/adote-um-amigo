const api = {
    async getPets() {
        const ENDPOINT = "http://localhost:3000/pets"
        try {
            const response = await fetch(ENDPOINT)
            return await response.json()
        } catch (error) {
            console.error("Erro ao buscar informações", error);
        }

    },

    async getPetById(petId) {
        const ENDPOINT = `http://localhost:3000/pets/${petId}`
        try {
            const response = await fetch(ENDPOINT)
            return await response.json()
        } catch (error) {
            console.error("Erro ao buscar informações", error);
        }

    },

    async savePet(pet) {
        const ENDPOINT = "http://localhost:3000/pets"
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
        const ENDPOINT = `http://localhost:3000/pets/${pet.id}`
        try {
            const response = await fetch(ENDPOINT, {
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
    }
}

export default api;