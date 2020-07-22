<template>
  <div class="admin">
      <admin-list></admin-list>
  </div>
</template>

<script>

import AdminList from "../components/Admin/AdminList";
export default {
  name: 'Admin',
  components: {
      AdminList,
  }
}
</script>
