<template>
  <nav class="site-navmenu navmenu navmenu-expand-md navmenu-dark bg-dark h-100 pt-0 pt-md-3 border-top-0 border-right-0 border-left-0">

    <div v-if="user" class="d-md-none">
      <div class="navmenu-brand text-white py-4 d-flex flex-row flex-nowrap justify-content-start align-items-center" style="background-color: rgba(0,0,0,.1);">
        <router-link :to="{ name: 'user.profile' }"><img class="mr-3" :src="user.photo_url" width="64" height="64" alt=""></router-link>
        <div class="w-100">
          <span>{{ user.name }}</span>
          <hr class="my-1" style="background-color: rgba(255,255,255,.1);">
          <ul class="list-inline small mb-0">
            <li class="list-inline-item">
              <a @click.prevent="logout" class="text-white" href="#">
                <i class="fa fa-sign-out fa-fw" aria-hidden="true"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="navmenu-nav">
        <router-link class="nav-item nav-item-hover nav-link" :to="{ name: 'profile' }"><i class="fa fa-user fa-fw" aria-hidden="true"></i> Profile</router-link>
        <router-link class="nav-item nav-item-hover nav-link" :to="{ name: 'settings' }"><i class="fa fa-cogs fa-fw" aria-hidden="true"></i> Settings</router-link>
      </div><!-- /.navmenu-nav -->

      <div class="navmenu-divider"></div>
    </div>

    <div class="navmenu-content navmenu-toggler" v-bind:class="[!user ? 'pt-3' : '']">
      <button class="btn btn-outline-light btn-block" type="button" data-toggle="collapse" data-target="#AdminSidebar" aria-controls="AdminSidebar" aria-expanded="false" aria-label="Toggle navigation">Toggle navigation</button>
    </div>

    <div class="collapse navmenu-collapse" id="AdminSidebar">
      <div class="mt-3 mt-md-0"></div>

      <div class="navmenu-divider d-md-none"></div>

      <div class="navmenu-nav">
        <template v-for="(item, index) in menuitems">
            <router-link v-if="!item.childType && !item.childItem" class="nav-item nav-item-hover nav-link" :to="item.link" exact>
              <i :class="item.icon + ' fa-fw'" aria-hidden="true"></i>
              {{ item.name }}
            </router-link>
            <template v-if="item.childType && item.childItem">
              <template v-if="item.childType == 'collapse'">
                <a class="nav-item nav-item-hover nav-link nav-link-collapse collapsed" href="javascript:void(0)" data-toggle="collapse" :data-target="'#NavmenuNavSidebarCollapse-' + index" aria-expanded="false" :aria-controls="'NavmenuNavSidebarCollapse-' + index">
                  <span>
                    <i :class="item.icon + ' fa-fw'" aria-hidden="true"></i>
                    {{ item.name }}
                  </span>
                </a>
                <div class="collapse" :id="'NavmenuNavSidebarCollapse-' + index">
                  <div class="py-3" style="background-color: rgba(0,0,0,.25); border-left: 4px solid rgba(255,255,255,.45);">
                    <template v-for="(child, i) in item.childItem">
                      <router-link v-if="!child.child" class="nav-item nav-link nav-link-sm small" :to="child.link" exact>
                        <i :class="child.icon + ' fa-fw'" aria-hidden="true"></i>
                        {{ child.name }}
                      </router-link>
                      <!---->
                      <template v-if="child.child">
                        <a class="nav-item nav-link nav-link-sm small nav-link-collapse nav-link-collapse-small collapsed" href="javascript:void(0)" data-toggle="collapse" :data-target="'#NavmenuNavSidebarCollapse-' + index + '-' + i" aria-expanded="false" :aria-controls="'NavmenuNavSidebarCollapse-' + index + '-' + i">
                          <span>
                            <i :class="child.icon + ' fa-fw'" aria-hidden="true"></i>
                            {{ child.name }}
                          </span>
                        </a>
                        <div class="collapse" :id="'NavmenuNavSidebarCollapse-' + index + '-' + i">
                          <div>
                            <template v-for="child2 in child.child">
                              <router-link class="nav-item nav-link nav-link-sm small pl-5" :to="child2.link" exact>
                                <i :class="child2.icon + ' fa-fw'" aria-hidden="true"></i>
                                {{ child2.name }}
                              </router-link>
                            </template>
                          </div>
                        </div>
                      </template>
                      <!---->
                    </template>
                  </div>
                </div>
              </template>
              <template v-if="item.childType == 'dropdown'">
                <div class="nav-item nav-item-hover dropdown">
                  <a class="nav-link dropdown-toggle" href="javascript:void(0)" :id="'NavmenuNavSidebarDropdown-' + index" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i :class="item.icon + ' fa-fw'" aria-hidden="true"></i>
                    {{ item.name }}
                  </a>
                  <div class="dropdown-menu" :aria-labelledby="'NavmenuNavSidebarDropdown-' + index">
                    <template v-for="child in item.childItem">
                      <router-link class="dropdown-item" :to="child.link" exact>
                        <i :class="child.icon + ' fa-fw'" aria-hidden="true"></i>
                        {{ child.name }}
                      </router-link>
                    </template>
                  </div>
                </div>
              </template>
              <template v-if="item.childType == 'dropup'">
                <div class="nav-item nav-item-hover dropup">
                  <a class="nav-link dropdown-toggle" href="javascript:void(0)" :id="'NavmenuNavSidebarDropup-' + index" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i :class="item.icon + ' fa-fw'" aria-hidden="true"></i>
                    {{ item.name }}
                  </a>
                  <div class="dropdown-menu" :aria-labelledby="'NavmenuNavSidebarDropup-' + index">
                    <template v-for="child in item.childItem">
                      <router-link class="dropdown-item" :to="child.link" exact>
                        <i :class="child.icon + ' fa-fw'" aria-hidden="true"></i>
                        {{ child.name }}
                      </router-link>
                    </template>
                  </div>
                </div>
              </template>
            </template>
        </template>
      </div><!-- /.navmenu-nav -->

      <div class="navmenu-divider"></div>

      <h6 class="navmenu-header">Text</h6>
      <div class="navmenu-content">
        <blockquote class="blockquote text-muted mb-0">
          <p class="small mb-0">Ideas are cheap, execution is everything.</p>
          <footer class="blockquote-footer text-muted">Chris Sacca</footer>
        </blockquote>
      </div>
    </div><!-- /.navmenu-collapse -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuItems from '../menu.js';

export default {
  data() {
    return {
      menuitems: MenuItems
    }
  },
  computed: mapGetters({
    user: 'authUser',
    authenticated: 'authCheck'
  }),
  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
