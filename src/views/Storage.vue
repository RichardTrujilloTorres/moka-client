<template>
  <div class="storage">
              <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                      <v-btn
                              color="primary"
                              dark
                              medium
                              fab
                              bottom
                              fixed
                              v-bind="attrs"
                              v-on="on"
                              @click="onStatsGeneration"
                      >
                          <v-icon>mdi-reload</v-icon>
                      </v-btn>
                  </template>
                  <span>Regenerate the stats</span>
              </v-tooltip>
      <storage-list></storage-list>
  </div>
</template>

<script>

import StorageList from "../components/Storage/StorageList";
import {mapActions} from "vuex";
import {MessageService} from "../resources/services/message.service";
export default {
  name: 'Storage',
  components: {
    StorageList
  },
    methods: {
      ...mapActions({
          regenerate: 'storage/regenerate',
      }),
      onStatsGeneration() {
          const messageService = new MessageService(this);
          console.log('job running...')

          this.regenerate().then(res => {
              messageService.success(res.message);
          })
          .catch(err => {
              messageService.error(err.response.data.message);
              console.log(err)
          })
      },
    },
}
</script>
