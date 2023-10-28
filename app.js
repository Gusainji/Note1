const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(item.value); // Pass the value of the input field
            item.value = "";     // Reset the input field
        }
    }
);

const addToDo = (todoItem) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${todoItem}
         <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    );
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem);
};
