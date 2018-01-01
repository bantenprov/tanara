<nav class="navmenu navmenu-expand-md navmenu-light bg-light h-100 pt-0 border-top-0 border-left-0">
    <a class="navmenu-brand bg-info text-white" href="#">
        <img class="mr-2" src="{{ asset('images/avatar.png') }}" width="64" height="64" alt="">
        User
    </a>
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

        <h6 class="navmenu-header">Navs</h6>
        <div class="navmenu-nav">
            <a class="nav-item nav-item-hover nav-link" href="#"><i class="fa fa-folder mr-2" aria-hidden="true"></i> Nav item</a>
            <a class="nav-item nav-item-hover nav-link" href="#"><i class="fa fa-folder mr-2" aria-hidden="true"></i> Nav item again</a>
            <a class="nav-item nav-item-hover nav-link" href="#"><i class="fa fa-folder mr-2" aria-hidden="true"></i> Another nav item</a>

            <a class="nav-item nav-item-hover nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#navmenuNavCollapseDemo01" aria-expanded="false" aria-controls="navmenuNavCollapseDemo01">
              <i class="fa fa-folder mr-2" aria-hidden="true"></i> Nav item collapse
            </a>
            <div class="collapse" id="navmenuNavCollapseDemo01">
                <div style="border-left: 4px solid #333;">
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
