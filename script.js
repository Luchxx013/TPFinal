// -------------------- FORMULARIO -------------

function submitForm(event) {
  event.preventDefault();

  var nombre = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Valido los campos
  nombrevalido = validaNombre(nombre);
  emailvalido = validaEmail(email);

  if (emailvalido == true && nombrevalido == true) {

    // Mostrar los datos por consola
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Mensaje: " + message);

    alert("Gracias por contactarnos!")

    // Limpia el formulario
    document.getElementById("contactForm").reset();
  }
}

//Funcion que valida el email
function validaEmail(xidemail) {
  var email = xidemail;

  var emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (emailValido.test(email)) {
    return true;
  } else {
    alert("Por favor ingrese un email valido");
    return false;
  }
}

//Funcion que valida el nombre (que sea mas largo que 3 caracteres)
function validaNombre(xidnombre) {

  var nombre = xidnombre;

  if (nombre.length > 3) {
    return true;
  } else {
    alert("Por favor ingrese un nombre valido");
    return false;
  }

}

// ---------------- GALERIA -----------------
function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function consultarPrecio(xid, xproducto) {

  email = prompt("Ingrese un email de contacto");
  emailvalido = validaEmail(email);
  if (emailvalido == true) {
    console.log("Consulta pendiente para el producto con id: " + xid + ", " + xproducto + " contactarse al email: " + email);
  }
}

function dibujarProductos(arr) {
  const contenedor = document.getElementById('listadoimportado'); // ID del contenedor donde se dibujarán los divs
  contenedor.innerHTML = "";

  // recorre el arreglo
  for (let i = 0; i < arr.length; i++) {
    // crea un nuevo div
    const divProducto = document.createElement('div');
    divProducto.setAttribute("class", "gallery-item");
    divProducto.setAttribute("id", arr[i].id);

    // crea un nuevo img
    const imagenProducto = document.createElement('img');
    imagenProducto.setAttribute('src', arr[i].src);
    imagenProducto.setAttribute('onclick', "openModal('" + arr[i].src + "')");

    // crea un nuevo p
    const nombreProducto = document.createElement('p');
    nombreProducto.innerHTML = arr[i].producto;

    // crea un nuevo boton
    const botonPrecio = document.createElement("button");
    botonPrecio.setAttribute("class", "btn btn-primary");
    botonPrecio.setAttribute("onclick", "consultarPrecio('" + arr[i].id + "','" + arr[i].producto + "')");
    botonPrecio.innerHTML = "Consultar precio";

    // agregar el div al contenedor
    divProducto.appendChild(imagenProducto);
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(botonPrecio);
    contenedor.appendChild(divProducto);
  }
}