<template>
  <div class="user">
      <h1>Resources History</h1>

      <br/>

      <v-tabs>
          <v-tab @click="resource = 'user'">Account</v-tab>
          <v-tab @click="resource = 'role'">Role</v-tab>
          <v-tab @click="resource = 'permission'">Permission</v-tab>
      </v-tabs>

      <change-list :resource="resource"></change-list>
  </div>
</template>

<script>

import ChangeList from "./History/ChangeList";
export default {
  name: 'History',
  components: {
      ChangeList,
  },
    data: () => ({
        resource: 'user',
    }),
}
</script>
