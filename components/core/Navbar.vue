<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
          <img src="~/assets/img/logo1.png">
          </nuxt-link>
         

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="isOpen = !isOpen"
            v-bind:class="{'is-active': isOpen}"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" v-bind:class="{'is-active': isOpen}" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item" href>
              
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input input-header" type="text" placeholder="Search ...">
                  
                  <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                  </span>
                </p>
              </div>
            </div>
            <a class="navbar-item">Daftar Investasi</a>
            <a class="navbar-item">Tabungan</a>
            <a class="navbar-item">History</a>
          </div>

          <div class="navbar-end">
            <a class="navbar-item">
              <b-tooltip label="Tooltip bottom" position="is-bottom">
                <label class="saldo">2.000.000</label>
              </b-tooltip>
            </a>
            <div class="navbar-item has-dropdown is-hoverable hidden paddingleft20px">
              <div class="navbar-link not-down-arrow">
                <i class="fa fa-bell"></i>
                <span class="menu-responsive">Notifikasi</span>
              </div>
              <div class="navbar-dropdown menu-responsive-hidden is-right is-boxed">
                <a class="navbar-item is-bold" href="#">Hari Ini</a>

                <a class="navbar-item" href="#">
                  <div class="display-flex">
                    <!-- <img src="img/mitra.jpg"> -->
                    <div class="padding-left-10">
                      <p class="title is-6 no-bold">Telah Mendapatkan Tukang</p>
                      <p class="subtitle notif is-7">Selamat lakukan pembayaran secepetnya</p>
                    </div>
                  </div>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item" href="#">
                  <div class="display-flex">
                    <!-- <img src="img/mitra.jpg"> -->
                    <div class="padding-left-10">
                      <p class="title is-6 no-bold">Telah Mendapatkan Tukang</p>
                      <p class="subtitle notif is-7">Selamat lakukan pembayaran secepetnya</p>
                    </div>
                  </div>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item is-bold" href="#">Kemarin</a>

                <a class="navbar-item" href="#">
                  <div class="display-flex">
                    <!-- <img src="img/mitra.jpg"> -->
                    <div class="padding-left-10">
                      <p class="title is-6 no-bold">Telah Mendapatkan Tukang</p>
                      <p class="subtitle notif is-7">Selamat lakukan pembayaran secepetnya</p>
                    </div>
                  </div>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item" href="#">
                  <div class="display-flex">
                    <!-- <img src="img/mitra.jpg"> -->
                    <div class="padding-left-10">
                      <p class="title is-6 no-bold">Telah Mendapatkan Tukang</p>
                      <p class="subtitle notif is-7">Selamat lakukan pembayaran secepetnya</p>
                    </div>
                  </div>
                </a>
                <hr class="navbar-divider">

                <a class="navbar-item" href="#">
                  <p class="has-text-centered">Lihat Selengkapnya</p>
                </a>
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                <img class="cycle" src="http://static.setipe.com/images/Body_TipsFotoProfil03.jpg">
                <span class="menu-responsive"></span>
              </div>
              <div class="navbar-dropdown is-right is-boxed">
                <a class="navbar-item" href="profile.html">Profile</a>
                <a class="navbar-item" href="#">Message</a>
                <a class="navbar-item" href="#">Bantuan</a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="#">Peraturan</a>
                <a class="navbar-item is-active" href="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
import debounce from "lodash/debounce";
import axios from "axios";

export default {
  data() {
    return {
      isOpen: false,
      
    };
  },
};
</script>

<style>
/* Coba */
.height {
  height: 100px;
  background-color: #363636;
}

.navbar {
  height: 80px !important;
}
.input,
.taginput .taginput-container.is-focusable,
.textarea {
  background-color: white;
  border-color: #dbdbdb;
  color: #363636;
  box-shadow: none;
  height: 48px;
  max-width: 100%;
  width: 100%;
}
.input-header {
  width: 300px !important;
}
.cycle {
  border-radius: 50%;
}
.icon {
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 10px;
}
.not-down-arrow::after {
  border: none !important;
}
.not-down-arrow:not(.is-arrowless) {
  padding-right: 1rem;
}
.saldo {
  border-radius: 3px;
  font-size: 16px !important;
  color: rgb(0, 136, 32);
  padding: 7px 15px;
  background-color: #a1ffbf;
  border: 1px solid #0ad237;
}
.menu-responsive {
  display: none;
}

/* Media Screen */
@media only screen and (max-width: 1089px) {
  .navbar {
    height: 50px !important;
  }
}
@media only screen and (max-width: 1200px) {
  .input-header {
    width: 200px !important;
  }
}
@media only screen and (max-width: 720px) {
  .input-header {
    width: 100% !important;
  }
  .menu-responsive {
    display: inline;
  }
  .menu-responsive-hidden {
    display: none;
  }
}
</style>

