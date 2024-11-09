<template>
    <div class="form-medicos">
        <form @submit.prevent="salvarMedico">
            <br><label for="nome">Nome: </label>
            <input type="text" v-model="medico.nome" id="nome">

            <br><label for="conselho">Conselho: </label>
            <input type="text" v-model="medico.conselho" id="conselho">

            <br><label for="estado">Estado: </label>
            <input type="text" v-model="medico.estado" id="estado">
            <br><input type="submit" value="Salvar">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            medico: {
                nome: '',
                conselho: '',
                estado: ''
            }
        }
    },
    methods: {
        async salvarMedico() {
            try {
                const response = await fetch("http://localhost:8080/medicos", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.medico),
                });
                
                if (response.ok) {
                    alert("Médico salvo com sucesso!");
                } else {
                    console.error("Erro ao salvar médico:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao salvar médico:", error);
            }
        }
    }
}
</script>

<style>
</style>