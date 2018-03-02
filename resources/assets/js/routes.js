function layout(name) {
  return function(resolve) {
    require(['./layouts/' + name + '.vue'], resolve);
  }
}

let routes = [
  {
  	path: '/',
    name: 'home',
    component: resolve => require(['./components/views/Home.vue'], resolve),
    children: [
      {
        path: '/',
      	component: resolve => require(['./components/views/Home.vue'], resolve),
        meta: {
          title: "Tanara"
        }
      }
    ]
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: resolve => require(['./components/views/SignIn.vue'], resolve),
    meta: {
      title: "Sign in"
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: resolve => require(['./components/views/SignUp.vue'], resolve),
    meta: {
      title: "Sign up"
    }
  },
  {
    path: '/user',
    name: 'user',
    redirect: '/user/profile',
    component: layout('Default'),
    children: [
      {
        path: '/user/profile',
        name: 'user.profile',
        components: {
          main: resolve => require(['./components/views/UserProfile.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Profile"
        }
      },
      {
        path: '/user/settings',
        name: 'user.settings',
        redirect: '/user/settings/profile',
      },
      {
        path: '/user/settings/profile',
        name: 'user.settings-profile',
        components: {
          main: resolve => require(['./components/views/UserSettingsProfile.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Settings - Profile"
        }
      },
      {
        path: '/user/settings/password',
        name: 'user.settings-password',
        components: {
          main: resolve => require(['./components/views/UserSettingsPassword.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Settings - Password"
        }
      },
    ]
  },
  {
  	path: '/dashboard',
  	component: layout('Default'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        components: {
          main: resolve => require(['./components/views/Dashboard.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Dashboard"
        }
      },
      {
        path: '/dashboard/entity',
        name: 'dashboard.entity',
        components: {
          main: resolve => require(['./components/views/DashboardEntity.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Dashboard Entity"
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/dashboard',
    component: layout('Default'),
    children: [
      {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        components: {
          main: resolve => require(['./components/views/AdminDashboard.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Admin Dashboard"
        }
      },
      {
        path: '/admin/contents',
        name: 'admin.contents',
        components: {
          main: resolve => require(['./components/views/AdminContents.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Contents"
        }
      },
      {
        path: '/admin/configurations',
        name: 'admin.configurations',
        components: {
          main: resolve => require(['./components/views/AdminConfigurations.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Configurations"
        }
      },
      {
        path: '/admin/reports',
        name: 'admin.reports',
        components: {
          main: resolve => require(['./components/views/AdminReports.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Reports"
        }
      },
      {
        path: '/admin/reports/system-reports',
        name: 'admin.system-reports',
        components: {
          main: resolve => require(['./components/views/AdminSystemReports.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "System Reports"
        }
      },
      {
        path: '/admin/reports/system-logs',
        name: 'admin.system-logs',
        components: {
          main: resolve => require(['./components/views/AdminSystemLogs.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "System Logs"
        }
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    redirect: '/demo/vue-form',
    component: layout('Default'),
    children: [
      {
        path: '/demo/vue-form',
        name: 'demo.vue-form',
        components: {
          main: resolve => require(['./components/views/DemoVueForm.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue form"
        }
      },
      {
        path: '/demo/vue-select',
        name: 'demo.vue-select',
        components: {
          main: resolve => require(['./components/views/DemoVueSelect.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue select"
        }
      },
      {
        path: '/demo/vue-datepicker',
        name: 'demo.vue-datepicker',
        components: {
          main: resolve => require(['./components/views/DemoVueDatepicker.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue date picker"
        }
      },
      {
        path: '/demo/vue-chartjs',
        name: 'demo.vue-chartjs',
        components: {
          main: resolve => require(['./components/views/DemoVueChartjs.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue Chart.js"
        }
      },
      {
        path: '/demo/vue-echarts',
        name: 'demo.vue-echarts',
        components: {
          main: resolve => require(['./components/views/DemoVueEcharts.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue ECharts"
        }
      },
      {
        path: '/demo/vue-tables',
        name: 'demo.vue-tables',
        components: {
          main: resolve => require(['./components/views/DemoVueTables.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue tables"
        }
      },
      {
        path: '/demo/vue-table',
        name: 'demo.vue-table',
        components: {
          main: resolve => require(['./components/views/DemoVueTable.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue table"
        }
      },
      {
        path: '/demo/mini-toastr',
        name: 'demo.mini-toastr',
        components: {
          main: resolve => require(['./components/views/DemoMiniToastr.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Mini toastr"
        }
      },
      {
        path: '/demo/vue-sweetalert',
        name: 'demo.sweetalert',
        components: {
          main: resolve => require(['./components/views/DemoVueSweetalert.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue Sweetalert"
        }
      },
      {
        path: '/demo/vue-fullscreen',
        name: 'demo.fullscreen',
        components: {
          main: resolve => require(['./components/views/DemoVueFullscreen.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue Fullscreen"
        }
      }
    ]
  },
];

export default routes
