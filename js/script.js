//
// JS2 ProjectII PartI
//

const URL = 'https://js2-contact-form-api.netlify.app/api/contact';
// CONSTANTES DE LOS ELEMENTOS DEL HTML
const form = document.getElementById('new-info-form');
const infoList = document.getElementById('info-list');
const img = document.getElementById('img');
const message = 'Teléfono: No fue proporcionado';

const appendInfoDOM = (datas) => {
  const modalList = document.createElement('div');
  modalList.className = 'modal-content';
  const h3 = document.createElement('h3');
  h3.innerHTML = 'Su mensaje ha sido enviado';
  const list = document.createElement('ul');
  const nombre = document.createElement('li');
  nombre.innerHTML = `Nombre: ${datas.name}`;
  const email = document.createElement('li');
  email.innerHTML = `Email: ${datas.email}`;
  const tel = document.createElement('li');
  if (datas.phone === null) {
    tel.innerHTML = message;
  } else {
    tel.innerHTML = `Teléfono: ${datas.phone}`;
  }
  const asunto = document.createElement('li');
  asunto.innerHTML = `Asunto: ${datas.subject}`;
  const msj = document.createElement('li');
  msj.innerHTML = `Mensaje: ${datas.message}`;
  const parag = document.createElement('p');
  parag.innerHTML = 'Pronto nos comunicaremos con usted. Gracias por su preferencia.';
  list.appendChild(nombre);
  list.appendChild(email);
  list.appendChild(tel);
  list.appendChild(asunto);
  list.appendChild(msj);
  modalList.appendChild(h3);
  modalList.appendChild(list);
  modalList.appendChild(parag);
  infoList.appendChild(modalList);
};

const addInf = (nombre, correo, telefono, asunto, mensaje) => {
  const newInf = {
    name: nombre,
    email: correo,
    phone: telefono,
    subject: asunto,
    message: mensaje,
  };

  const fetchInfo = {
    method: 'POST',
    body: JSON.stringify(newInf),
  };

  fetch(URL, fetchInfo)
    .then((response) => response.json())
    .then((data) => {
      appendInfoDOM(data);
    });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  infoList.classList.add('display');
  form.classList.add('filter');
  img.classList.add('filter');
  addInf(
    form.elements[0].value,
    form.elements[1].value,
    form.elements[2].value,
    form.elements[3].value,
    form.elements[4].value,
  );
  form.elements[0].value = '';
  form.elements[1].value = '';
  form.elements[2].value = '';
  form.elements[3].value = '';
  form.elements[4].value = '';
});
