<template>
  <div class="permission">
      <permission-list></permission-list>
  </div>
</template>

<script>

import PermissionList from "../components/Permissions/PermissionList";
export default {
  name: 'Permission',
  components: {
    PermissionList
  }
}
</script>
