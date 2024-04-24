

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = " "
const clearAll = document.getElementById("clear-all")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const welcomeEl = document.getElementById("welcome-El")
const saveTab = document.getElementById("save-tab")


function greetUser(timb, name) {
    welcomeEl.textContent += `
    ${timb} ${name} YOU ARE THE BEST!
` }

greetUser("LETS FUCKING GO", "James")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

clearAll.addEventListener("dblclick", function() {
        localStorage.clear();
        myLeads = [];
        render(myLeads);
});

saveTab.addEventListener("click", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    });
});

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
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log( localStorage.getItem("myLeads"))
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>    
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    ulEl.innerHTML = listItems;
} }






// let trueOrFalse = Boolean("hello")

// console.log(trueOrFalse)


// const credits = 0

// if (credits > 0) {
//     console.log("Lets Play")
//     } else {
//         console.log("sorry no credit")
//     }

// let currentViewers

// console.log(currentViewers)




// inputBtn.addEventListener("click",function() {
//     let inputValue = inputEl.value
//     myLeads.push(inputValue)
//     inputEl.value = ""
//     renderLeads()
// })



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

