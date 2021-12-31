const inputField = document.getElementById('inputField');
const submit = document.getElementById("submit");
const task = document.getElementById('task');

submit.addEventListener('click', tasks);

function tasks() {
    let list = document.createElement('li');
    let inputValue = inputField.value;
    if (inputValue) {
        list.innerHTML = inputValue;
        task.firstElementChild.appendChild(list);
        inputField.value = "";
        list.addEventListener('click',function(){
            list.style.textDecoration = "line-through";
            list.style.color = "green";
        })
        list.addEventListener('dblclick',function(){
            list.remove();
        })
    }
    else alert('please input something');

}