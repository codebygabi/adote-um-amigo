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
        if (!listOfPets) return;

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
        buttonEdit.onclick = () => {
            window.location.href = `../editar-pet.html?id=${pet.id}`
        }

        const buttonDelete = document.createElement("button")
        const imgDelete = document.createElement("img")
        imgDelete.src = "assets/img/trash.svg"
        imgDelete.alt = "Ícone de exclusão"
        buttonDelete.appendChild(imgDelete)
        buttonDelete.onclick = () => {
            try {
                api.deletePet(pet)
                alert("Exclusão realizada com sucesso")
            } catch (error) {
                console.error("Erro ao realizar exclusão");
                alert("Erro ao realizar exclusão")
            }
        }

        divIcons.append(buttonEdit, buttonDelete)
        divPetInfo.append(divIcons)
        li.append(divPetImg, divPetInfo)

        listOfPets.appendChild(li)

    },

    async fillForm(petId) {
        const imgContainer = document.querySelector(".image__pet")
        try {
            const pet = await api.getPetById(petId)

            document.getElementById("pet_id").value = pet.id
            document.getElementById("pet_name").value = pet.nome
            document.getElementById("pet_specie").value = pet.raca
            document.getElementById("pet_age").value = pet.idade
            document.getElementById("pet_description").value = pet.descricao
            document.getElementById("pet_photo").value = pet.url
            imgContainer.src = pet.url
        } catch (error) {
            console.error("Erro ao buscar informações");
        }
    }
}

export default ui