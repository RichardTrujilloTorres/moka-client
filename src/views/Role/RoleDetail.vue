<template>
  <div class="role">
    <v-row dense>
      <v-col cols="12">
        <v-card v-if="role"
                color="#385F73"
                dark
        >
          <v-card-title class="headline">
            <v-text-field :rules="rules" :placeholder="placeholder" v-model="role.name"></v-text-field>
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
  name: 'RoleDetail',
  components: {
  },
  created() {
    this.getRole(this.$route.params.id);
  },
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value || '').length <= 20 || 'Max 30 characters',
    ],
  }),
  computed: {
    ...mapGetters({
      role: 'role/role',
    }),
    placeholder() {
      return this.role.name;
    },
  },
  methods: {
    ...mapActions({
        getRole: 'role/getRole',
        updateRole: 'role/updateRole',
    }),
    onSave() {
      this.updateRole({
        id: this.role.id,
        data: {
          name: this.role.name
        }
      });
    },
  }
}
</script>
