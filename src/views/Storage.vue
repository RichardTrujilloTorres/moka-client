<template>
  <div class="storage">
      <storage-list></storage-list>
  </div>
</template>

<script>

import StorageList from "../components/Storage/StorageList";
export default {
  name: 'Storage',
  components: {
    StorageList
  }
}
</script>
