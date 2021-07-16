console.log("Welcome To to do app");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitl = document.getElementById("addTitl")
  let notes = localStorage.getItem("notes");
  let titl = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (titl == null) {
    titlObj = [];
  } else {
    titlObj = JSON.parse(titl);
  }

  notesObj.push(addTxt.value);
  titlObj.push(addTitl.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("title", JSON.stringify(titlObj));
  addTxt.value = " ";
  addTitl.value=" ";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  let titl = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (titl == null) {
    titlObj = [];
  } else {
    titlObj = JSON.parse(titl);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += ` <div class="card noteCard mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title" id="ttl">${titlObj[index]}</h5>
        <p class="card-text">${element}</p>
        <Button id='${index}' onClick='deleteTask(this.id)' class="btn btn-primary">Delete Task</Button>
        </div>
    </div>`;
  });
  if (notesObj.length != 0) {
    document.getElementById("notes").innerHTML = html;
  } else {
    document.getElementById("notes").innerHTML = "Nothing In The Task";
  }
}

function deleteTask(index) {
  let notes = localStorage.getItem("notes");
  let titl = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (titl == null) {
    titlObj = [];
  } else {
    titlObj = JSON.parse(titl);
  }
  notesObj.splice(index, 1);
  titlObj.splice(index,1) ;
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("title", JSON.stringify(titlObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputval = search.value;
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputval)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
