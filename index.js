let myLeads = `[]`
myLeads = JSON.parse(myLeads)
const inputEl = document.querySelector("#input-el")
const btn = document.querySelector('#input-btn')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('#tab-btn')
const ulEl = document.querySelector("#ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for(let i = 0 ; i < leads.length ; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener('click', function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

btn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

