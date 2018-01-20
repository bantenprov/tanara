<template>
  <nav class="navmenu navmenu-expand-md navmenu-dark bg-dark h-100 pt-0 border-top-0 border-right-0 border-left-0">
    <div class="navmenu-brand bg-info text-white py-4 d-flex flex-row flex-nowrap justify-content-start align-items-center">
      <router-link to="/dashboard"><img class="mr-3" src="/images/avatar.png" width="64" height="64" alt=""></router-link>
      <div class="w-100">
        <span>User</span>
        <hr class="my-1">
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <a class="text-white" href="#">
              <i class="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-white" href="#">
              <i class="fa fa-book" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-white" href="#">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-white" href="#">
              <i class="fa fa-pencil-square" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-white" href="#">
              <i class="fa fa-cog" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navmenu-nav">
      <router-link class="nav-item nav-item-hover nav-link" to="/dashboard/home"><i class="fa fa-home mr-2" aria-hidden="true"></i> Home</router-link>
      <router-link class="nav-item nav-item-hover nav-link" to="/dashboard/profile"><i class="fa fa-user mr-2" aria-hidden="true"></i> Profile</router-link>
      <router-link class="nav-item nav-item-hover nav-link d-flex align-items-center justify-content-between" to="/dashboard/notifications">
        <span>
          <i class="fa fa-bell mr-2" aria-hidden="true"></i>
          Notifications
        </span>
        <span class="badge badge-info">10</span>
      </router-link>
      <router-link class="nav-item nav-item-hover nav-link d-flex align-items-center justify-content-between" to="/dashboard/messages">
        <span>
          <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
          Messages
        </span>
        <span class="badge badge-info">15</span>
      </router-link>
      <router-link class="nav-item nav-item-hover nav-link" to="/dashboard/settings"><i class="fa fa-cogs mr-2" aria-hidden="true"></i> Settings</router-link>
      <router-link class="nav-item nav-item-hover nav-link" to="/home"><i class="fa fa-sign-out mr-2" aria-hidden="true"></i> Sign out</router-link>
    </div><!-- /.navmenu-nav -->

    <div class="navmenu-divider"></div>

    <div class="navmenu-content navmenu-toggler">
      <button class="btn btn-outline-light btn-block" type="button" data-toggle="collapse" data-target="#AdminSidebar" aria-controls="AdminSidebar" aria-expanded="false" aria-label="Toggle navigation">Toggle navigation</button>
    </div>

    <div class="collapse navmenu-collapse" id="AdminSidebar">
      <div class="mt-3 mt-md-0"></div>

      <div class="navmenu-divider d-md-none"></div>

      <h6 class="navmenu-header">Form</h6>
      <div class="navmenu-content">
        <form>
          <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for...">
        </form>
      </div>

      <div class="navmenu-divider"></div>

      <h6 class="navmenu-header">Features</h6>

      <div class="navmenu-nav">
        <template v-for="(item, index) in menuitems">
            <router-link v-if="!item.childType && !item.childItem" class="nav-item nav-item-hover nav-link" :to="item.link">
              <i :class="item.icon + ' mr-2'" aria-hidden="true"></i>
              {{ item.name }}
            </router-link>
            <template v-if="item.childType && item.childItem">
              <template v-if="item.childType == 'collapse'">
                <a class="nav-item nav-item-hover nav-link nav-link-collapse collapsed" href="javascript:void(0)" data-toggle="collapse" :data-target="'#NavmenuNavSidebarCollapse-' + index" aria-expanded="false" :aria-controls="'NavmenuNavSidebarCollapse-' + index">
                  <span>
                    <i :class="item.icon + ' mr-2'" aria-hidden="true"></i>
                    {{ item.name }}
                  </span>
                </a>
                <div class="collapse" :id="'NavmenuNavSidebarCollapse-' + index">
                  <div style="border-left: 4px solid #eee;">
                    <template v-for="child in item.childItem">
                      <router-link class="nav-item nav-link nav-link-sm small" :to="child.link">
                        <i :class="child.icon + ' mr-2'" aria-hidden="true"></i>
                        {{ child.name }}
                      </router-link>
                    </template>
                  </div>
                </div>
              </template>
              <template v-if="item.childType == 'dropdown'">
                <div class="nav-item nav-item-hover dropdown">
                  <a class="nav-link dropdown-toggle" href="javascript:void(0)" :id="'NavmenuNavSidebarDropdown-' + index" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i :class="item.icon + ' mr-2'" aria-hidden="true"></i>
                    {{ item.name }}
                  </a>
                  <div class="dropdown-menu" :aria-labelledby="'NavmenuNavSidebarDropdown-' + index">
                    <template v-for="child in item.childItem">
                      <router-link class="dropdown-item" :to="child.link">
                        <i :class="child.icon + ' mr-2'" aria-hidden="true"></i>
                        {{ child.name }}
                      </router-link>
                    </template>
                  </div>
                </div>
              </template>
              <template v-if="item.childType == 'dropup'">
                <div class="nav-item nav-item-hover dropup">
                  <a class="nav-link dropdown-toggle" href="javascript:void(0)" :id="'NavmenuNavSidebarDropup-' + index" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i :class="item.icon + ' mr-2'" aria-hidden="true"></i>
                    {{ item.name }}
                  </a>
                  <div class="dropdown-menu" :aria-labelledby="'NavmenuNavSidebarDropup-' + index">
                    <template v-for="child in item.childItem">
                      <router-link class="dropdown-item" :to="child.link">
                        <i :class="child.icon + ' mr-2'" aria-hidden="true"></i>
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

      <h6 class="navmenu-header">Navs <small>(HTML)</small></h6>

      <div class="navmenu-nav">
        <a class="nav-item nav-item-hover nav-link" href="#">
          <i class="fa fa-folder mr-2" aria-hidden="true"></i> Nav item
        </a>

        <a class="nav-item nav-item-hover nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#NavmenuNavCollapseDemo01" aria-expanded="false" aria-controls="NavmenuNavCollapseDemo01">
          <span>
            <i class="fa fa-folder mr-2" aria-hidden="true"></i> Nav item collapse
          </span>
        </a>
        <div class="collapse" id="NavmenuNavCollapseDemo01">
          <div style="border-left: 4px solid #eee;">
            <a class="nav-item nav-link nav-link-sm small" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Nav item</a>
            <a class="nav-item nav-link nav-link-sm small" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Nav item again</a>
            <a class="nav-item nav-link nav-link-sm small" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Another nav item</a>
          </div>
        </div>

        <div class="nav-item nav-item-hover dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="NavmenuNavDropdownDemo01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-folder mr-2" aria-hidden="true"></i> Dropdown link
          </a>
          <div class="dropdown-menu" aria-labelledby="NavmenuNavDropdownDemo01">
            <a class="dropdown-item" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Action</a>
            <a class="dropdown-item" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Another action</a>
            <a class="dropdown-item" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Something else here</a>
          </div>
        </div>

        <div class="nav-item nav-item-hover dropup">
          <a class="nav-link dropdown-toggle" href="#" id="NavmenuNavDropupDemo01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-folder mr-2" aria-hidden="true"></i> Dropup
          </a>
          <div class="dropdown-menu" aria-labelledby="NavmenuNavDropupDemo01">
            <a class="dropdown-item" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Action</a>
            <a class="dropdown-item" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Another action</a>
            <a class="dropdown-item" href="#"><i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i> Something else here</a>
          </div>
        </div>
      </div><!-- /.navmenu-nav -->

      <div class="navmenu-divider"></div>

      <h6 class="navmenu-header">Button</h6>
      <div class="navmenu-content d-flex flex-wrap flex-column">
        <div class="btn-group">
          <a class="btn btn-secondary w-100" href="#">Action One</a>
          <a class="btn btn-secondary w-100" href="#">Action Two</a>
        </div>
      </div>

      <div class="navmenu-divider"></div>

      <h6 class="navmenu-header">Text</h6>
      <div class="navmenu-content">
        <blockquote class="blockquote text-white mb-0">
          <p class="small mb-0">Ideas are cheap, execution is everything.</p>
          <footer class="blockquote-footer text-light">Chris Sacca</footer>
        </blockquote>
      </div>
    </div><!-- /.navmenu-collapse -->
  </nav>
</template>

<script>
import DashboardMenuItems from "../DashboardMenu.js";

export default {
  data() {
    return {
      menuitems: DashboardMenuItems
    }
  }
}
</script>
