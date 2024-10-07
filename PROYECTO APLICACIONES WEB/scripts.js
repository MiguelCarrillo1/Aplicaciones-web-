document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe de manera tradicional

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación de usuario y contraseña
    if (username === 'Miguel' && password === '12345678') {
        alert('Inicio de sesión correcto. Redirigiendo al panel de administración...');
        window.location.href = 'admin.html';  // Redirige al panel de administración
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

function cerrarSesion() {
    // Lógica para cerrar sesión
    alert("Sesión cerrada.");
    window.location.href = 'index.html';
}

function confirmarCancelar() {
    if (confirm("¿Estás seguro de que deseas cancelar?")) {
        // Lógica para cancelar
        document.getElementById("crear_usuario_form")?.reset();
        document.getElementById("usuarios_roles_form")?.reset();
        document.getElementById("mantenimiento_activos_form")?.reset();
        document.getElementById("gestion_activos_form")?.reset();
        document.getElementById("responsable_activo_form")?.reset();
        document.getElementById("soporte_tecnico_form")?.reset();
    }
}

function crearUsuario() {
    window.location.href = 'crear_Usuario.html';
    // Lógica para mostrar formulario de creación de usuario
    const formHtml = `
        <div id="crear_usuario_container">
            <h2>Crear Usuario</h2>
            <form id="crear_usuario_form" onsubmit="return validarCrearUsuario(event)">
                <label for="cedula">Cédula:</label>
                <input type="text" id="cedula" name="cedula" required>
                <label for="usuario">Usuario:</label>
                <input type="text" id="usuario" name="usuario" required>
                <label for="numero">Número Telefónico:</label>
                <input type="text" id="numero" name="numero" required>
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required>
                <button type="submit">Crear Usuario</button>
                <button type="button" onclick="confirmarCancelar()">Cancelar</button>
            </form>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHtml);
}
function validarFormulario() {
    const cedula = document.getElementById("cedula").value.trim();
    const nombreUsuario = document.getElementById("nombre_usuario").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validación de número de cédula (por ejemplo, debe tener 10 dígitos)
    if (!/^\d{10}$/.test(cedula)) {
        alert("El número de cédula debe tener 10 dígitos.");
        return false;
    }

    // Validación de nombre de usuario (debe tener al menos 5 caracteres)
    if (nombreUsuario.length < 5) {
        alert("El nombre de usuario debe tener al menos 5 caracteres.");
        return false;
    }

    // Validación de contraseña (debe tener al menos 8 caracteres, con al menos un número)
    if (contraseña.length < 8 || !/\d/.test(contraseña)) {
        alert("La contraseña debe tener al menos 8 caracteres y contener al menos un número.");
        return false;
    }

    // Validación de número telefónico (por ejemplo, debe tener 10 dígitos)
    if (!/^\d{10}$/.test(numero)) {
        alert("El número telefónico debe tener 10 dígitos.");
        return false;
    }

    // Validación de correo electrónico (verifica el formato)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Si todas las validaciones son correctas
    return true;
}


function registrarActivo(event) {
    event.preventDefault();
    // Lógica para registrar activo
    alert("Activo registrado con éxito.");
    document.getElementById("gestion_activos_form").reset();
}

function registrarMantenimiento(event) {
    event.preventDefault();
    // Lógica para registrar mantenimiento
    alert("Mantenimiento registrado con éxito.");
    document.getElementById("mantenimiento_activos_form").reset();
}

function asignarResponsable(event) {
    event.preventDefault();
    // Lógica para asignar responsable
    alert("Responsable asignado con éxito.");
    document.getElementById("responsable_activo_form").reset();
}

function registrarIncidencia(event) {
    event.preventDefault();
    // Lógica para registrar incidencia
    alert("Incidencia registrada con éxito.");
    document.getElementById("soporte_tecnico_form").reset();
}

function asignarRol(event) {
    event.preventDefault();
    // Lógica para asignar rol
    alert("Rol asignado con éxito.");
    document.getElementById("usuarios_roles_form").reset();
}

function consultarHistorial(event) {
    event.preventDefault();
    // Lógica para consultar historial de movimientos
    alert("Consulta realizada con éxito.");
    document.getElementById("historial_movimientos_form").reset();
}
