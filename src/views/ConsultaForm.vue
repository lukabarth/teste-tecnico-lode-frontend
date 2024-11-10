<template>
    <div class="form-consultas">
        <form @submit.prevent="salvarConsulta">
            <h2>Cadastro de Consulta</h2>

            <label for="agenda">Escolha uma Agenda:</label>
            <select v-model="consulta.agendaId" id="agenda">
                <option v-for="agenda in agendas" :key="agenda.agendaId" :value="agenda.agendaId">
                    {{ agenda.diaSemana }} - {{ agenda.horarioDisponivel }} (Dr. {{ agenda.medico.nome }})
                </option>
            </select>

            <label for="paciente">Escolha um Paciente:</label>
            <select v-model="consulta.pacienteId" id="paciente">
                <option v-for="paciente in pacientes" :key="paciente.pacienteId" :value="paciente.pacienteId">
                    {{ paciente.nome }}
                </option>
            </select>

            <input type="submit" value="Salvar Consulta">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            consulta: {
                agendaId: null,
                pacienteId: null
            },
            agendas: [],
            pacientes: [],
        };
    },
    async created() {
        await this.carregarAgendas();
        await this.carregarPacientes();
    },

    methods: {
        async carregarAgendas() {
            try {
                const response = await fetch("http://localhost:8080/agendas");
                this.agendas = await response.json();
            } catch (error) {
                console.error("Erro ao carregar agendas:", error);
            }
        },
        async carregarPacientes() {
            try {
                const response = await fetch("http://localhost:8080/pacientes");
                if (response.ok) {
                    const data = await response.json();
                    console.log("Pacientes carregados:", data);
                    this.pacientes = data;
                } else {
                    console.error("Erro ao carregar pacientes:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao carregar pacientes:", error);
            }
        },

        async salvarConsulta() {
            console.log("Consulta a ser salva:", this.consulta);
            if (!this.consulta.agendaId || !this.consulta.pacienteId) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            try {
                const response = await fetch("http://localhost:8080/consultas", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.consulta),
                });

                if (response.ok) {
                    alert("Consulta cadastrada com sucesso!");
                    this.consulta = { agendaId: null, pacienteId: null }
                } else {
                    console.error("Erro ao salvar consulta:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao salvar consulta:", error);
            }
        }
    }
}
</script>

<style>
html,
body {
    padding-bottom: 100px;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-consultas {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #280457;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 100px;
}

input[type="text"],
input[type="submit"] {
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}
</style>