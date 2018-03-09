<template>
  <nav class="site-navbar navbar navbar-expand-md navbar-dark flex-md-nowrap p-0">
    <router-link class="navbar-brand col-md-4 col-lg-3 mr-0 d-flex flex-row align-items-center text-uppercase" :to="{ name: 'home' }" exact>
      <img class="mr-2" src="/images/logo.png" width="36" height="36">
      <span>Tanara</span>
    </router-link>

    <div class="btn-group d-none d-md-inline-flex mx-3" role="group">
      <button class="btn btn-dark" type="button" v-on:click="toggleSidebar"><i class="fa fa-exchange" aria-hidden="true"></i></button>
      <button class="btn btn-dark" type="button" v-on:click="toggleFullscreen"><i class="fa fa-arrows-alt" aria-hidden="true"></i></button>
    </div>

    <ul class="navbar-nav d-none d-md-block px-3 ml-auto">
      <li v-if="user" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img :src="user.photo_url" width="20" height="20" alt=""> {{ user.name }}
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <router-link class="dropdown-item" :to="{ name: 'user.profile' }"><i class="fa fa-user fa-fw" aria-hidden="true"></i> Profile</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" :to="{ name: 'user.settings' }"><i class="fa fa-cogs fa-fw" aria-hidden="true"></i> Settings</router-link>
          <div class="dropdown-divider"></div>
          <a @click.prevent="logout" class="dropdown-item pl-3" href="#">
            <i class="fa fa-sign-out fa-fw" aria-hidden="true"></i> Logout
          </a>
        </div>
      </li>
      <!-- Guest -->
      <template v-else>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-user-circle fa-fw" aria-hidden="true"></i> User
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" :to="{ name: 'login' }"><i class="fa fa-sign-in fa-fw" aria-hidden="true"></i> Log In</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" :to="{ name: 'register' }"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> Register</router-link>
          </div>
        </li>
      </template>
    </ul>

  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
    toggleSidebar: function (event) {
      var sidebar = document.querySelector('.site-sidebar');
      var main = document.querySelector('.site-main');

      sidebar.classList.toggle('d-none');

      main.classList.toggle('col-md-8');
      main.classList.toggle('col-lg-9');
      main.classList.toggle('col-12');
    },
    toggleFullscreen: function (event) {
      var elem = document.documentElement;
      if (
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
        if(!this.isFullscreen) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
            this.isFullscreen = true;
            return;
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
            this.isFullscreen = true;
            return;
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
            this.isFullscreen = true;
            return;
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
            this.isFullscreen = true;
            return;
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
            this.isFullscreen = false;
            return;
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            this.isFullscreen = false;
            return;
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            this.isFullscreen = false;
            return;
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            this.isFullscreen = false;
            return;
          }
        };
      }
    }
  }
}
</script>
