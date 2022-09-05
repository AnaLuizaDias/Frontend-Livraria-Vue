<script>
export default {
  data() {
    return {
      livros: [
        {
          id: 1,
          nome: "Harry Potter",
          descricao:
            "Harry Potter é uma série de sete romances de fantasia e aventura escrita pela autora britânica J. K. Rowling, em que um menino descobre que é bruxo. ",
          imagem: new URL("../assets/images/hp.jpeg", import.meta.url).href,
        },
        {
          id: 2,
          nome: "Divergente",
          descricao:"Aos dezesseis anos, numa grande cerimônia de iniciação, os jovens são submetidos a um teste de aptidão e devem escolher a qual grupo pertencem. ",
          imagem: new URL("../assets/images/divergente.jpeg", import.meta.url).href,
        },
        {
          id: 3,
          nome: "Orgulho e Preconceito",
          descricao:
            "A obra conta a história de uma família britânica em volta do protagonismo de Elizabeth Bennet, uma das cinco irmãs da família .",
          imagem: new URL("../assets/images/orgulho.jpeg", import.meta.url).href,
        },
        {
          id: 4,
          nome: "O Morro dos Ventos Uivantes",
          descricao:
            "Heathcliff. É o protagonista de O morro dos ventos uivantes. Tem um passado trágico marcado pelo abandono, pelo preconceito. ",
          imagem: new URL("../assets/images/morro.jpeg", import.meta.url).href,
        },
        {
          id: 5,
          nome: "As Vantagens de ser Insvisível",
          descricao:
            "Conta a história Charlie, um garoto de 15 anos que se recupera de uma depressão, e tenta seguir sua vida depois de perder seu único amigo. ",
          imagem: new URL("../assets/images/vantagens2.jpg", import.meta.url).href,
        },
        {
          id: 6,
          nome: "Fazendo Meu Filme",
          descricao:
            "o fascinante universo de uma menina cheia de expectativas, que vive a dúvida entre continuar sua rotina, com seus amigos e seu inesperado novo amor.",
          imagem: new URL("../assets/images/filme.jpeg", import.meta.url).href,
        },
        {
          id: 7,
          nome: "Jogos Vorazes",
          descricao:
            "Jogos Vorazes se passa num futuro pós-apocalítico, onde os Estados Unidos já não existem mais. Katniss vai ter que tomar novas decisões, muito complicadas",
          imagem: new URL("../assets/images/jogos.png", import.meta.url).href,
        },
        {
          id: 8,
          nome: "O Diário de Anne Frank",
          descricao:
            "Anne Frank relatou em seu diário os conflitos de uma adolescente e a tensão de se viver escondida sobrevivendo com a comida armazenada.",
          imagem: new URL("../assets/images/frank.jpg", import.meta.url).href,
        },
        {
          id: 9,
          nome: "Anne of Green Gables",
          descricao:
            " Quando os irmãos Marilla e Matthew Cuthbert, de Green Gables, na Prince Edward Island, no Canadá, decidem adotar um órfão. para ajudá-los nos trabalhos da fazenda",
          imagem: new URL("../assets/images/anne.png", import.meta.url).href,
        },
        {
          id: 10,
          nome: "A Culpa é das Estrelas",
          descricao:
            "Trata do amor de dois jovens aprendendo desde cedo a lidar com o fato de que poderão ser afastados um do outro a qualquer momento por uma triste razão. ",
          imagem: new URL("../assets/images/culpa.jpeg", import.meta.url).href,
        }
        
      ],
    };
  },
  methods: {
    comprarLivro(livro) {
      alert("Você adicionou " + livro.nome + " na sacola");
    },
  },
};
</script>
<template>
  <div class="margin">
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <div class="col" v-for="livro of livros" :key="livro.id">
        <div class="card">
          <img
            id="oi"
            :src="livro.imagem"
            class="card-img-top img-cards"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ livro.nome }}</h5>
            <p class="card-text">
              {{ livro.descricao }}
            </p>
            <button
              type="button"
              class="btn btn-secondary botao-meu"
              @click="comprarLivro(livro)"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
template{
  height:50%;
}

</style>
