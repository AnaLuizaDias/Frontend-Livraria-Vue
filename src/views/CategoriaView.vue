<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      categorias: [],
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.categoria = {};
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Categorias</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="categoria.nome" @keyup.enter="salvar" />
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
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.nome }}</td>
            <td>
              <button @click="editar(categoria)">Editar</button>
              <button @click="excluir(categoria)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
