<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="~/assets/img/logo1.png">
          </a>

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
            
       
            

            <div class="navbar-item has-dropdown is-hoverable hidden paddingleft20px">
              <div class="navbar-link not-down-arrow ">
                <i class="fa fa-bell"></i>
                <span class="menu-responsive"></span>
              </div>
              <div class="navbar-dropdown is-right is-boxed">
                <a class="navbar-item is-bold" href="#">Hari Ini</a>

                <a class="navbar-item" href="#">
                  <div class="display-flex">
                    <img src="img/mitra.jpg">
                    <div class="padding-left-10">
                      <p class="title is-6 no-bold">Telah Mendapatkan Tukang</p>
                      <p class="subtitle notif is-7">Selamat lakukan pembayaran secepetnya</p>
                    </div>
                  </div>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item" href="#">
                  <div class="display-flex">
                    <img src="img/mitra.jpg">
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
                    <img src="img/mitra.jpg">
                    <div class="padding-left-10">
                      <p class="title is-6 no-bold">Telah Mendapatkan Tukang</p>
                      <p class="subtitle notif is-7">Selamat lakukan pembayaran secepetnya</p>
                    </div>
                  </div>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item" href="#">
                  <div class="display-flex">
                    <img src="img/mitra.jpg">
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
export default {
  data: function() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
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
.input-header {
  width: 400px !important;
}
</style>

