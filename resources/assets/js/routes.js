let routes = [
  {
  	path: '/',
    redirect: '/home',
    component: resolve => require(['./components/views/Home.vue'], resolve),
    children: [
      {
        path: '/home',
      	component: resolve => require(['./components/views/Home.vue'], resolve),
        meta: {
          title: "Tanara"
        }
      }
    ]
  },
  {
  	path: '/dashboard',
    redirect: '/dashboard/home',
  	component: resolve => require(['./DashboardLayout.vue'], resolve),
    children: [
      {
        path: '/dashboard/home',
        component: resolve => require(['./components/views/DashboardHome.vue'], resolve),
        meta: {
          title: "Dashboard"
        }
      },
      {
        path: '/dashboard/profile',
        component: resolve => require(['./components/views/DashboardProfile.vue'], resolve),
        meta: {
          title: "Profile"
        }
      },
      {
        path: '/dashboard/notifications',
        component: resolve => require(['./components/views/DashboardNotifications.vue'], resolve),
        meta: {
          title: "Notifications"
        }
      },
      {
        path: '/dashboard/messages',
        component: resolve => require(['./components/views/DashboardMessages.vue'], resolve),
        meta: {
          title: "Messages"
        }
      },
      {
        path: '/dashboard/settings',
        component: resolve => require(['./components/views/DashboardSettings.vue'], resolve),
        meta: {
          title: "Settings"
        }
      },
      {
        path: '/dashboard/demo-chartjs',
        component: resolve => require(['./components/views/ChartjsDemo.vue'], resolve),
        meta: {
          title: "Chartjs"
        }
      },
      {
        path: '/dashboard/demo-echarts',
        component: resolve => require(['./components/views/EchartsDemo.vue'], resolve),
        meta: {
          title: "ECharts"
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
  }
];

export default routes
