<template>
  <div>
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'user.settings-profile' }">Info</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'user.settings-password' }">Password</router-link>
      </li>
    </ul>
  </div>
</template>
