<template>
  <div id="app">
    <div id="wrapper">
     <!-- START HEADER -->
    <header id="header" class="">
        <span class="logo fas fa-gamepad fa-7x" ><img src="#" alt="" /></span>
        <h1>Games Store: Unnamed</h1>
        <p>Jogos de qualidade e com preço que cabe no seu bolso</p>
    </header>
    <!-- END HEADER -->
     <!-- START NAV BAR -->
    <div class="menu">
      <b-navbar toggleable="lg" type="light" variant="light">
        <router-link to="/">
        <b-navbar-brand href="#home">
          <span class="fas fa-gamepad fa-1x"></span> GameStore: Unnamed
        </b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">
            <b-nav-item href="#home">
              <span class="fas fa-home"></span> Home
            </b-nav-item>
            </router-link>
            <router-link to="/pc">
            <b-nav-item href="#pc">
              <span class="fas fa-laptop"></span> PC
            </b-nav-item>
            </router-link>
            <router-link to="/ps4">
            <b-nav-item href="#ps4">
              <span class="fab fa-playstation"></span> PS4
            </b-nav-item>
            </router-link>
            <router-link to="/xbox">
            <b-nav-item href="#xbox">
              <span class="fab fa-xbox"></span> Xbox
            </b-nav-item>
            </router-link>
            <router-link to="/about">
            <b-nav-item href="#about">
              <span class="fas fa-info"></span> About
            </b-nav-item>
            </router-link>
            <router-link to="/contact">
            <b-nav-item href="#contact">
              <span class="fas fa-at"></span> Contact
            </b-nav-item>
            </router-link>
           
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="#">
                <span class="fas fa-shopping-cart"></span>
                Carrinho
                <b-badge variant="secondary">{{ this.$store.state.carrinho }}</b-badge>
              </b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <i class="fas fa-user-circle"></i>
                <em>&nbsp;User</em>
              </template>
              <b-dropdown-item href="#">
                <i class="fas fa-user"></i> Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="fas fa-sign-out-alt"></i> Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- END NAV BAR -->
     <!-- START SLIDER -->
    <div class="slidder">
      <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="4000"
        fade
        controls
        indicators
        
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="//i.imgur.com/NI0Bo8B.jpg"
          alt="image slot"
        ></b-carousel-slide>

        <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="//i.imgur.com/RXPLEbF.png"
          alt="image slot"
        ></b-carousel-slide>

        <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="//i.imgur.com/aLxRUR4.jpg"
          alt="image slot"
        ></b-carousel-slide>

      </b-carousel>
    </div>
    <!-- END SLIDER -->
    <router-view :Carrinho="carrinho" @Carrinho="carrinho = $event" :Qtde0="qtde0" @Qtde0="qtde0 = $event" :Qtde1="qtde1" @Qtde1="qtde1 = $event" :Qtde2="qtde2" @Qtde2="qtde2 = $event"/>

 <footer id="footer">
            <section>
                <h2>Aliquam sed mauris</h2>
                <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam
                    dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat
                    egestas velit, vitae tincidunt odio.</p>
                <ul class="actions">
                    <li><b-button variant="outline-light" size="sm">Learn More</b-button></li>
                </ul>
            </section>
            <section>
                <h2>Etiam feugiat</h2>
                <dl class="alt">
                    <dt>Address</dt>
                    <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                    <dt>Phone</dt>
                    <dd>(000) 000-0000 x 0000</dd>
                    <dt>Email</dt>
                    <dd><a href="#">information@unnamed.com.br</a></dd>
                </dl>
                <ul class="icons">
                    <li><a href="#" class="icon fa-twitter alt"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon fa-facebook alt"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon fa-instagram alt"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon fa-github alt"><span class="label">GitHub</span></a></li>
                    <li><a href="#" class="icon fa-dribbble alt"><span class="label">Dribbble</span></a></li>
                </ul>
            </section>
            <p class="copyright">&copy; Untitled. Design: Diego Gabriel Kachuba.</p>
        </footer>
    </div>
    </div>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
@import url("./assets/css/main.css");
.card-title{
  text-align: center;
}
.card-img-top{
  text-align: center !important;
  margin: 0 auto;
}
.navbar{
  border-radius: 4px !important;
  margin-top: 10px;
  margin-bottom: 10px;
}
.carousel-inner{
  border-radius: 4px !important;
  margin-bottom: 10px;
}

#header h1,#header span,#header p, #footer, #footer a{
  color: #ffff;
}
</style>

<script>
import axios from 'axios'
import config from './config/config'
export default {
   data() {
    return {
    sliding: null,
    }
   },
  methods: {
   onSlideStart() {
      this.sliding = true;
    },
  onSlideEnd() {
    this.sliding = false;
    },
  }
}
</script>

