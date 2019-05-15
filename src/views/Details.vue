<template>
  <div class="details">
    <div v-for="produto in produtos" :key="produto.id">
      <div v-if="proId == produto.id"> 
    <b-card-group deck>
        <b-card title="" header-tag="header" footer-tag="footer">
          <h6 slot="header" class="mb-0">Detalhes</h6>
          <b-card-group deck>
             <b-card
              :title="produto.name"
              :img-src="produto.image"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                <h4 style="text-align: center">{{produto.console}}</h4>
                <span>{{produto.descricao}}</span>
                <ul>
                  <li v-for="requisitos in produto.requisito" :key="requisitos.id">
                    {{ requisitos }}
                  </li>
                </ul>
                <h6 style="color: green; text-align: center"><i class="fas fa-dollar-sign" style="color: green"></i> {{produto.preco}}</h6>
                <b-button block variant="outline-primary" @click="voltar">Voltar</b-button>
              </b-card-text>
            </b-card>
          </b-card-group>
            </b-card>
          </b-card-group>
        </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
        title:"Details",
        produtos: [
        {
          id: 1,
          name: "Grand theft Auto V",
          console: "PS4",
          image: "//i.imgur.com/KJ9wgar.jpg",
          preco: "69.00",
          descricao: "Estudio: Rockstar Games",
          requisito: ["Processador: Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 4GHZ (8 CPUs),", "Memória: 8GB.", "Placa de Vídeo: NVIDIA GTX 660 2GB / AMD HD7870 2GB.", "Espaço no HD: 65GiB.", "Sistema Operacional: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1"],
        },
        {
          id: 2,
          name: "Grand theft Auto V",
          console: "Xbox",
          image: "//i.imgur.com/zCmN9i6.png",
          preco: "69.00",
          descricao: "Estudio: Rockstar Games",
          requisito: ["Processador: Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 4GHZ (8 CPUs),", "Memória: 8GB.", "Placa de Vídeo: NVIDIA GTX 660 2GB / AMD HD7870 2GB.", "Espaço no HD: 65GiB.", "Sistema Operacional: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1"],
        },
        {
          id: 3,
          name: "Grand theft Auto V",
          console: "PC",
          image: "//i.imgur.com/Rz5sbypg.jpg",
          preco: "69.00",
          descricao: "Estudio: Rockstar Games",
          requisito: ["Processador: Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 4GHZ (8 CPUs),", "Memória: 8GB.", "Placa de Vídeo: NVIDIA GTX 660 2GB / AMD HD7870 2GB.", "Espaço no HD: 65GiB.", "Sistema Operacional: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1"],
        },
         {
          id: 4,
          name: "Fifa 19",
          console: "PS4",
          image: "//i.imgur.com/MQKn6xn.jpg",
          preco: "99.00",
          descricao: "Estudio: Electronic Arts, EA Sports",
          requisito: ["SO: Windows 7/8.1/10 (64-bit)","CPU: Intel Core i3-2100 @ 3.1GHz ou AMD Phenom II X4 965 @ 3.4 GHz","Placa Gráfica: NVIDIA GTX 460 1GB ou AMD Radeon R7 260","Memória: 8GB de memória RAM","Armazenamento: 50GB de espaço em disco","DirectX: 11.0"],
        },
         {
          id: 5,
          name: "Fifa 19",
          console: "Xbox",
          image: "//i.imgur.com/MlEbj8C.jpg",
          preco: "99.00",
          descricao: "Estudio: Electronic Arts, EA Sports",
          requisito: ["SO: Windows 7/8.1/10 (64-bit)","CPU: Intel Core i3-2100 @ 3.1GHz ou AMD Phenom II X4 965 @ 3.4 GHz","Placa Gráfica: NVIDIA GTX 460 1GB ou AMD Radeon R7 260","Memória: 8GB de memória RAM","Armazenamento: 50GB de espaço em disco","DirectX: 11.0"],
        },
         {
          id: 6,
          name: "Fifa 19",
          console: "PC",
          image: "//i.imgur.com/DwiiHiq.jpg",
          preco: "99.00",
          descricao: "Estudio: Electronic Arts, EA Sports",
          requisito: ["SO: Windows 7/8.1/10 (64-bit)","CPU: Intel Core i3-2100 @ 3.1GHz ou AMD Phenom II X4 965 @ 3.4 GHz","Placa Gráfica: NVIDIA GTX 460 1GB ou AMD Radeon R7 260","Memória: 8GB de memória RAM","Armazenamento: 50GB de espaço em disco","DirectX: 11.0"],
          },
         {
          id: 7,
          name: "Need For Speed: Payback",
          console: "PS4",
          image: "//i.imgur.com/q79BOu5.jpg",
          preco: "104.00",
          descricao: "Estudio: Electronic Arts, Ghost Games",
          requisito: ["Sistema operacional: Windows 7 ou posterior de 64 bits", "CPU: Intel i3 6300 de 3.8 GHz ou AMD FX 8150 de 3.6 GHz", "Memória RAM: 6 GB", "HD: 30 GB", "Placa de vídeo: GTX 750 Ti ou AMD Radeon HD 7850"],
        },
         {
          id: 8,
          name: "Need For Speed: Payback",
          console: "Xbox",
          image: "//i.imgur.com/FvfREpv.jpg",
          preco: "104.00",
          descricao: "Estudio: Electronic Arts, Ghost Games",
          requisito: ["Processador: Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 4GHZ (8 CPUs),", "Memória: 8GB.", "Placa de Vídeo: NVIDIA GTX 660 2GB / AMD HD7870 2GB.", "Espaço no HD: 65GiB.", "Sistema Operacional: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1"],
        },
         {
          id: 9,
          name: "Need For Speed: Payback",
          console: "PC",
          image: "//i.imgur.com/eSyJZu7.png",
          preco: "104.00",
          descricao: "Estudio: Electronic Arts, Ghost Games",
          requisito: ["Processador: Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 4GHZ (8 CPUs),", "Memória: 8GB.", "Placa de Vídeo: NVIDIA GTX 660 2GB / AMD HD7870 2GB.", "Espaço no HD: 65GiB.", "Sistema Operacional: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1"],
        },
        ]
      }
},
computed: {
    ...mapState({
    carrinho: 'carrinho'
    })
  },
methods:{
  voltar: function(){
    this.$router.go(-1)
  }
}
}
</script>
<style>
.card-img-top{
  text-align: center !important;
  margin: 0 auto;
  width: 300px !important;
}
</style>
