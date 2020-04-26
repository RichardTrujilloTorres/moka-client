<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
              <v-card
                      v-if="user"
                      class="mx-auto"
                      max-width="434"
                      tile
              >
                <v-img
                        height="100%"
                        src="/images/backgrounds/blur-bokeh-bright.jpg"
                >
                  <v-row
                          align="end"
                          class="fill-height"
                  >
                    <v-col
                            align-self="start"
                            class="pa-0"
                            cols="12"
                    >
                      <v-avatar
                              class="profile"
                              color="grey"
                              size="164"
                              tile
                      >
                        <v-img src="/images/avatars/placeholder.jpg"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                      <v-list-item
                              color="rgba(0, 0, 0, .4)"
                              dark
                      >
                        <v-list-item-content>
                          <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
<!--                          <v-list-item-title class="title">{{ user.profile.fullName }}</v-list-item-title>-->
                          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-img>
              </v-card>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  export default {
    name: 'UserDetail',
    created() {
      this.getUser(this.$route.params.id);
    },
    computed: {
        ...mapGetters({
            user: 'user/user',
        })
    },
    methods: {
      ...mapActions({
        getUser: 'user/getUser',
      }),
    },
    data: () => ({
    }),
  }
</script>
