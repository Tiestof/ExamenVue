<template>
  <nav class="navbar">
    <ul class="nav-links">
      Programación Front End
      <li><router-link to="/">Cálculo de calificaciones</router-link></li>
      <li><router-link to="/FormularioRegistro">Formulario de Registro</router-link></li>
      <li><router-link to="/construccion">En construcción</router-link></li>
    </ul>
      <div class="search-container">
        <input type="text" placeholder="Search" />
        <button class="search-button">Búsqueda</button>
      </div>
  </nav>

  <main class="main-content">
    <router-view />
  </main>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  z-index: 1000;
  border-radius: 4px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  color: #000;
  padding: 5px 10px;
  border-radius: 4px; 
  transition: background-color 0.3s, color 0.3s;
}

.nav-links li:hover {
  background-color: #ddd;
  color: #007bff; 
}

.nav-links li a {
  text-decoration: none;
  color: inherit;
}

.search-container {
  display: flex;
  align-items: end;
}

.search-container input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #28a745;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #218838;
}

.main-content {
  margin-top: 55px; 
  padding: 5px;
  width: 90%; 
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
</style>
