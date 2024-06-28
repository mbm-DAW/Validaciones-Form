window.onload = () => {
    let form = document.querySelector("#registroForm");
    form.nombre.addEventListener("input", validarNombre);
    form.apellido.addEventListener("input", validarApellido);
    form.edad.addEventListener("input", validarEdad);
    form.telefono.addEventListener("input", validarTelefono);
    form.email.addEventListener("input", validarEmail);
    form.pass1.addEventListener("input", validarPass1);
    form.pass2.addEventListener("input", validarPass2);
    form.reset.addEventListener("click", () => {
        inputs = document.querySelectorAll("input");  // es array

        inputs.forEach(element => {
            element.classList.remove("errorInput");
            element.classList.remove("validoInput");

        });
        let mensajeError = document.querySelectorAll(".msn");
        mensajeError.forEach(mensaje => {
            mensaje.textContent = "";
        })
    })

    function validarFormulario() {
        if (validarNombre() && validarApellido() && validarEdad() && validarEmail() && validarPass1() && validarPass2() && validarTelefono ) {
            return true
        }
        else {
            return false;
        }
    }

    function validarNombre() {
        let nombre = document.querySelector("#nombre");
        let msnError = document.querySelector(".nombreError");
        if (!nombre.value.trim()) {
            nombre.classList.add("errorInput");
            nombre.classList.remove("validoInput");
            msnError.textContent = "El nombre es obligatorio";
            return false;
        }
        else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
            nombre.classList.add("errorInput");
            nombre.classList.remove("validoInput");
            msnError.textContent = "El nombre solo puede contener letras y espacios";
            return false;

        }
        else {
            nombre.classList.remove("errorInput");
            nombre.classList.add("validoInput");
            msnError.textContent = "";
            return true;
        }
    }

    function validarApellido() {
        let apellido = document.querySelector("#apellido");
        let msnError = document.querySelector(".apellidoError");
        if (!apellido.value.trim()) {
            apellido.classList.add("errorInput");
            apellido.classList.remove("validoInput");
            msnError.textContent = "El apellido es obligatorio";
            return false;
        }
        else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
            apellido.classList.add("errorInput");
            apellido.classList.remove("validoInput");
            msnError.textContent = "El apellido solo puede contener letras y espacios";
            return false;

        }
        else {
            apellido.classList.remove("errorInput");
            apellido.classList.add("validoInput");
            msnError.textContent = "";
            return true;
        }

    }
    function validarEdad() {
        let edad = document.querySelector("#edad");
        let msnError = document.querySelector(".edadError");
        if (isNaN(edad.value)) {
            edad.classList.add("errorInput");
            edad.classList.remove("validoInput");
            msnError.textContent = "La edad solo puede contener numeros";
            return false;
        }
        else if (edad.value <= 0 || edad.value > 100) {
            edad.classList.add("errorInput");
            edad.classList.remove("validoInput");
            msnError.textContent = "La edad debe ser mayor que cero.";
            return false;
        }
        else {
            edad.classList.remove("errorInput");
            edad.classList.add("validoInput");
            msnError.textContent = "";
            return true;
        }


    }

    function validarTelefono() {
        let telefono = document.querySelector("#telefono");
        let msnError = document.querySelector(".telefonoError");
        if (!telefono.value.trim()) {
            telefono.classList.add("errorInput");
            telefono.classList.remove("validoInput");
            msnError.textContent = "El telefono no puede ser vacio";
            return false;
        }
        else if (!/^[6789]\d{8}$/.test(telefono.value)) {
            telefono.classList.add("errorInput");
            telefono.classList.remove("validoInput");
            msnError.textContent = "El telefono debe comenzar con 6/7/8/9 y de longitud 9 numeros.";
            return false;
        }
        else {
            telefono.classList.remove("errorInput");
            telefono.classList.add("validoInput");
            msnError.textContent = "";
            return true;
        }
    }


    function validarEmail() {
        let email = document.querySelector("#email");
        let msnError = document.querySelector(".emailError");
        if (!email.value.trim()) {
            email.classList.add("errorInput");
            email.classList.remove("validoInput");
            msnError.textContent = "El email no puede ser vacio";
            return false;
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
            email.classList.add("errorInput");
            email.classList.remove("validoInput");
            msnError.textContent = "El email debe contener letras,numeros y _ y despues @ numeros,letras . min:2 max:6";
            return false;
        }
        else {
            email.classList.remove("errorInput");
            email.classList.add("validoInput");
            msnError.textContent = "";
            return true;
        }
    }



    function validarPass1() {
        let pass1 = document.querySelector("#pass1");
        let msnError = document.querySelector(".pass1Error");
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass1.value)) {
            pass1.classList.add("errorInput");
            pass1.classList.remove("validoInput");
            msnError.textContent = "El password debe contener 8 caracteres, de los cuales 1 mayuscula, 1 minuscula y una letraes incorrecto";
            return false;
        }
        else {
            pass1.classList.remove("errorInput");
            pass1.classList.add("validoInput");
            msnError.textContent = "";
            return true;
        }
    }


    function validarPass2() {
        let pass1 = document.querySelector("#pass1");
        let pass2 = document.querySelector("#pass2");
        let msnError = document.querySelector(".pass2Error");
        if (pass1.value !== pass2.value || pass2.value.trim()) {
            pass2.classList.add("errorInput");
            pass2.classList.remove("validoInput");
            msnError.textContent = "Los password no son iguales";
            return false;
        }
        else {
            pass2.classList.remove("errorInput");
            pass2.classList.add("validoInput");
            msnError.textContent = "";
            return true;
        }
    }
}





