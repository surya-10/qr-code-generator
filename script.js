let form = document.querySelector("#form");
let output = document.querySelector(".output");
let spin = document.querySelector("#loading");
let formatSelect = document.getElementById("format");
let qrCodeElement =  document.querySelector("#qrcode");
let btndownload = document.querySelector("#download");


function generateCode(e){
    e.preventDefault();
    console.log("hi");
    let inpText = document.querySelector("#input").value;
    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;
    let bgColor = document.querySelector("#bgcolor").value;
    let color = document.querySelector("#color").value;
    let format = formatSelect.value;
    console.log(format)
    if(inpText===""){
        alert("value")
    }
    else{
        output.style.display="flex";
        spin.style.display="flex"; 
        
        setTimeout(()=>{
            spin.style.display="none";
            qrCodeElement.innerHTML="";
            const qrCode = new QRCode("qrcode", {
              text:  inpText,
              width:width,
              height:height,
              colorDark:color,
              colorLight:bgColor,
              correctLevel:QRCode.CorrectLevel.H
            });
           
        }, 1500)
        createLink();
    }
}

form.addEventListener("submit", generateCode);

function createLink(){
    let sourceVal = qrCodeElement.querySelector("img").src;
    console.log(sourceVal)
    btndownload.href=sourceVal;
}
btndownload.addEventListener("click", ()=>{
    setTimeout(()=>{
        
    btndownload.download="qrcode";
}, 60)
})

