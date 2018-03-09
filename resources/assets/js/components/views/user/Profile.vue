<template>
  <div>

    <p>Photo: <code>{{ user.photo_url }}</code></p>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    user: 'authUser',
    authenticated: 'authCheck'
  })
}
</script>
