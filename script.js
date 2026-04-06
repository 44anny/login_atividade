//configuração Firebase

const firebaseConfig = {

    apikey:"suas credencias",
    autDomain:"seu dominio",
    projectId:"o nome projetodo firebase",
};

//inicializar  yhh

firabase.initializeApp(firebaseeConfig)
const auth = firebaseeConfig.auth();
 //função login
 function login()
 const email = document.getElementById("email").value;
 const senha= document.getElementById("senha").value;
 const msg= document.getElementById("mensagem").value;

 auth.signInwitEmailAndPassword(email,senha)
 .then(()=>{
    msg. innerText="Login realizado com Sucesso!"
    msg.style.color="green";

 })
 .catch(console.error=>{
    msg.innerText=error.mensagem
    msg.style.color="red"
 });

};