<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <router-link to="/my-component">Go to My Component</router-link>
    <br />
    <router-link to="/retry-request">Go to Retry Request Component</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>