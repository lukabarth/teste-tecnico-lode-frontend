<template>
    <div class="form-agendas">
        <form @submit.prevent="salvarAgenda">
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
            try {
                const response = await fetch("http://localhost:8080/agendas", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.agenda),
                });

                if (response.ok) {
                    alert("Agenda salva com sucesso!");
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

<style></style>