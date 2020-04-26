<template>
  <div class="user">
      <user-detail></user-detail>
  </div>
</template>

<script>

import UserDetail from "../components/User/UserDetail";
export default {
  name: 'Account',
  components: {
    UserDetail,
  }
}
</script>
