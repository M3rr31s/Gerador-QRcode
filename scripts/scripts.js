const container = document.querySelector(".container");

const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeIMG =  document.querySelector("#qr-code img")

//Eventos

// Gerar QR Code
function generaterQrCod() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return window.alert(`[ERRO] - FALTAM DADOS`);

    qrCodeBtn.innerHTML = `Gerando QR Code...`

    qrCodeIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeIMG.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = `Código Gerado!`
    })
}

qrCodeBtn.addEventListener("click", () => {
    generaterQrCod()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        generaterQrCod()
    }
})

//Limpar Area do QRCode

qrCodeInput.addEventListener("keyup", () => {
    
    if  (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = `Gerar QRcode` ;   
    }

})