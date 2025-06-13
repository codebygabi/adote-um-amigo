const api = {
    async getPets() {
        const ENDPOINT = "http://localhost:3000/pets"

        try {
            const response = await fetch(ENDPOINT)
            return await response.json()
        } catch (error) {
            console.error("Erro ao buscar informações", error);
        }

    }
}

export default api;