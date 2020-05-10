<template>
    <list
        title="Roles"
        :delete-action="'role/deleteRole'"
        :get-action="'role/getRoles'"
        :items-getter="'role/roles'"
        :fields="fields"
        @item-create="onCreate"
        @item-edit="onEdit"
    >
    </list>
</template>

<script>
  import List from "../Common/List";
  export default {
    name: 'RoleList',
      components: {List},
    created() {
    },
    computed: {
        fields() {
            return [
                {
                    key: 'name',
                    name: 'Name'
                },
            ]
        }
    },
    methods: {
      onEdit(id) {
          this.$router.push({name: 'RoleDetail', params: {id}})
      },
      onCreate() {
        console.log('create on role list')
      },
    },
  }
</script>
