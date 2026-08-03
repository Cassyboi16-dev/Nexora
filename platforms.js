const modal = document.getElementById('myModal')
const openBtn = document.getElementById('open-secret')
const closeBtn = document.getElementById('close-secret')

openBtn.addEventListener('click', () => {
    modal.showModal();
})

closeBtn.addEventListener('click', () => {
    modal.close();
})
 if (!modal) {
    console.warn('Check lines 1 & 5 to 14');
 } else if (modal){
    console.info('Your code is running fine')
    alert.apply(modal)
 } else{
    alert('Something is wrong Daddy Chill also what did you do 😒')
 }
openBtn.style.color = '#da15da'
openBtn.style.padding = '10px'
openBtn.style.alignItems = 'center'
openBtn.style.justifyContent = 'center'
openBtn.style.display = 'flex'
openBtn.style.borderRadius = '5px'


