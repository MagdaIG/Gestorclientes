let clientes = [
  { id: 1, nombre: "Ana", apellido: "Gómez", email: "ana@example.com", telefono: "123456789", activo: true },
  { id: 2, nombre: "Luis", apellido: "Torres", email: "luis@example.com", telefono: "987654321", activo: false },
  { id: 3, nombre: "Claudia", apellido: "Rojas", email: "claudia@example.com", telefono: "111222333", activo: true }
];

// Mostrar todos los clientes
function mostrarClientes() {
  mostrarLista("Todos los Clientes", clientes);
}

// Mostrar clientes activos
function mostrarActivos() {
  const activos = clientes.filter(c => c.activo);
  mostrarLista("Clientes Activos", activos);
}

// Mostrar clientes inactivos
function mostrarInactivos() {
  const inactivos = clientes.filter(c => !c.activo);
  mostrarLista("Clientes Inactivos", inactivos);
}

// Función reutilizable para mostrar una lista
function mostrarLista(titulo, lista) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<h4>${titulo}</h4>`;
  if (lista.length === 0) {
    resultado.innerHTML += `<p>No hay resultados.</p>`;
  } else {
    lista.forEach(c => {
      resultado.innerHTML += `<p>
        ${c.nombre} ${c.apellido} - ${c.email} - ${c.telefono} -
        <strong>${c.activo ? "Activo" : "Inactivo"}</strong>
      </p>`;
    });
  }
}

// Mostrar modal personalizado (acepta HTML)
function mostrarModal(mensaje) {
  document.getElementById("modalMensajeBody").innerHTML = mensaje;
  const modal = new bootstrap.Modal(document.getElementById("modalMensaje"));
  modal.show();
}

// Agregar nuevo cliente desde el formulario
document.getElementById("formCliente").addEventListener("submit", function (e) {
  e.preventDefault();
  const nuevoCliente = {
    id: parseInt(document.getElementById("id").value),
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    activo: document.getElementById("activo").value === "true"
  };
  clientes.push(nuevoCliente);
  mostrarModal("Cliente agregado correctamente.");
  this.reset();
});

// Buscar cliente por ID usando prompt y mostrar en modal
function buscarClientePorId() {
  const id = prompt("Ingrese el ID del cliente:");
  if (id === null || id.trim() === "") {
    mostrarModal("No ingresaste un ID válido.");
    return;
  }

  const cliente = clientes.find(c => c.id == id);
  if (cliente) {
    mostrarModal(`
      <strong>Cliente encontrado:</strong><br>
      ${cliente.nombre} ${cliente.apellido}<br>
      Email: ${cliente.email}<br>
      Teléfono: ${cliente.telefono}<br>
      Estado: <strong>${cliente.activo ? "Activo" : "Inactivo"}</strong>
    `);
  } else {
    mostrarModal("Cliente no encontrado. Intente con otro ID.");
  }
}
// Mostrar modal para buscar cliente por ID
function buscarClientePorId() {
  const modal = new bootstrap.Modal(document.getElementById("modalBuscarId"));
  modal.show();
}

// Evento del formulario del modal para buscar ID
document.getElementById("formBuscarId").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("inputBuscarId").value.trim();
  if (id === "") {
    mostrarModal("No ingresaste un ID válido.");
    return;
  }

  const cliente = clientes.find(c => c.id == id);
  if (cliente) {
    mostrarModal(`
      <strong>Cliente encontrado:</strong><br>
      ${cliente.nombre} ${cliente.apellido}<br>
      Email: ${cliente.email}<br>
      Teléfono: ${cliente.telefono}<br>
      Estado: <strong>${cliente.activo ? "Activo" : "Inactivo"}</strong>
    `);
  } else {
    mostrarModal("Cliente no encontrado. Intente con otro ID.");
  }

  // Cerrar el modal de búsqueda
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalBuscarId"));
  modal.hide();
  this.reset();
});

//Contar Activos
function contarClientesActivos() {
  let contador = 0;

  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].activo === true) {
      contador++;
    }
  }

  mostrarModal(`Hay ${contador} cliente(s) activo(s) en el sistema.`);
}

// Mostrar modal eliminar cliente

function mostrarModalEliminar() {
  const modal = new bootstrap.Modal(document.getElementById("modalEliminarId"));
  modal.show();
}

//Listener para el formulario eliminar

document.getElementById("formEliminarId").addEventListener("submit", function (e) {
  e.preventDefault();
  const idEliminar = parseInt(document.getElementById("inputEliminarId").value);
  const index = clientes.findIndex(c => c.id === idEliminar);

  if (index !== -1) {
    clientes.splice(index, 1);
    mostrarModal(`Cliente con ID ${idEliminar} eliminado correctamente.`);
  } else {
    mostrarModal(`No se encontró ningún cliente con ID ${idEliminar}.`);
  }

  const modal = bootstrap.Modal.getInstance(document.getElementById("modalEliminarId"));
  modal.hide();
  this.reset();
});

//Mostrar modal de edicion

function mostrarModalEditar() {
  const modal = new bootstrap.Modal(document.getElementById("modalEditarCliente"));
  modal.show();
}

// Logica para guardar cambios

document.getElementById("formEditarCliente").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = parseInt(document.getElementById("editarId").value);
  const nuevoTelefono = document.getElementById("editarTelefono").value;
  const nuevoActivo = document.getElementById("editarActivo").value === "true";

  const cliente = clientes.find(c => c.id === id);

  if (cliente) {
    cliente.telefono = nuevoTelefono;
    cliente.activo = nuevoActivo;
    mostrarModal(`Cliente con ID ${id} actualizado correctamente.`);
  } else {
    mostrarModal(`No se encontró ningún cliente con ID ${id}.`);
  }

  const modal = bootstrap.Modal.getInstance(document.getElementById("modalEditarCliente"));
  modal.hide();
  this.reset();
});

//Arreglo de ejemplo con clientes nuevos

const nuevosClientes = [
  { id: 3, nombre: "Claudia", apellido: "Rojas", email: "claudia@example.com", telefono: "111222333", activo: true },
  { id: 4, nombre: "Pedro", apellido: "Mendoza", email: "pedro@example.com", telefono: "333444555", activo: true },
  { id: 5, nombre: "Marcela", apellido: "Valdés", email: "marcela@example.com", telefono: "666777888", activo: false }
];

// Funcion que une y filta clientes nuevos

function unirClientesConNuevos() {
  const unidos = [...clientes, ...nuevosClientes];

  // Eliminar duplicados por ID
  const clientesUnicos = [];
  const idsVistos = new Set();

  for (const cliente of unidos) {
    if (!idsVistos.has(cliente.id)) {
      idsVistos.add(cliente.id);
      clientesUnicos.push(cliente);
    }
  }

  clientes = clientesUnicos;

  // Crear lista de clientes como HTML
  let mensaje = `<p>Total actual de clientes: <strong>${clientes.length}</strong></p>`;
  mensaje += "<ul>";
  clientes.forEach(c => {
    mensaje += `<li>${c.nombre} ${c.apellido} - ${c.email} - ${c.activo ? "Activo" : "Inactivo"}</li>`;
  });
  mensaje += "</ul>";

  mostrarModal(mensaje);
}

// Mostrar modal para while
function mostrarWhileModal() {
  const modal = new bootstrap.Modal(document.getElementById("modalValidarWhile"));
  modal.show();
}

//Listener del formulario con ciclo while simulado

document.getElementById("formValidarWhile").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("inputWhileId");
  const mensaje = document.getElementById("mensajeWhile");

  let id = parseInt(input.value);
  let cliente = null;
  let intentos = 0;

  while (!cliente && intentos < 10) {
    cliente = clientes.find(c => c.id === id);

    if (!cliente) {
      mensaje.textContent = `El ID ${id} no existe. Intenta nuevamente.`;
      input.value = "";
      input.focus();
      return;
    }
    intentos++;
  }

  if (cliente) {
    const resumen = `
      <strong>Cliente encontrado:</strong><br>
      ${cliente.nombre} ${cliente.apellido}<br>
      Email: ${cliente.email}<br>
      Teléfono: ${cliente.telefono}<br>
      Estado: <strong>${cliente.activo ? "Activo" : "Inactivo"}</strong>
    `;
    mostrarModal(resumen);

    const modal = bootstrap.Modal.getInstance(document.getElementById("modalValidarWhile"));
    modal.hide();
    mensaje.textContent = "";
    this.reset();
  }
});
