<template>
  <Message :msg="msg" v-show="msg" />
  <div>
    <form id="burger-form" method="POST" @submit="createBurger">
      <div class="input-container">
        <label for="nome">Nome do cliente:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          v-model="nome"
          placeholder="Digite o seu nome"
        />
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
            {{ pao.tipo }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione o tipo de carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
            {{ carne.tipo }}
          </option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
         <label id="opcionais-title" for="opcionais"><p>Selecione os opcionais:</p></label>
        <div
          class="checkbox-container opcionais"
          v-for="opcional in opcionaisdata"
          :key="opcional.id"
        >
          <input
            type="checkbox"
            name="opcionais"
            v-model="opcionais"
            :value="opcional.tipo"
          />
          <span>{{ opcional.tipo }}</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!" />
      </div>
    </form>
  </div>
</template>

<script>
import Message from "./Message";

export default {
  name: "BurgerForm",
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      status: "Solicitado",
      msg: null,
    };
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },
    async createBurger(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      console.log(res);

      this.msg = "Pedido realizado com sucesso!";

      // clear message
      setTimeout(() => (this.msg = ""), 3000);

      // limpar campos
      this.nome = "";
      this.carne = "";
      this.pao = "";
      this.opcionais = [];
    },
  },
  mounted() {
    this.getIngredientes();
  },
  components: {
    Message,
  },
};
</script>

<style scoped>
#burger-form {
  max-width: 600px;
  margin: auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

label {
  font-weight: bold;
  margin-bottom: 50spx;
  color: #222;
  padding: 10px 10px;
  border-left: 4px solid #fcba03;
}
.opcionais{
  padding: 30px;
}
input,
select {
  padding: 10px 10px;
  width: 300px;
}
#opcionais-container {

  flex-direction: row;
  flex-wrap:wrap ;

}

#opcionais-title {
  width: 100%;
  
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 30%;
  margin-bottom: 40px;
  font-size: 18px;
}

.checkbox-container span,
.checkbox-container input {
  width: 30px;
}

.checkbox-container span {
  margin-left: 10px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 3px solid #222;
  padding: 20px;
  font-size: 16px;
  margin: 5 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
