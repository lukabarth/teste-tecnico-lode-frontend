<template>
    <div class="form-agendas">
        <form @submit.prevent="salvarAgenda">
            <h2>Cadastro de Agenda</h2>
            <label for="dia-semana">Escolha um dia da semana:</label>
            <select v-model="agenda.diaSemana" id="dia-semana">
                <option disabled value="">Selecione um dia</option>
                <option value="SEGUNDA">Segunda-feira</option>
                <option value="TERCA">Terça-feira</option>
                <option value="QUARTA">Quarta-feira</option>
                <option value="QUINTA">Quinta-feira</option>
                <option value="SEXTA">Sexta-feira</option>
                <option value="SABADO">Sábado</option>
                <option value="DOMINGO">Domingo</option>
            </select>

            <br><label for="horario-disponivel">Horário da consulta: </label>
            <input type="text" v-model="agenda.horarioDisponivel" id="horario-disponivel">

            <br><label for="medico">Escolha um médico:</label>
            <select v-model="agenda.medicoId" id="medico">
                <option disabled value="">Selecione um médico</option>
                <option v-for="medico in medicos" :key="medico.idMedico" :value="medico.idMedico">
                    {{ medico.nome }}
                </option>
            </select>

            <br><br>
            <br><input type="submit" value="Salvar">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            agenda: {
                diaSemana: '',
                horarioDisponivel: '',
                medicoId: ''
            },
            medicos: []
        }
    },
    async created() {
        await this.carregarMedicos();
    },

    methods: {
        async carregarMedicos() {
            try {
                const response = await fetch("http://localhost:8080/medicos");
                if (response.ok) {
                    const data = await response.json();
                    this.medicos = data;
                } else {
                    console.error("Erro ao carregar médicos:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao carregar médicos:", error);
            }
        },

        async salvarAgenda() {
            
            if (!this.agenda.diaSemana || !this.agenda.horarioDisponivel || !this.agenda.medicoId) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            try {
                const response = await fetch("http://localhost:8080/agendas", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.agenda),
                });

                if (response.ok) {
                    alert("Agenda salva com sucesso!");
                    this.agenda = { diaSemana: null, horarioDisponivel: null, medicoId: null };
                } else {
                    console.error("Erro ao salvar agenda:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao salvar agenda:", error);
            }
        }
    }
};
</script>

<style scoped>
html, body {
  padding-bottom: 100px;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-agendas {
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

input[type="text"], input[type="submit"] {
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