const editBtn = document.querySelectorAll("#editBtn")
const form = document.getElementById("form")
const showUpdateBtn = document.getElementById("update-tag")
const cancelBtn = document.getElementById("cancelBtn")
const submitBtn = document.getElementById("submit-btn")
const deleteBtn = document.querySelectorAll("#deleteBtn")



for(let i = 0; i < editBtn.length; i++){
    editBtn[i].addEventListener("click", () => {
        showUpdateBtn.style.display = "block"
        cancelBtn.style.display = "block"
        submitBtn.style.display = "none"
        const getProductName = editBtn[i].getAttribute("data-productName")
        const getQuantity = editBtn[i].getAttribute("data-quantity")
        const getPrice = editBtn[i].getAttribute("data-price")
        const getManufacturerLocation = editBtn[i].getAttribute("data-manufacturedAt")
        const updateId = editBtn[i].getAttribute("data-id")
        form.elements[0].value = getProductName
        form.elements[1].value = getQuantity
        form.elements[2].value = getPrice
        form.elements[3].value = getManufacturerLocation
        showUpdateBtn.formAction = `/update-product/${updateId}`
    })          
}        


for(let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", async () => {
        const id = deleteBtn[i].getAttribute("data-id")
        
        let response = await fetch(`http://localhost:4000/delete-product/${id}`)
        
        let result = await response.json;
        window.location.reload();
    })
}



