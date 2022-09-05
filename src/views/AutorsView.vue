<script>
import AutorsApi from "@/api/autors.js";
const autorsApi = new AutorsApi();
export default {
  data() {
    return {
      autor: {},
      autors: [],
    };
  },
  async created() {
    this.autors = await autorsApi.buscarTodosOsAutors();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autorsApi.atualizarAutor(this.autor);
      } else {
        await autorsApi.adicionarAutor(this.autor);
      }
      this.autors = await autorsApi.buscarTodosOsAutors();
      this.autor = {};
    },
    async excluir(autor) {
      await autorsApi.excluirAutor(autor.id);
      this.autors = await autorsApi.buscarTodosOsAutors();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Autores</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="autor.nome" @keyup.enter="salvar" />
      <button @click="salvar">Adicionar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autors" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.nome }}</td>
            <td>
              <button @click="editar(autor)">Editar</button>
              <button @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
