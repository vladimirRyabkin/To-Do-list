const conteiner = document.querySelector('.conteiner')
const headName = document.querySelector('.headName')
const list = document.querySelector('.list')
const btnAdd = document.querySelector('button')
const saveBtn = document.querySelector('.saveBtn')
const saveBtn2 = document.querySelector('.saveBtn2')
const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')

btnAdd.addEventListener('click', () => {
    let text = document.querySelector('.inpModal')
    text.value = ''
    backdrop.classList.toggle('hidden')
})

saveBtn.addEventListener('click', () => {
    let text = document.querySelector('.inpModal')
    console.log(text.value.length)
    if (text.value.length < 3) {
        text.classList.toggle('wrong')
        setTimeout(() => {
            text.classList.toggle('wrong');
        }, 300);
        return
    }
    backdrop.classList.toggle('hidden')
    text = text.value
    const item = new ToDoItem(text)
    item.add(list)
})

backdrop.addEventListener('click', (event)=>{
    if (event.target.classList.contains('backdrop')){
        backdrop.classList.toggle('hidden')
    }
})

class ToDoItem {
    description;
    isCompleted = false;
    id = Date.now();
    check = document.createElement('input')
    newOl = document.createElement('li')
    constructor(description) {
        this.description = description;
    }
    add(parent) {
        this.newOl.id = this.id
        this.check.type = "checkbox"
        this.check.addEventListener('click', this.setComleted.bind(this))
        const text = document.createElement('span')
        text.textContent = this.description
        const createBtn = document.createElement('button');
        createBtn.textContent = 'Удалить'
        createBtn.id = this.id
        this.newOl.append(this.check)
        this.newOl.append(text)
        this.newOl.append(createBtn)
        parent.append(this.newOl)
    }
    setComleted(){
        this.isCompleted = !this.isCompleted
        this.newOl.classList.toggle('completed')
    }
}







