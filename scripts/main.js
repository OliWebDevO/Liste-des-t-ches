let nom = document.querySelector('#nom')
let date = document.querySelector('#date')
let description = document.querySelector('#description')
let taskDone = document.querySelector('.taskdone')
let taskList = document.querySelector('.tasklist')
let add = document.querySelector('.add')
let trier = document.querySelector('.trier')
let span = document.querySelector('span')
let checkBox = document.querySelector('.check')
let tableau = []
let i = 0
let tache = {
    nom: '',
    date: 0,
    description: '',
    show() {
      taskList.innerHTML += `<div class="tache"><input
      type="checkbox"
      id="check"/><h4>Tâche ${i} : </h4><p>${this.nom}</p><p><strong>Date limite :</strong> ${this.date}</p><div class="cancel">❌</div></div><div class="descript"><p>${this.description}</p></div>`
    }
}

function spanHidden(){
    if (i>0) {
        span.classList.add("hidden")
    }
}

add.addEventListener('click', ()=> {
    i++
    spanHidden()
    let tachePush = Object.create(tache)
    tachePush.nom = nom.value
    tachePush.date = date.value
    tachePush.description = description.value
    tachePush.show()
    tableau.push(tachePush)
    console.log(tableau);
    nom.value = ""
    date.value = ""
    description.value = ""
    
})

checkBox.addEventListener('click', ()=> {
    
})

