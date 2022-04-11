const input = document.getElementById('input')
const btnSubmit = document.getElementById('btn-submit')
const btnClearAll = document.getElementById('btn-clear-all')

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTodo()
    }
});

function addTodo() {
    if(input.value === '') {
        alert('Add task!!')
        return false
    } 
   
    let ul = document.getElementById('list')
    let li = document.createElement('li')
    li.classList.add('lis')
    li.appendChild(document.createTextNode(`${input.value}`))
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = 'Delete'
    let completeBtn = document.createElement("button")
    completeBtn.classList.add('complete-btn')
    completeBtn.innerHTML = 'Complete'
    li.appendChild(deleteBtn)
    li.appendChild(completeBtn)
    ul.appendChild(li)

    deleteBtn.addEventListener('click', () => {
        li.remove(li)
    })

    completeBtn.addEventListener('click', () => {
       li.classList.toggle('complete')
    })  

    input.value = ''
    
    btnClearAll.addEventListener('click', () => {
        ul.innerHTML = ''
    })
}




// Add local storage



















