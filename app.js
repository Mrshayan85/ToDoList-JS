let textBox_text = document.querySelector('.textbox');
let task_text = document.querySelector('.para-text');
let htmlElement = document.querySelector('.add-tasks-div-main');
let close_Btn = document.querySelector('.cross-img');
let edit_Btn = document.querySelector('.edit-img');

// Getting Existing Recprd FRom From Local Storage
let records = JSON.parse(localStorage.getItem('records')) || [];
if (records.length > 0) {
  htmlElement.innerHTML = '';
  records.forEach((record) => {
    htmlElement.innerHTML += `  <div class="add-tasks-div-main">
      <div class="add-tasks-div">
        <img src="./round-icon.png" alt="icon">
         <p class="para-text">${record}   </p> 
      </div>
                        <button class="close-btn">                             
                            <img  class="cross-img" src="./cross.png" alt="icon"> 
                        </button>  `;
  });
}

textBox_text.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let changeText = textBox_text.value
        textBox_text.value = "";
        if (changeText === "" || changeText === " " || changeText === "  " || changeText === "   ") {
            alert('Please Enter some Task')
        }
        else {
            records.push(changeText);
            localStorage.setItem('records', JSON.stringify(records));
            htmlElement.innerHTML += `  <div class="add-tasks-div-main">
    <div class="add-tasks-div">
        <img src="./round-icon.png" alt="icon">
         <p class="para-text">${changeText}   </p> 
     </div>
                        <button class="close-btn">                             
                            <img  class="cross-img" src="./cross.png" alt="icon"> 
                        </button>  `
        }
    }
});
 
htmlElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("cross-img")) {

        if (window.confirm("Are you Sure?")) {
            let recordIndex = Array.prototype.indexOf.call(htmlElement.children, event.target.closest(".add-tasks-div-main"));
            records.splice(recordIndex, 1);
            localStorage.setItem('records', JSON.stringify(records));
            event.target.closest(".add-tasks-div-main").remove();
        }
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
