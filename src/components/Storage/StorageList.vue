<template>
    <list
        title="Storage Stats"
        :delete-action="''"
        :get-action="'storage/getStorages'"
        :items-getter="'storage/storages'"
        :fields="fields"
        @item-create="f => f"
        @item-edit="f => f"
        :no-actions="true"
    >
    </list>
</template>

<script>
  import List from "../Common/List";
  export default {
    name: 'StorageList',
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
                {
                    key: 'type',
                    name: 'Type'
                },
                {
                    key: 'size',
                    name: 'Size (KB)'
                },
                {
                    key: 'lastModifiedAt',
                    name: 'Last Modified'
                },
            ]
        }
    },
    methods: {
    },
    data: () => ({
      page: 1,
      perPage: 10,
      total: 20,
    }),
  }
</script>
