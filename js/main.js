import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.renderListOfPets()

    const form = document.querySelector(".form_new_pet")
    if (form) {
        form.addEventListener("submit", submissonForm);
    }

    const params = new URLSearchParams(window.location.search);
    const petId = params.get("id");

    if (petId) {
        ui.fillForm(petId)
    }
})

async function submissonForm(event) {
    event.preventDefault()

    try {
        const id = document.getElementById("pet_id").value
        const nome = document.getElementById("pet_name").value
        const raca = document.getElementById("pet_specie").value
        const idade = document.getElementById("pet_age").value
        const descricao = document.getElementById("pet_description").value
        const url = document.getElementById("pet_photo").value

        if (id) {
            await api.editPet({ id, nome, raca, idade, descricao, url })
            alert('Edição realizada com sucesso')
        } else {
            await api.savePet({ nome, raca, idade, descricao, url })
            alert('Cadastro realizado com sucesso')
        }

        ui.renderListOfPets
        setTimeout(() => {
            window.location.replace("../pets.html");
        }, 3000);
    } catch (error) {
        console.error('Erro ao salvar informações do pet', error);
        alert('Erro ao salvar informações do pet')
    }
}