<template>
  <div class="user">
      <role-list></role-list>
  </div>
</template>

<script>

import RoleList from "../components/Roles/RoleList";
export default {
  name: 'Account',
  components: {
    RoleList
  }
}
</script>
