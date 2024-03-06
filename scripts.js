const infosBtn = document.querySelector(".infosBtn")
let modalInfos = document.querySelector(".modalInfos")

const userBtn = document.querySelector(".userBtn")
let modalUser = document.querySelector(".modalUser")

let activeModal = ''

const toggleHide = (modal) => {
    modal.classList.toggle('hide')

    if(activeModal != '' && activeModal != modal){
        activeModal.classList.toggle('hide')
    }
    
    activeModal = modal
}

infosBtn.addEventListener('click', function(){
    toggleHide(modalInfos)
})

userBtn.addEventListener('click', function(){
    toggleHide(modalUser)
})

