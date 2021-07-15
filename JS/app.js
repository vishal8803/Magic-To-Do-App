console.log("Welcome To to do app")
showNotes()

let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click" , function(e){
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')
    if(notes==null)
    {
        notesObj = [] ;
    }else
    {
        notesObj = JSON.parse(notes)
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes' , JSON.stringify(notesObj))
    addTxt.value=" "
    showNotes() ;
})

function showNotes(){
    let notes = localStorage.getItem('notes')
    if(notes==null)
    {
        notesObj = [] ;
    }else
    {
        notesObj = JSON.parse(notes)
    }
    let html =""
    notesObj.forEach(function(element , index) {
        html+=` <div class="card noteCard mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Task ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <Button id='${index}' onClick='deleteTask(this.id)' class="btn btn-primary">Delete Task</Button>
        </div>
    </div>`
    });
    if(notesObj.length != 0)
    {
        document.getElementById('notes').innerHTML=html
    }else
    {
        document.getElementById('notes').innerHTML='Nothing In The Task'
    }
}

function deleteTask(index)
{
    let notes = localStorage.getItem('notes')
    if(notes==null)
    {
        notesObj = [] ;
    }else
    {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index,1) ;
    localStorage.setItem('notes' , JSON.stringify(notesObj))
    showNotes()
}

let search = document.getElementById('searchTxt')
search.addEventListener('input' , function(){
    let inputval = search.value
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText
        if(cardTxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})