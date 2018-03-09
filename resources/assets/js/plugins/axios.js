import axios from 'axios'
import store from '~/store'
import router from '~/router'

// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    console.log('kode error 500');
//--//    this.$swal({
//--//      type: 'error',
//--//      title: 'Oops...',
//--//      text: 'Something went wrong! Please try again.',
//--//      reverseButtons: true,
//--//      confirmButtonText: 'Ok',
//--//      cancelButtonText: 'Cancel'
//--//    })
  }

  if (status === 401 && store.getters['auth/check']) {
    console.log('kode error 401')
    .then(async () => {
      await store.dispatch('auth/logout')

      router.push({ name: 'login' })
    })
//--//    this.$swal({
//--//      type: 'warning',
//--//      title: 'Session Expired!',
//--//      text: 'Please log in again to continue.',
//--//      reverseButtons: true,
//--//      confirmButtonText: 'Ok',
//--//      cancelButtonText: 'Cancel'
//--//    }).then(async () => {
//--//      await store.dispatch('auth/logout')

//--//      router.push({ name: 'login' })
//--//    })
  }

  return Promise.reject(error)
})
