const apiUrl = "http://localhost/app-php-js-chat-yes-no-senati/api.php";
const apiUrl1 = "https://yesno.wtf/api";
async function getdata() {
  console.log("ingreso a getdata");
  try {
    const respuesta = await fetch(`${apiUrl}?id=123&nombre=juanjosue&apellido=canahuire`, 
      {
      method: "GET"
    });
    const data = await respuesta.json();
    console.log("data");
    console.log(data);
  } catch (error) {
    console.log("error al momento de hacer la peticion Get: ", error);
  }
}

let botonGet = document.querySelector("#getdata");
  
botonGet.addEventListener("click", function () {
  getdata();
});

async function posdata (){
  try {
    const respuesta = await fetch(apiUrl,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //id: 123,
        nombre: "juanjosue",
        apellido: "canahuire",
        lenguaje: "phyton",
        color : "rojo"

      })
    });
    const data_retorno = await respuesta.json();
    console.log(data_retorno);
    
  } catch (error) {
   console.log("no se puede pe" , error);
  }

}

let botonPost = document.querySelector('#postdata');
botonPost.addEventListener("click", function (){
  posdata();
});


/////////////////////
async function getyes() {

  try {
    const respuesta = await fetch (apiUrl1, 
      {
      method: "GET",
      }
    );
    const data = await respuesta.json();

    console.log(data.answer);
    agregarMensaje(data.answer,true,data.image);
    
  } catch (error) {
    console.log("error al momento de hacer la peticion Get: ", error);
  }
}

let botonyes = document.querySelector("#yesno");
botonyes.addEventListener("click", function () {
  getyes();
});





//// hacer un put 
async function putdata() {
  try {
    const respuesta = await fetch(`${apiUrl}/123`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: "juanjosue_modificado",
        apellido: "canahuire_modificado"
      })
    });
    const data_retorno = await respuesta.json();
    console.log(data_retorno);
  } catch (error) {
    console.log("error al momento de hacer la peticion PUT: ", error);
  }
}

let botonPut = document.querySelector("#putdata");

botonPut.addEventListener("click", function () {
  putdata();
});

//// hacer un delete

async function deletedata() {
  try {
    const respuesta = await fetch(`${apiUrl}/123`, {
      method: "DELETE"
    });
    const data_retorno = await respuesta.json();
    console.log(data_retorno);
  } catch (error) {
    console.log("error al momento de hacer la peticion DELETE: ", error);
  }
}

let botonDelete = document.querySelector("#deletedata");

botonDelete.addEventListener("click", function () {
  deletedata();
});


/// funcionalidad del chat yes no
let chatMessages = document.getElementById('chatMessages');
let chatForm = document.getElementById('chatForm');
let messageInput = document.getElementById('messageInput');


function agregarMensaje(mensaje, soyYo = true, imagen = null) {
  const mensajeDiv = document.createElement('div');
  mensajeDiv.classList.add('message');
  mensajeDiv.classList.add(soyYo? 'user-message':'api-message');
  mensajeDiv.textContent = mensaje;
  if (imagen) {
    const img = document.createElement('img');
    img.src = imagen;
    
    mensajeDiv.appendChild(img);
  }
  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight
  }, 500);


  chatMessages.appendChild(mensajeDiv);
}

chatForm.addEventListener('submit',function(){
  event.preventDefault();
  const miMensaje = messageInput.value;
  agregarMensaje(miMensaje,true);
  getyes();
});

