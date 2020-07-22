<template>
  <div class="user">
      <h1>Resources History</h1>

      <br/>

      <change-list></change-list>
  </div>
</template>

<script>

import ChangeList from "./History/ChangeList";
export default {
  name: 'History',
  components: {
      ChangeList,
  }
}
</script>
