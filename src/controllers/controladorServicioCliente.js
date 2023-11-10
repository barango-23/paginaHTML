// Puedes agregar lógica del controlador según sea necesario
// Por ejemplo, para cargar contactos dinámicamente:

// Array de contactos de ejemplo (puedes reemplazarlo con datos reales)
const contactos = [
  { nombre: "Juan Henao", telefono: "487-456-7890" },
  { nombre: "Felipe Guzman", telefono: "567-654-3210" },
  { nombre:  "Sara uribe ", telefono: "2345-456-7890" },
  { nombre: " Vanessa Arcila", telefono: "590-456-7890" },
  { nombre: " Saray Vasquez", telefono: "432-654-3210" },
  { nombre: "Bryan Stiven ", telefono: "134-456-7890" },
  { nombre: " Mariana Molina", telefono: "234-654-3210" },
  { nombre: "Sara Arias", telefono: "678-456-7890" },
  { nombre: "Leidi Viviana ", telefono: "567-654-3210" },
];

// Función para cargar contactos en la tabla
function cargarContactos() {
  const contactosBody = document.getElementById("contactos-body");

  contactos.forEach((contacto) => {
    const row = document.createElement("tr");
    const nombreCell = document.createElement("td");
    const telefonoCell = document.createElement("td");

    nombreCell.textContent = contacto.nombre;
    telefonoCell.textContent = contacto.telefono;

    row.appendChild(nombreCell);
    row.appendChild(telefonoCell);

    contactosBody.appendChild(row);
  });
}

// Cargar contactos cuando la página se cargue
window.onload = cargarContactos;
