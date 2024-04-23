



let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = " "


inputBtn.addEventListener("click", function() {
    saveInput()
})

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        saveInput()
    }
})

function saveInput() {
    let inputValue = inputEl.value
    myLeads.push(inputValue)
    inputEl.value = ""
    renderLeads()
}

// inputBtn.addEventListener("click",function() {
//     let inputValue = inputEl.value
//     myLeads.push(inputValue)
//     inputEl.value = ""
//     renderLeads()
// })


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    listItems += `
        <li>    
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
    ulEl.innerHTML = listItems;
} }



// const recipient = "James";
// const sender = "Joe";

// const email = `
//     Hey ${recipient}! 
//     How is it going? 
//     Cheers ${sender}
// `
// console.log(email);






// inputBtn.addEventListener("click", function() {
//     saveInput()
// })

// inputEl.addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         saveInput()
//     }
// })

// function saveInput() {
//     let inputValue = inputEl.value
//     if (inputValue) {
//         myLeads.push(inputValue)
//         inputEl.value = ""
//         renderLeads()
//     }
// }



// for (let i = 0; i < myLeads.length; i++) {
//     let li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }


// const buyButton = document.getElementById("buy-button")
// buyButton.innerHTML += "<button> BUY </button>"

// function paragraph() {
//     const paragraphText = document.getElementById("buy-button")
//     paragraphText.innerHTML += "<br> <p> Thanks for buying! </p>"
// }

