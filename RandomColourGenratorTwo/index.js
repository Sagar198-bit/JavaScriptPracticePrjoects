function RandomColour() {
    const HexCode = "0123456789ABCDEF";
    let ColourCode = "#";
    for (let index = 0; index < 6; index++) {
      ColourCode += HexCode[Math.floor(Math.random() * 16)];
    }
  
    return ColourCode;
}

document.getElementById('ChanginButtonColour').addEventListener('click' , (event)=>{
    document.getElementById('TextShowDisplay').innerHTML = `Color HexCode : ${RandomColour()}`;
    document.body.style.backgroundColor = RandomColour();
})

