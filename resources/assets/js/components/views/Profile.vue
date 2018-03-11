<template>
  <div>

    <div class="card mb-3">
      <div class="card-header d-flex flex-row justify-content-between align-items-center">
        <span>Profile Info</span>
        <router-link class="btn btn-sm btn-primary ml-2" :to="{ name: 'settings.user-profile' }"><i class="fa fa-pencil-square-o fa-fw" aria-hidden="true"></i> Edit</router-link>
      </div>
      <div class="card-body">
        <div class="p-3 p-md-4 text-center mb-3">
          <img :src="user.photo_url" width="128" height="128" :alt="user.name">
        </div>
        <table class="table mb-0">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    user: 'authUser'
  })
}
</script>
