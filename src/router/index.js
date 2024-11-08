import Vue from 'vue';
import VueRouter from 'vue-router';
import Medicos from '@/views/Medicos.vue';
import Agendas from '@/views/Agendas.vue';
import Consultas from '@/views/Consultas.vue';
import Pacientes from '@/views/Pacientes.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/medicos', component: Medicos },
  { path: '/agendas', component: Agendas },
  { path: '/consultas', component: Consultas },
  { path: '/pacientes', component: Pacientes }
];

export default new VueRouter({ routes });