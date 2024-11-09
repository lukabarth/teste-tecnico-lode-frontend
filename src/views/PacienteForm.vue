<template>
    <div class="form-pacientes">
        <form @submit.prevent="salvarPaciente">
            <h2>Cadastro de Pacientes</h2>
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
            if (!this.paciente.nome || !this.paciente.idade || !this.paciente.cidade || !this.paciente.estado) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

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
html, body {
  padding-bottom: 100px;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-pacientes {
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