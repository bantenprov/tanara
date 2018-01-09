<template>
  <nav class="navmenu navmenu-expand-md navmenu-dark bg-dark h-100 pt-0 border-top-0 border-right-0 border-left-0">
    <div class="navmenu-brand bg-info text-white py-4 d-flex flex-row flex-nowrap justify-content-start align-items-center">
      <router-link to="/admin"><img class="mr-3" src="/images/avatar.png" width="64" height="64" alt=""></router-link>
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
      <a class="nav-item nav-item-hover nav-link" href="#"><i class="fa fa-user mr-2" aria-hidden="true"></i> Profile</a>
        <a class="nav-item nav-item-hover nav-link d-flex align-items-center justify-content-between" href="#">
          <span>
            <i class="fa fa-bell mr-2" aria-hidden="true"></i>
            Notifications
          </span>
          <span class="badge badge-info">10</span>
        </a>
        <a class="nav-item nav-item-hover nav-link d-flex align-items-center justify-content-between" href="#">
          <span>
            <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
            Messages
          </span>
          <span class="badge badge-info">15</span>
        </a>
        <a class="nav-item nav-item-hover nav-link" href="#"><i class="fa fa-cogs mr-2" aria-hidden="true"></i> Settings</a>
        <a class="nav-item nav-item-hover nav-link" href="#"><i class="fa fa-sign-out mr-2" aria-hidden="true"></i> Sign out</a>
    </div>

    <div class="navmenu-divider"></div>

    <div class="navmenu-content navmenu-toggler">
      <button class="btn btn-secondary btn-block" type="button" data-toggle="collapse" data-target="#AdminSidebar" aria-controls="AdminSidebar" aria-expanded="false" aria-label="Toggle navigation">Toggle navigation</button>
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

      <h6 class="navmenu-header">Navs <small>(admin-menu.js)</small></h6>

      <div class="navmenu-nav">
        <template v-for="(item, index) in menuitems">
            <router-link class="nav-item nav-item-hover nav-link" :to="item.link">
              <i :class="item.icon + ' mr-2'" aria-hidden="true"></i>
              {{ item.name }}
            </router-link>
            <template v-if="item.child">
              <template v-for="child in item.child">
                <a class="nav-item nav-item-hover nav-link nav-link-collapse collapsed" href="javascript:void(0)" data-toggle="collapse" :data-target="'#AdminSideCollapse-' + index" aria-expanded="false" :aria-controls="'AdminSideCollapse-' + index">
                  <i :class="item.icon + ' mr-2'" aria-hidden="true"></i>
                  {{ item.name }}
                </a>
                <div class="collapse" :id="'AdminSideCollapse-' + index">
                  <div style="border-left: 4px solid #eee;">
                    <router-link class="nav-item nav-item-hover nav-link" :to="child.link">
                      <i :class="child.icon + ' mr-2'" aria-hidden="true"></i>
                      {{ child.name }}
                    </router-link>
                  </div>
                </div>
              </template>
            </template>
        </template>
      </div>

      <div class="navmenu-divider"></div>

      <h6 class="navmenu-header">Another Navs</h6>

      <div class="navmenu-nav">
        <a class="nav-item nav-item-hover nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#navmenuNavCollapseDemo01" aria-expanded="false" aria-controls="navmenuNavCollapseDemo01">
          <i class="fa fa-folder mr-2" aria-hidden="true"></i> Nav item collapse
        </a>
        <div class="collapse" id="navmenuNavCollapseDemo01">
          <div style="border-left: 4px solid #eee;">
            <a class="nav-item nav-link nav-link-sm small" href="#">Nav item</a>
            <a class="nav-item nav-link nav-link-sm small" href="#">Nav item again</a>
            <a class="nav-item nav-link nav-link-sm small" href="#">Another nav item</a>
          </div>
        </div>

        <div class="nav-item nav-item-hover dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navmenuDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-folder mr-2" aria-hidden="true"></i> Dropdown link
          </a>
          <div class="dropdown-menu" aria-labelledby="navmenuDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>

        <div class="nav-item nav-item-hover dropup">
          <a class="nav-link dropdown-toggle" href="#" id="navmenuDropupMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-folder mr-2" aria-hidden="true"></i> Dropup
          </a>
          <div class="dropdown-menu" aria-labelledby="navmenuDropupMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>

      <div class="navmenu-divider"></div>

      <h6 class="navmenu-header">Button</h6>
      <div class="navmenu-content d-flex flex-wrap flex-column">
        <div class="btn-group">
          <a class="btn btn-secondary w-100" href="#">Action 1</a>
          <a class="btn btn-secondary w-100" href="#">Action 2</a>
        </div>
      </div>

      <div class="navmenu-divider"></div>

      <h6 class="navmenu-header">Text</h6>
      <div class="navmenu-content">
        <p class="text-muted mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      </div>
    </div>
  </nav>
</template>

<script>
import AdminMenuItems from "../admin-menu.js";

export default {
  data() {
    return {
      menuitems: AdminMenuItems
    }
  }
}
</script>
