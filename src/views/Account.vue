<template>
  <div class="user">
      <user-list></user-list>
  </div>
</template>

<script>

import UserList from "../components/User/UserList";
export default {
  name: 'Account',
  components: {
    UserList
  }
}
</script>
