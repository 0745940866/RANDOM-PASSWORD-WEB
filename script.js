const passwordBox=document.getElementById("password");
const length=12;
const uppercase="ABCDE F G H I J K L M N O P Q R S T U V W X Y Z";
const lowercase=" a b c d e f g h i j k l m n op q r s t u v w x y z "
const number="0123456789";
const symbols="!@#$%^&*()|?</>";
const allchars=uppercase+lowercase+number+symbols;
function createpassword() {
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)];

    }
    passwordBox.value=password;
}

function copypassword(){
    passwordBox.Select();
    document.execCommand("copy");
}
