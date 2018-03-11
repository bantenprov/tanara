<template>
  <div>
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'settings.user-profile' }">Info</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'settings.user-password' }">Password</router-link>
      </li>
    </ul>
  </div>
</template>
