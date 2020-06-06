<template>
    <list
        title="Users"
        :delete-action="'user/deleteUser'"
        :get-action="'user/getUsers'"
        :items-getter="'user/users'"
        :fields="userFields"
        @item-create="onCreate"
        @item-edit="onEdit"
    >
    </list>
</template>

<script>
  import List from "../Common/List";
  import {MessageService} from "../../resources/services/message.service";
  export default {
    name: 'UserList',
      components: {List},
    created() {
    },
    computed: {
        userFields() {
            return [
                {
                    key: 'email',
                    name: 'Email'
                },
                {
                    key: 'name',
                    name: 'Name'
                },
            ]
        }
    },
    methods: {
      onEdit(id) {
          this.$router.push({name: 'AccountDetail', params: {id}})
      },
      onCreate() {
          const messageService = new MessageService(this)
          messageService.info('You are about to create a new user')
      },
    },
    data: () => ({
      page: 1,
      perPage: 10,
      total: 20,
    }),
  }
</script>
