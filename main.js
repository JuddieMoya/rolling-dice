const count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let num = [2,3,4,5,6,7,8,9,10,11,12]
let num1

function rollOfDice(count) {
    for (let i= 2;i < count.length; i++) {
    let newDiv = document.createElement("div")
    newDiv.innerHTML = i + ":" + count[i]
    newDiv.style.width = count[i] + "VH"
    newDiv.style.backgroundColor = "pink"
    newDiv.style.margin = "14px"
    document.body.appendChild(newDiv)
    }
  
}
    
function diceTotal(sumRoll) {
    for (let i = 1; i <= sumRoll; i++) {
    let d1 = Math.floor(Math.random()* 6) + 1
    let d2 = Math.floor(Math.random()* 6) + 1
    num1 = d1 + d2
    count[num1] += 1

    }

    return count
}

rollOfDice(diceTotal(1000))


