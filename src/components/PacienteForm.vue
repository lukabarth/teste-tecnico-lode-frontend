<template>
    <div class="form-pacientes">
        <form @submit.prevent="salvarPaciente">
            <br><label for="nome">Nome: </label>
            <input type="text" v-model="paciente.nome" id="nome">

            <br><label for="idade">Idade: </label>
            <input type="text" v-model="paciente.idade" id="idade">

            <br><label for="cidade">Cidade: </label>
            <input type="text" v-model="paciente.cidade" id="cidade">

            <br><label for="estado">Estado: </label>
            <input type="text" v-model="paciente.estado" id="estado">

            <br><label for="cpf">CPF: </label>
            <input type="text" v-model="paciente.cpf" id="cpf">
            <br><input type="submit" value="Salvar">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            paciente: {
                nome: '',
                idade: '',
                cidade: '',
                estado: '',
                cpf: ''
            }
        }
    },
    methods: {
        async salvarPaciente() {
            try {
                const response = await fetch("http://localhost:8080/pacientes", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.paciente),
                });
                
                if (response.ok) {
                    alert("Paciente salvo com sucesso!");
                } else {
                    console.error("Erro ao salvar paciente:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao salvar paciente:", error);
            }
        }
    }
}
</script>

<style>
</style>