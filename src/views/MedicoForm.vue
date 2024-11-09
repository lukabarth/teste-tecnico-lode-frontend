<template>
    <div class="form-medicos">
        <form @submit.prevent="salvarMedico">
            <h2>Cadastro de Médicos</h2>
            <br><label for="nome">Nome: </label>
            <input class="input-nome" type="text" v-model="medico.nome" id="nome">

            <br><label class="input-conselho" for="conselho">Conselho: </label>
            <input class="input-nome" type="text" v-model="medico.conselho" id="conselho">

            <br><label class="input-estado" for="estado">Estado: </label>
            <input type="text" v-model="medico.estado" id="estado">
            <br><input class="input-nome" type="submit" value="Salvar">
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
            if (!this.medico.nome || !this.medico.conselho || !this.medico.estado) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            try {
                const response = await fetch("http://localhost:8080/medicos", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.medico),
                });
                
                if (response.ok) {
                    alert("Médico salvo com sucesso!");
                    this.medico = { nome: null, conselho: null, estado: null };
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
html, body {
  padding-bottom: 100px;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-medicos {
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