const CapitalLeters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SmallLeters = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const SpecialCharacters = "!@#$%&^*()?{}[]<>";

const PassWordField = document.getElementById("PasswordFieldBoxx");
const SizeField = document.getElementById("SizeBoxx");
const CapitalboxFields = document.getElementById("CapitalLettersCheckbox");
const SmallLettersFields = document.getElementById("SmallLettersCheckBox");
const NumberFields = document.getElementById("NumberCheckBox");
const SpecialCharacterField = document.getElementById("SpecialCharacter");
const ButtonOne = document.getElementById("btn");
const ButtonTwo = document.getElementById("btn-second");

const RandomWords = (Words)=>{
    return Words[Math.floor(Math.random() * Words.length)]
};

const GenRateRandomPassWord = (PassWord = "")=>{
  if(CapitalboxFields.checked){
    PassWord += RandomWords(CapitalLeters)
  }
  if(SmallLettersFields.checked){
    PassWord += RandomWords(SmallLeters)
  }
  if(NumberFields.checked){
    PassWord += RandomWords(Numbers)
  }
  if(SpecialCharacterField.checked){
    PassWord += RandomWords(SpecialCharacters)
  }

  if(SizeField.value >= PassWord.length){
    return GenRateRandomPassWord(PassWord)
  }
  PassWordField.value = Trucncate(PassWord , SizeField.value)
}

ButtonOne.addEventListener('click' , (event)=>{
    event.preventDefault();

    GenRateRandomPassWord();
})

const Trucncate = (str , num)=>{
    if(str.length >= num){
      let substr = str.substr(0 , num)
      return substr
    }
    else{
      return substr
    }
}

