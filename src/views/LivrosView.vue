<script>
import axios from "axios";
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      livros: [],
      categorias: [],
      autores: [],
      editoras: [],
      livro: {},
    };
  },
  async created() {
    await this.BuscarTodasAsEditoras();
    await this.BuscarTodasAsCategorias();
    await this.BuscarTodosOsAutors();
    const livros = await axios.get(
      "https://backend-livraria-magic.herokuapp.com/livros?expand=categoria&expand=editora&expand=autor"
    );
    this.livros = livros.data;
  },
  methods: {
    async BuscarTodasAsEditoras() {
      const editoras = await axios.get(
        "https://backend-livraria-magic.herokuapp.com/editoras"
      );
      this.editoras = editoras.data;
    },
    async BuscarTodasAsCategorias() {
      const categorias = await axios.get(
        "https://backend-livraria-magic.herokuapp.com/categorias"
      );
      this.categorias = categorias.data;
    },
    async BuscarTodosOsAutors() {
      const autors = await axios.get(
        "https://backend-livraria-magic.herokuapp.com/autors"
      );
      this.autors = autors.data;
    },
    async salvar() {
      const livro_criado = await axios.post(
        "https://backend-livraria-magic.herokuapp.com/livros",
        this.livro
      );
      this.livros.push(livro_criado.data);
      this.livro = {};
      const livros = await axios.get(
        "https://backend-livraria-magic.herokuapp.com/livros?expand=categoria&expand=editora&expand=autor"
      );
      this.livros = livros.data;
    },
    async excluir(livro) {
      await axios.delete(
        `https://backend-livraria-magic.herokuapp.com/livros/${livro.id}`
      );
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
    async atualizarLivro(livro) {
      const response = await axios.put(
        `https://backend-livraria-magic.herokuapp.com/livros/${livro.id}`,
        livro
      );
      return response.data;
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
    alerta() {
      alert("ok");
    },
  },
};
</script>

<template>
  <div class="conteudo">
    <div class="titulo">
      <h2>Gerencimento de Livros</h2>
    </div>
    <div class="input-form">
      <input
        type="text"
        v-model="livro.nome"
        @keyup.enter="salvar"
        placeholder="Livros"
      />
      <div class="input-group">
        <select
          class="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          v-model="livro.autorId"
          @keyup.enter="salvar"
          placeholder="Autores"
        >
          <option selected class="disabled" value="">Autores</option>
          <option v-for="autor in autors" :key="autor.id" :value="autor.id">
            {{ autor.nome }}
          </option>
        </select>
        <select
          class="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          v-model="livro.categoriaId"
          @keyup.enter="salvar"
          placeholder="Categorias"
        >
          <option selected class="disabled" value="">Categorias</option>
          <option
            v-for="categoria in categorias"
            :key="categoria.id"
            :value="categoria.id"
          >
            {{ categoria.nome }}
          </option>
        </select>
        <select
          class="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          v-model="livro.editoraId"
          @keyup.enter="salvar"
          placeholder="Editoras"
        >
          <option selected class="disabled" value="">Editoras</option>
          <option
            v-for="editora in editoras"
            :key="editora.id"
            :value="editora.id"
          >
            {{ editora.nome }}
          </option>
        </select>
        <button @click="salvar">Salvar</button>
      </div>
    </div>

    <div class="itens-lista">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Livros</td>
            <td>Autores</td>
            <td>Categorias</td>
            <td>Editoras</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.autor.nome }}</td>
            <td>{{ livro.categoria.nome }}</td>
            <td>{{ livro.editora.nome }}</td>

            <td>
              <button class="botao" @click="editar(livro)">Editar</button>
              <button class="botao" @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.disabled {
  color: gray;
}
</style>
