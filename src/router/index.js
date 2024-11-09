import { createRouter, createWebHistory } from 'vue-router'
import Agendas from '@/views/AgendaForm.vue'
import Consultas from '@/views/ConsultaForm.vue'
import Pacientes from '@/views/PacienteForm.vue'
import MedicoForm from '@/views/MedicoForm.vue'

const routes = [
  { path: '/medicos', component: MedicoForm },
  { path: '/agendas', component: Agendas },
  { path: '/consultas', component: Consultas },
  { path: '/pacientes', component: Pacientes }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router