<template>
  <div>
    <section
      class="hero is-gradient is-fullheight"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/background.svg') + ')',backgroundSize:'cover ',backgroundRepeat:'no-repeat' }"
    >
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="~/assets/img/logo2.svg" alt>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item has-text-white">Home</a>
                <a class="navbar-item has-text-white">Examples</a>
                <a class="navbar-item has-text-white">Documentation</a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span>Sign Up</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column justified-center">
              <h1 class="title has-text-white is-spaced">
                Rencanakan Investasi
                <br>dari Sekarang untuk Masa Depan
              </h1>
              <h2 class="subtitle is-6 has-text-white">
                <ul class="a">
                  <li>Mudah mencari investasi</li>
                  <li>Keuntungan sangat memuaskan</li>
                  <li>Sangatlah mudah</li>
                </ul>
              </h2>
              <a class="button is-danger is-inverted is-outlined is-rounded">Invest Sekarang</a>
            </div>
            <div class="column">
              <img src="~/assets/img/illustration/hero.png" alt>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
    </section>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column 4">
              <img class="img-section" src="~/assets/img/section1.png" alt>
            </div>
            <div class="column is-1"></div>
            <div class="column is-7 center-column">

              <p class="title is-4 ">
                Rencanakan Masa Depan
                <br>Kalian Bersama Simavest
              </p>
              <p class="subtitle is-6">
                <ul class="a">
                  <li class="padding-top-bottom">Tabungan Impian, dekatlah di depan mata impianmu</li>
                  <li class="padding-top-bottom">Investasi berbagai macam asets dan emas</li>
                  <li class="padding-top-bottom">Kunci kebutuhan anda sehingga terkontrol segala pembayaran</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="hero ">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered">
            <h1 class="title is-4 margin-bottom-50">
            Langkah Yang Sangat Mudah
          </h1>
          </div>
          
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column 5">
              <img class="img-section" src="~/assets/img/section2.png" alt>
            </div>
            
            <div class="column is-5 center-column">

              <p class="title is-spaced is-4 has-text-warning ">
               Cari investasi yang Cocok
              </p>
              <p class="subtitle is-6 is-line has-text-grey">
                Di Simavest kamu bisa mencari investasi yang sesuai <br>
                 dengan kondisi keuangan. Mulai dari investasu <br> 
                 properti maupun investasi emas

              </p>
            </div>
            <div class="column is-1"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero ">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered ">
            
          </div>
          
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-5 center-column">

              <p class="title is-spaced is-4 has-text-warning ">
               Perancangan
              </p>
              <p class="subtitle is-6 is-line has-text-grey">
                Ayo mulai rencanakan financial masa depanmu dengan <br> cara berinvestasi di Simavest

              </p>
            </div>
            <div class="column 5">
              <img class="img-section" src="~/assets/img/section3.png" alt>
            </div>
            <div class="column is-1"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero ">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered">
            
          </div>
          
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column 5">
              <img class="img-section" src="~/assets/img/section4.png" alt>
            </div>
            
            <div class="column is-5 center-column">

              <p class="title is-spaced is-4 has-text-warning ">
               Pembagian Hasil
              </p>
              <p class="subtitle is-6 is-line has-text-grey">
                Tak perlu khawatir hasil inestasi akan <br> dibagi sesuai perjanjian yang telah dibuat.

              </p>
            </div>
            <div class="column is-1"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-hitam">
      <div class="hero-body">
        <div class="container">
          <img  src="~/assets/img/footer.svg" alt>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BLogo from "@/components/Logo";

export default {
  transition: "fade",
  name: "HomePage",
  layout: "home"
};
</script>

<style>
.margin-bottom-50{
  margin-bottom: 100px;
}
.navbar-item:hover {
  background-color: transparent !important;
}
.is-line{
  line-height: 1.7;
}
.is-hitam{
  background-color: #31394F;
}
.justified-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
ul.a {
  padding-top: 10px;
  padding-bottom: 10px;
  list-style-type: circle;
  padding-left: 35px;
}

.padding-top-bottom{
  padding-top: 10px;
  padding-bottom: 10px;
}
.button {
  max-width: 200px;
}
.navbar-item:active {
  background-color: transparent !important;
}
</style>
