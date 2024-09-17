<template>
  <div class="form-container">
    <div class="input-group">
      <label for="nombre">Nombre</label>
      <input type="text"
        v-model="nombre"
        placeholder="Nombre"
        class="form-control"
        required
        @input="validarNombre"
      />
      <div v-if="nombreError" class="warning-tooltip">{{ nombreError }}</div>
    </div>

    <div class="input-group">
      <label for="correo">Correo</label>
      <input type="email"
        v-model="correo"
        placeholder="Correo"
        class="form-control"
        required
        @input="validarCorreo"
      />
      <div v-if="correoError" class="warning-tooltip">{{ correoError }}</div>
    </div>

    <div class="input-group">
      <label for="contraseña">Contraseña</label>
      <input type="password"
        v-model="contraseña"
        placeholder="Contraseña"
        class="form-control"
        required
        @input="validarContraseñas"
      />
      <div v-if="contraseñaError" class="warning-tooltip">{{ contraseñaError }}</div>
    </div>

    <div class="input-group">
      <label for="repetirContraseña">Repetir Contraseña</label>
      <input type="password"
        v-model="repetirContraseña"
        placeholder="Repetir Contraseña"
        class="form-control"
        required
        @input="validarContraseñas"
      />
      <div v-if="repetirContraseñaError" class="warning-tooltip">{{ repetirContraseñaError }}</div>
    </div>

    <button @click="enviar" :disabled="!formValido">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contraseña: '',
      repetirContraseña: '',
      nombreError: '',
      correoError: '',
      contraseñaError: '',
      repetirContraseñaError: '',
    };
  },
  computed: {
    formValido() {
      
      return (
        !this.nombreError &&
        !this.correoError &&
        !this.contraseñaError &&
        !this.repetirContraseñaError &&
        this.nombre &&
        this.correo &&
        this.contraseña &&
        this.repetirContraseña
      );
    },
  },
  methods: {
      
    validarNombre() {
      // Validación para el campo nombre no este vacio.
      this.nombreError = this.nombre.trim() === '' ? 'El nombre es obligatorio.' : '';
    },
    
    validarCorreo() {
      // Validamos con la Expresión regular para validar correo electrónico
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.correoError = regex.test(this.correo)
        ? ''
        : 'Debe ingresar un correo electrónico válido.';
    },
    
    validarContraseñas() {
      // Verificamos que ambas contraseñas coincidan y no estén vacías
      if (this.contraseña !== this.repetirContraseña) {
        this.contraseñaError = '';
        this.repetirContraseñaError = 'Las contraseñas no coinciden.';
      } else {
        this.contraseñaError = this.contraseña === '' ? 'El campo contraseña es requerido' : '';
        this.repetirContraseñaError =
          this.repetirContraseña === '' ? 'El campo repetir contraseña es requerido.' : '';
      }
    },
    enviar() {
      if (this.formValido) {
        alert('El registro se ha realizado correctamente');
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.input-group {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; 
  position: relative; 
}

label {
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
}

.form-control {
  border-color: #ccc; 
}

.warning-tooltip {
  position: absolute;
  top: 48px; 
  left: 0;
  background-color: #ffc107;
  color: #000;
  padding: 5px;
  border-radius: 4px;
  font-size: 0.85em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
