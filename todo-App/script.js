const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask() {
    if (inputBox.value === '') {
        alert("Birşeyler yaz!");
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function myFunction(event) {
    var x = event.charCode;
    if (x === 13) {
        let input =     document.getElementById("input-box").value;
        if (input != '') {
            document.getElementById("addButton").disabled = false;
            addTask()
        } else{
            document.getElementById("addButton").disabled = true;
        }
        
    }
    
  }

  function addDisable() {

    var value = document.getElementById('input-box').value;
    if (value != '') {
        document.getElementById("addButton").disabled = false;
    } else{
        document.getElementById("addButton").disabled = true;
    }
  }