const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const proficaoInput = document.getElementById("proficao");
const submitButton = document.getElementById("submit");
const containerCards = document.getElementById("container-cards");

submitButton.addEventListener("click",() => {
    const name = nameInput.value
    const email = emailInput.value
    const profission = proficaoInput.value
    if (name === '' || email === '' || profission  === ''){
        alert('Complete todos os campos')
        return
    } 

    const userCard = document.createElement("div")
    userCard.classList.add("user-card")
    userCard.innerHTML = `
        <h2>${name}</h2>
        <p>${email}</p>
        <p>${profission}</p>
    ` 
    const removeButton = document.createElement("button")

    userCard.appendChild(removeButton)
    removeButton.textContent = "Remover"

    removeButton.addEventListener('click', () => {
        userCard.remove()
    })

    containerCards.appendChild(userCard)

    nameInput.value = ''
    emailInput.value = ''
    proficaoInput.value = ''

})
