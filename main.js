let qrSwitch = document.querySelector('.qrSwitch')
let qrCode = document.querySelector('.qrCode')

qrSwitch.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    qrCode.classList.add('active')
    document.addEventListener('click', qrClose)
})


function qrClose() {
    qrCode.classList.remove('active')
    document.removeEventListener('click', qrClose)
}
