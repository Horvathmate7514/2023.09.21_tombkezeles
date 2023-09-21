// console.log("ok");

let nev = document.querySelector('#nev');
let saveButton = document.querySelector('.save-button')
// console.log(saveButton);
let emberek = []
let result = document.querySelector('.result')


function hozzaadNev (){
    //console.log(nev.value)
    emberek.push(nev.value)
    // console.log(emberek)

    let ul = document.createElement('ul')
    // console.log('ul')
    emberek.forEach(ember => {
        let li = document.createElement('li')
        li.innerText = ember
        ul.append(li)
    })


    result.append(ul)
}



saveButton.addEventListener('click', hozzaadNev)