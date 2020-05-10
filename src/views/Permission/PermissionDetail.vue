<template>
  <div class="permission">
    <v-row dense>
      <v-col cols="12">
        <v-card v-if="permission"
                color="#385F73"
                dark
        >
          <v-card-title class="headline">
            <v-text-field :rules="rules" :placeholder="placeholder" v-model="permission.name"></v-text-field>
          </v-card-title>

          <v-card-subtitle>// detail data</v-card-subtitle>

          <v-card-actions>
            <v-btn text @click="onSave">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  import {mapActions, mapGetters} from "vuex";

export default {
  name: 'PermissionDetail',
  components: {
  },
  created() {
    this.getPermission(this.$route.params.id);
  },
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value || '').length <= 20 || 'Max 30 characters',
    ],
  }),
  computed: {
    ...mapGetters({
      permission: 'permission/permission',
    }),
    placeholder() {
      return this.permission.name;
    },
  },
  methods: {
    ...mapActions({
        getPermission: 'permission/getPermission',
        updatePermission: 'permission/updatePermission',
    }),
    onSave() {
      this.updatePermission({
        id: this.permission.id,
        data: {
          name: this.permission.name
        }
      });
    },
  }
}
</script>
