import api from "./api.js"

const ui = {
    async renderListOfPets() {
        const listOfPets = document.querySelector(".pets")
        try {
            const PETS = await api.getPets()
            PETS.forEach(pet => {
                ui.addAPet(pet)
            });
        } catch (error) {
            console.error("Erro ao renderizar lista de pets");
        }
    },

    async addAPet(pet) {
        const listOfPets = document.querySelector(".pets")
        
        const li = document.createElement("li")
        li.classList.add("pets__information")

        const divPetImg = document.createElement("div")
        divPetImg.classList.add("pet__img")
        const petImg = document.createElement("img")
        petImg.src = pet.url
        divPetImg.appendChild(petImg)

        const divPetInfo = document.createElement("div")
        divPetInfo.classList.add("pet__info")

        const h1 = document.createElement("h1")
        h1.classList.add("pet__name")
        h1.textContent = pet.nome

        const pAge = document.createElement("p")
        pAge.classList.add("pet__age")
        pAge.textContent = `${pet.idade} anos - ${pet.raca}`

        const pDescription = document.createElement("p")
        pDescription.classList.add("pet__description")
        pDescription.textContent = pet.descricao

        divPetInfo.append(h1, pAge, pDescription)

        const divIcons = document.createElement("div")
        divIcons.classList.add("icons")

        const buttonEdit = document.createElement("button")
        const imgEdit = document.createElement("img")
        imgEdit.src = "assets/img/pencil.svg"
        imgEdit.alt = "Ícone de edição"
        buttonEdit.appendChild(imgEdit)

        const buttonDelete = document.createElement("button")
        const imgDelete = document.createElement("img")
        imgDelete.src = "assets/img/trash.svg"
        imgDelete.alt = "Ícone de exclusão"
        buttonDelete.appendChild(imgDelete)

        divIcons.append(buttonEdit, buttonDelete)
        divPetInfo.append(divIcons)
        li.append(divPetImg, divPetInfo)

        listOfPets.appendChild(li)

    },
}

export default ui