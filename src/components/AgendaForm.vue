<template>
    <div class="form-agendas">
        <form @submit.prevent="salvarAgenda">
            <br><label for="dia-semana">Dia da semana: </label>
            <input type="text" v-model="agenda.diaSemana" id="dia-semana">

            <br><label for="horario-disponivel">Horário disponível: </label>
            <input type="text" v-model="agenda.horarioDisponivel" id="horario-disponivel">

            <br><label for="medico">ID do médico </label>
            <input type="text" v-model="agenda.medicoId" id="medico">

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
            }
        }
    },
    methods: {
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