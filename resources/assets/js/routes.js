function layout(name) {
  return function(resolve) {
    require(['./layouts/' + name + '.vue'], resolve);
  }
}

let routes = [
  {
  	path: '/',
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
    component: resolve => require(['./components/views/SignIn.vue'], resolve),
    meta: {
      title: "Sign in"
    }
  },
  {
    path: '/sign-up',
    component: resolve => require(['./components/views/SignUp.vue'], resolve),
    meta: {
      title: "Sign up"
    }
  },
  {
    path: '/user',
    redirect: '/user/profile',
    component: layout('Default'),
    children: [
      {
        path: '/user/profile',
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
        path: '/user/notifications',
        components: {
          main: resolve => require(['./components/views/UserNotifications.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Notifications"
        }
      },
      {
        path: '/user/messages',
        components: {
          main: resolve => require(['./components/views/UserMessages.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Messages"
        }
      },
      {
        path: '/user/change-password',
        components: {
          main: resolve => require(['./components/views/UserChangePassword.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Change Password"
        }
      },
      {
        path: '/user/settings',
        components: {
          main: resolve => require(['./components/views/UserSettings.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Settings"
        }
      }
    ]
  },
  {
  	path: '/dashboard',
    redirect: '/dashboard/home',
  	component: layout('Default'),
    children: [
      {
        path: '/dashboard/home',
        components: {
          main: resolve => require(['./components/views/DashboardHome.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Dashboard Home"
        }
      },
      {
        path: '/dashboard/entity',
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
    redirect: '/admin/dashboard/home',
    component: layout('Default'),
    children: [
      {
        path: '/admin/dashboard/home',
        components: {
          main: resolve => require(['./components/views/AdminDashboardHome.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Dashboard Home"
        }
      },
      {
        path: '/admin/contents',
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
    redirect: '/demo/vue-form',
    component: layout('Default'),
    children: [
      {
        path: '/demo/vue-form',
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
        path: '/demo/vue-form-wizard',
        components: {
          main: resolve => require(['./components/views/DemoVueFormWizard.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue form"
        }
      },
      {
        path: '/demo/vue-form-wizard',
        components: {
          main: resolve => require(['./components/views/DemoVueFormWizard.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue form"
        }
      },
      {
        path: '/demo/vue-select',
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
        components: {
          main: resolve => require(['./components/views/DemoMiniToastr.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Mini toastr"
        }
      }
    ]
  },
];

export default routes
