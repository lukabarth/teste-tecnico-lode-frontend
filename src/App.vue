<script setup>

</script>

<template>
<div id="app">
    <nav>
      <router-link class="cadastro-medico" to="/medicos">Cadastro de Médicos</router-link>
      <router-link class="cadastro-pacientes" to="/pacientes">Cadastro de Pacientes</router-link>
      <router-link class="cadastro-consultas" to="/consultas">Cadastro de Consultas</router-link>
      <router-link class="cadastro-agendas" to="/agendas">Cadastro de Agendas</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>


<style scoped>
nav {
  width: 100%;
  display: flex;
  margin: 30px;
  padding-bottom: 100px;
  align-items: center;
  justify-content: center;
}

.cadastro-medico, .cadastro-pacientes,
.cadastro-consultas, .cadastro-agendas {
  justify-content: space-between;
  padding: 20px;
  text-decoration: none;
}

.cadastro-medico:hover, .cadastro-pacientes:hover,
.cadastro-consultas:hover, .cadastro-agendas:hover {
  color: #5fb8c9
}
</style>