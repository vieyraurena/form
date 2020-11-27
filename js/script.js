//
// JS2 ProjectII PartI
//

const URL = 'https://js2-contact-form-api.netlify.app/api/contact';
// CONSTANTES DE LOS ELEMENTOS DEL HTML
const form = document.getElementById('new-info-form');
const infoList = document.getElementById('info-list');
const img = document.getElementById('img');

const appendInfoDOM = (datas) => {
  const modalList = document.createElement('div');
  modalList.className = 'modal-content';
  infoList.appendChild(modalList);
  const content = `
    <span id="equis">X</span>
    <h3>Su mensaje ha sido enviado</h3>
    <ul>
    <li>Nombre: ${datas.name}</li>
    <li>Email: ${datas.mail}</li>
    <li>Teléfono: ${datas.phone}</li>
    <li>Asunto: ${datas.subject}</li>
    <li>Mensaje: ${datas.message}</li>
    </ul>
    <p>Pronto nos comunicaremos con usted. Gracias por su preferencia.</p>
    <button id="ok" class="btn">OK</button>
  `;
  console.log(modalList.innerHTML = content);
};

const addInf = (nombre, correo, telefono, asunto, mensaje) => {
  const newInf = {
    name: nombre,
    mail: correo,
    phone: telefono,
    subject: asunto,
    message: mensaje,
  };
  console.log(newInf);

  const fetchInfo = {
    method: 'POST',
    body: JSON.stringify(newInf),
  };

  fetch(URL, fetchInfo)
    .then((response) => response.json())
    .then((data) => {
      appendInfoDOM(data);
      console.log(data);
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

// const closeModal = document.querySelectorAll('modal-content');
// function close(event) {
//   event.preventDefault();
//   infoList.classList.remove('display');
// }
// closeModal.addEventListener('click', close);
