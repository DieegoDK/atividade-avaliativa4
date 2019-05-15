<template>
  <div class="contact">
    <b-card style="text-align: center">
      <div>
        <h1 class="font-weight-light">Contato</h1>
        <ContatoSalvar :contato="contatoSelecionado" @criar="criarContato" @editar="editarContato"/>

        <table class="table" v-if="contatosOrdenados.length > 0">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Titulo</th>
              <th scope="col">Email</th>
              <th scope="col">Mensagem</th>
              <th scope="col">Editar/Excluir</th>
            </tr>
          </thead>
          <contatosListaIten
            v-for="contato in contatosOrdenados"
            :key="contato.id"
            :contato="contato"
            @editar="selecionarContatoParaEdicao"
            @deletar="deletarContato"
          />
        </table>

        <p v-else-if="!mensagemErro">Nenhum Contato criado.</p>

        <div class="alert alert-danger" v-else>{{ mensagemErro }}</div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "./../axios";
import ContatoSalvar from "./../components/ContatoSalvar.vue";
import ContatosListaIten from "./../components/ContatosListaIten.vue";

export default {
  components: {
    ContatoSalvar,
    ContatosListaIten
  },
  data() {
    return {
      contatos: [],
      contatoSelecionado: undefined,
      mensagemErro: undefined
    };
  },
  computed: {
    contatosOrdenados() {
      return this.contatos.sort((t1, t2) => {
        if (t1.concluido === t2.concluido) {
          return t1.titulo < t2.titulo ? -1 : t1.titulo > t2.titulo ? 1 : 0;
        }
        return t1.concluido - t2.concluido;
      });
    }
  },
  created() {
    axios
      .get(`/contatos`)
      .then(
        response => {
          console.log("GET /contatos", response);
          this.contatos = response.data;
          return "Axios";
        },
        error => {
          console.log("Erro capturado no then: ", error);
          return Promise.reject(error);
        }
      )
      .catch(error => {
        console.log("Erro capturado no catch: ", error);
        if (error.response) {
          this.mensagemErro = `Servidor retornou um erro: ${error.message} ${
            error.response.statusText
          }`;
          console.log("Erro [resposta]: ", error.response);
        } else if (error.request) {
          this.mensagemErro = `Erro ao tentar comunicar com o servidor: ${
            error.message
          }`;
          console.log("Erro [requisição]: ", error.request);
        } else {
          this.mensagemErro = `Erro ao fazer requisição ao servidor: ${
            error.message
          }`;
        }
        return "Curso VueJS";
      })
      .then(algumParametro => {
        console.log("Sempre executado!", algumParametro);
      });
  },
  methods: {
    criarContato(contato) {
      axios.post(`/contatos`, contato).then(response => {
        console.log("POST /contatos", response);
        this.contatos.push(response.data);
        this.resetar();
      });
    },
    async deletarContato(contato) {
      const confirmar = window.confirm(
        `Deseja deletar o contato "${contato.titulo}"?`
      );
      if (confirmar) {
        axios.delete(`/contatos/${contato.id}`).then(response => {
          console.log(`DELETE /contatos/${contato.id}`, response);
          const indice = this.contatos.findIndex(t => t.id === contato.id);
          this.contatos.splice(indice, 1);
        });
      }
    },
    editarContato(contato) {
      console.log("Editar: ", contato);
      axios.put(`/contatos/${contato.id}`, contato).then(response => {
        console.log(`PUT /contatos/${contato.id}`, response);
        const indice = this.contatos.findIndex(t => t.id === contato.id);
        this.contatos.splice(indice, 1, contato);
        this.resetar();
      });
    },
    resetar() {
      this.contatoSelecionada = undefined;
    },
    selecionarContatoParaEdicao(contato) {
      this.contatoSelecionado = contato;
    }
  }
};
</script>


