<template>
  <div class="xbox">
    <!-- START CONTENT -->
    <div>
      <b-card-group deck>
        <b-card title="" header-tag="header" footer-tag="footer">
          <h6 slot="header" class="mb-0">Produtos Populares</h6>
          <b-card-group deck>
             <b-card
              :title="produto[0]"
              :img-src="produtoImage0"
              img-alt="Image"
              img-top
            >
            <div v-for="variant0 in variants0" :key="variant0.variantId">
              <b-button block variant="outline-dark" size="sm" @click="goTodetail(variant0.variantId)" @mouseover="updateProduct0(variant0.variantImage0)">{{variant0.variantConsole}}</b-button>
            </div>
              <b-card-text>
                <span>{{descricao[0]}}</span>
                <h6 style="color: green; text-align: center"><i class="fas fa-dollar-sign" style="color: green"></i> 69,00</h6>
                    <div style="text-align: center">
                    <h2 v-if="qtde0 > 10">Em Estoque</h2>
                    <h2 v-else-if="qtde0 <= 10 && qtde0 > 0">Ultimas Unidades</h2>
                    <h2 v-else>Fora de Estoque</h2>
                    </div>
              </b-card-text>
              <div slot="footer">
                <b-button block variant="outline-primary" @click="comprar0" v-if="qtde0 >= 1">Comprar</b-button>
                <b-button block variant="outline-danger" v-else disabled class="disabledButton">Em falta</b-button>
              </div>
            </b-card>

           <b-card
              :title="produto[1]"
              :img-src="produtoImage1"
              img-alt="Image"
              img-top
            >
            <div v-for="variant1 in variants1" :key="variant1.variantId">
              <b-button block variant="outline-dark" size="sm" @click="goTodetail(variant1.variantId)" @mouseover="updateProduct1(variant1.variantImage1)">{{variant1.variantConsole}}</b-button>
            </div>
              <b-card-text>
                <span>{{descricao[1]}}</span>
                <h6 style="color: green; text-align: center"><i class="fas fa-dollar-sign" style="color: green"></i> 99,00</h6>
                    <div style="text-align: center">
                    <h2 v-if="qtde1 > 10">Em Estoque</h2>
                    <h2 v-else-if="qtde1 <= 10 && qtde1 > 0">Ultimas Unidades</h2>
                    <h2 v-else>Fora de Estoque</h2>
                    </div>
              </b-card-text>
              <div slot="footer">
                <b-button block variant="outline-primary" @click="comprar1" v-if="qtde1 >= 1">Comprar</b-button>
                <b-button block variant="outline-danger" v-else disabled class="disabledButton">Em falta</b-button>
              </div>
            </b-card>

           <b-card
              :title="produto[2]"
              :img-src="produtoImage2"
              img-alt="Image"
              img-top
            >
            <div v-for="variant2 in variants2" :key="variant2.variantId">
              <b-button block variant="outline-dark" size="sm" @click="goTodetail(variant2.variantId)" @mouseover="updateProduct2(variant2.variantImage2)">{{variant2.variantConsole}}</b-button>
            </div>
              <b-card-text>
                <span>{{descricao[2]}}</span>
                <h6 style="color: green; text-align: center"><i class="fas fa-dollar-sign" style="color: green"></i> 104,00</h6>
                    <div style="text-align: center">
                    <h2 v-if="qtde2 > 10">Em Estoque</h2>
                    <h2 v-else-if="qtde2 <= 10 && qtde2 > 0">Ultimas Unidades</h2>
                    <h2 v-else>Fora de Estoque</h2>
                    </div>
              </b-card-text>
              <div slot="footer">
                <b-button block variant="outline-primary" @click="comprar2" v-if="qtde2 >= 1">Comprar</b-button>
                <b-button block variant="outline-danger" v-else disabled class="disabledButton">Em falta</b-button>
              </div>
            </b-card>
          </b-card-group>
        </b-card>
      </b-card-group>
      </div>
    </div>

</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
export default {
  name: 'xbox',
  data() {
    return {
      produto: ["Grand theft Auto V", "Fifa 19", "Need For Speed: Payback"],
      produtoImage0: "//i.imgur.com/zCmN9i6.png",
      produtoImage1: "//i.imgur.com/MlEbj8C.jpg",
      produtoImage2: "//i.imgur.com/FvfREpv.jpg",
      descricao: ["Estudio: Rockstar Games", "Estudio: Electronic Arts, EA Sports", "Estudio: Electronic Arts, Ghost Games"],
      variants0: [
        {
          variantId: 1,
          variantConsole: "PS4",
          variantImage0: "//i.imgur.com/KJ9wgar.jpg"
        },
        {
          variantId: 2,
          variantConsole: "Xbox One",
          variantImage0: "//i.imgur.com/zCmN9i6.png"
        },
        {
          variantId: 3,
          variantConsole: "PC",
          variantImage0: "//i.imgur.com/Rz5sbypg.jpg"
        }
      ],
      variants1: [
        {
          variantId: 4,
          variantConsole: "PS4",
          variantImage1: "//i.imgur.com/MQKn6xn.jpg"
        },
        {
          variantId: 5,
          variantConsole: "Xbox One",
          variantImage1: "//i.imgur.com/MlEbj8C.jpg"
        },
        {
          variantId: 6,
          variantConsole: "PC",
          variantImage1: "//i.imgur.com/DwiiHiq.jpg"
        }
      ],
      variants2: [
        {
          variantId: 7,
          variantConsole: "PS4",
          variantImage2: "//i.imgur.com/q79BOu5.jpg"
        },
        {
          variantId: 8,
          variantConsole: "Xbox One",
          variantImage2: "//i.imgur.com/FvfREpv.jpg"
        },
        {
          variantId: 9,
          variantConsole: "PC",
          variantImage2: "//i.imgur.com/eSyJZu7.png"
        }
      ],
    };
  },
  computed: {
    ...mapState({
    carrinho: 'carrinho',
    qtde0: 'qtde0',
    qtde1: 'qtde1',
    qtde2: 'qtde2',
    })
  },
  methods: {
    updateProduct0(variantImage0) {
      this.produtoImage0 = variantImage0;
    },
    updateProduct1(variantImage1) {
      this.produtoImage1 = variantImage1;
    },
    updateProduct2(variantImage2) {
      this.produtoImage2 = variantImage2;
    },
    comprar0: function() {
      this.$emit('Carrinho', this.$store.state.carrinho++);
      this.$emit('Qtde0', this.$store.state.qtde0--);
    },
    comprar1: function() {
      this.$emit('Carrinho', this.$store.state.carrinho++);
      this.$emit('Qtde1', this.$store.state.qtde1--);
    },
    comprar2: function() {
      this.$emit('Carrinho', this.$store.state.carrinho++);
      this.$emit('Qtde2', this.$store.state.qtde2--);
    },
    goTodetail(id) {
    let proId=id
    this.$router.push({name:'details',params:{Pid:proId}})
  }
  }
}

</script>
