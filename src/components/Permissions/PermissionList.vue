<template>
    <list
        title="Permissions"
        :delete-action="'permission/deletePermission'"
        :get-action="'permission/getPermissions'"
        :items-getter="'permission/permissions'"
        :fields="fields"
        @item-create="onCreate"
        @item-edit="onEdit"
    >
    </list>
</template>

<script>
  import List from "../Common/List";
  export default {
    name: 'PermissionList',
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
          this.$router.push({name: 'PermissionDetail', params: {id}})
      },
      onCreate() {
        console.log('create on permission list')
      },
    },
  }
</script>
