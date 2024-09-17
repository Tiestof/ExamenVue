<template>
  <div class="form-container">
    <div class="input-group ">
      <label for="nota1">Nota 1</label>
      <input type="number" 
        v-model.number="nota1"
        placeholder="Nota 1"
        class="form-control"
        required
        min="10"
        max="70"
        @input="validarNota(nota1, 'nota1Error')"
      />
      <div v-if="nota1Error" class="warning-tooltip">{{ nota1Error }}</div>
    </div>

    <div class="input-group">
      <label for="nota2">Nota 2</label>
      <input type="number"
        v-model.number="nota2"
        placeholder="Nota 2"
        class="form-control"
        required
        min="10"
        max="70"
        @input="validarNota(nota2, 'nota2Error')"
      />
      <div v-if="nota2Error" class="warning-tooltip">{{ nota2Error }}</div>
    </div>

    <div class="input-group">
      <label for="nota3">Nota 3</label>
      <input type="number"
        v-model.number="nota3"
        placeholder="Nota 3"
        class="form-control"
        required
        min="10"
        max="70"
        @input="validarNota(nota3, 'nota3Error')"
      />
      <div v-if="nota3Error" class="warning-tooltip">{{ nota3Error }}</div>
    </div>

    <div class="input-group">
      <label for="asistencia">Asistencia %</label>
      <input type="number"
        v-model.number="asistencia"
        placeholder="Asistencia"
        class="form-control"
        required
        min="0"
        max="100"
        @input="validarAsistencia"
      />
      <div v-if="asistenciaError" class="warning-tooltip">{{ asistenciaError }}</div>
    </div>

    <button @click="calcular" :disabled="!puedeCalcular">Calcular</button>

    <p v-if="showGeneralError" class="general-error">Por favor, ingrese valores válidos para las notas y la asistencia</p>

    <div v-if="resultado">
      <p>Promedio: {{ promedio }}</p>
      <p>Asistencia: {{ asistencia }}%</p>
      <p :class="{ 'reprobado': mensaje === 'Reprobado' }">{{ mensaje }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      promedio: 0,
      mensaje: '',
      resultado: false,
      nota1Error: '',
      nota2Error: '',
      nota3Error: '',
      asistenciaError: '',
      showGeneralError: false,
    };
  },
  computed: {
    puedeCalcular() {
      return (
        this.nota1 >= 10 &&
        this.nota1 <= 70 &&
        this.nota2 >= 10 &&
        this.nota2 <= 70 &&
        this.nota3 >= 10 &&
        this.nota3 <= 70 &&
        this.asistencia >= 0 &&
        this.asistencia <= 100
      );
    },
  },
  watch: {
      
    nota1() {
      this.actualizarEstadoGeneralError();
    },
    nota2() {
      this.actualizarEstadoGeneralError();
    },
    nota3() {
      this.actualizarEstadoGeneralError();
    },
    asistencia() {
      this.actualizarEstadoGeneralError();
    },
  },
  
  methods: {
    validarNota(nota, errorProp) {
      if (nota === null || nota === '') {
        this[errorProp] = 'Este campo es obligatorio.';
      } else if (nota < 10) {
        this[errorProp] = 'El valor debe ser superior o igual a 10';
      } else if (nota > 70) {
        this[errorProp] = 'El valor debe ser inferior o igual a 70';
      } else {
        this[errorProp] = '';
      }
    },
    
    validarAsistencia() {
      if (this.asistencia === null || this.asistencia === '') {
        this.asistenciaError = 'Este campo es obligatorio.';
      } else if (this.asistencia < 0 || this.asistencia > 100) {
        this.asistenciaError = 'La asistencia debe estar entre 0 y 100';
      } else {
        this.asistenciaError = '';
      }
    },
    
    actualizarEstadoGeneralError() {
      
      this.showGeneralError =
        !!this.nota1Error || !!this.nota2Error || !!this.nota3Error || !!this.asistenciaError;
    },
    
    calcular() {
      this.actualizarEstadoGeneralError();

      if (this.showGeneralError) {
        return;
      }

      const ponderado =
        this.nota1 * 0.35 + this.nota2 * 0.35 + this.nota3 * 0.30;
      this.promedio = ponderado.toFixed(2);
      if (ponderado >= 40 && this.asistencia >= 80) {
        this.mensaje = 'Aprobado';
      } else {
        this.mensaje = 'Reprobado';
      }
      this.resultado = true;
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
  width: 300px; /* Ancho  para todos los inputs */
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
  top: 48px; /* Ajustamos el mnsaje de warningn */
  left: 0;
  background-color: #ffc107;
  color: #000;
  padding: 5px;
  border-radius: 4px;
  font-size: 0.85em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.general-error {
  color: #dc3545;
  font-size: 1em;
  margin-top: 10px;
}

.reprobado {
  color: #dc3545; /* Texto en rojo si el resultado es reprobado */
}
</style>