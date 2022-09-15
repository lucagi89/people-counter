let countN = document.getElementById("count-n")
let batchesIt = document.getElementById("batches")
let totalN = document.getElementById("total-n")

let count = 0
let totalCount = 0
let initial = "The total amount of people is: "


function clickBtn() {
    count += 1
    countN.innerText = count
    

}

function save(){
    batchesIt.textContent += count + " - "
    totalCount += count
    count = 0
    countN.innerText = 0
}

function totalSum(){
 totalN.textContent += totalCount
}

function resetPage(){
    batchesIt.textContent = "Batches: "
    count = 0
    countN.innerText = 0
    totalCount = null
    totalN.textContent = initial
}