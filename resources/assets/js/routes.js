let routes = [
  {
  	path: '/',
  	component: resolve => require(['./components/views/Home.vue'], resolve),
    meta: {
      title: "Tanara"
    }
  },
  {
  	path: '/admin',
  	component: resolve => require(['./components/views/AdminHome.vue'], resolve),
  	meta: {
  	  title: "Admin",
      bodyClass: "admin-page"
  	}
  },
  {
    path: '/sign-in',
    component: resolve => require(['./components/views/SignIn.vue'], resolve),
    meta: {
      title: "Sign in",
      bodyClass: "auth-page"
    }
  },
  {
    path: '/sign-up',
    component: resolve => require(['./components/views/SignUp.vue'], resolve),
    meta: {
      title: "Sign up",
      bodyClass: "auth-page"
    }
  }
];

export default routes
