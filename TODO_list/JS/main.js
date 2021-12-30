const submit = document.getElementById('submit');
const tasks = document.getElementsByClassName('tasks');
const inputField = document.getElementById('inputField');
submit.addEventListener('click', addTasks);

function addTasks() {
    let list = document.createElement('li');
    let inputValue = inputField.value;
    if (inputValue) {
        list.innerHTML = inputValue;
        tasks[0].children[0].appendChild(list);
        inputField.value = "";
        list.addEventListener("click",function(){
            list.style.textDecoration = "line-through"
        });
        list.addEventListener("dblclick",function(){
            list.remove();
        })
    }
    else alert("please input SOmething");
}
