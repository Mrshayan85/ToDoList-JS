let textBox_text = document.querySelector('.textbox');
let task_text = document.querySelector('.para-text');
let htmlElement = document.querySelector('.add-tasks-div-main');
let close_Btn = document.querySelector('.close-btn');

textBox_text.addEventListener ("keypress",(event) =>{
    if(event.key === "Enter"  ){
    let changeText = textBox_text.value 
    textBox_text.value = "";
    if(changeText  === "" || changeText  === " "|| changeText  === "  "|| changeText  === "   "){
    alert('Please Enter some Task')
    }
    else{
    htmlElement.innerHTML += `  <div class="add-tasks-div-main">
    <div class="add-tasks-div">
        <img src="./round-icon.png" alt="icon">
        <p class="para-text">${changeText}   </p>
        
    </div>
    <button class="close-btn">X</button>

    </div>`
    }
}

});

 
htmlElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-btn")) {
       
        if ( window.confirm("Are you Sure?")) {
            event.target.closest(".add-tasks-div-main").remove();         }
            else {
                return false
            }
       
    }
});


htmlElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("para-text")) {
        let task_text = event.target;
        task_text.innerHTML = `<del>${task_text.innerText}</del>`
    }
});