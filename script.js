//configuração Firebase

const firebaseConfig = {

     apiKey: "AIzaSyAsFyvefj6hTUTZJ52jDX9wa_uqWFbeQFk",
     authDomain: "atividade-b80ae.firebaseapp.com",
     projectId: "atividade-b80ae",
     storageBucket: "atividade-b80ae.firebasestorage.app",
     messagingSenderId: "341377935732",
     appId: "1:341377935732:web:959b94629a218e304da421",
     measurementId: "G-EGES8GYVE3"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Função de login
function login() {
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;
const msg = document.getElementById("mensagem");

auth.signInWithEmailAndPassword(email, senha)
.then(() => {
            msg.innerText = "Login realizado com sucesso!";
            msg.style.color = "green";
})
.catch((error) => {
msg.innerText = error.message;
msg.style.color = "red";
});
}

// Função de cadastro
function cadastrar() {
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;
const msg = document.getElementById("mensagem");

auth.createUserWithEmailAndPassword(email, senha)
.then(() => {
    msg.innerText = "Conta criada com sucesso!";
    msg.style.color = "green";
})
.catch((error) => {
    msg.innerText = error.message;
     msg.style.color = "red";
});
};

