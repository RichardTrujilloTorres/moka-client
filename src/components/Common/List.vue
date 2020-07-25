<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-col class="mb-4">

          <h2 class="headline font-weight-bold mb-3">
              {{ title }}
          </h2>

          <v-row justify="center">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr >
                  <th v-for="field in fields" :key="field.name" class="text-left">{{ field.name }}</th>
                  <th v-if="!noActions" class="text-right">Actions</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="item in items" :key="item.key">
                  <td v-for="field in fields" :key="field.name">{{ item[field.key] }}</td>
                  <th v-if="!noActions">
                    <v-btn @click="onEdit(item.id)" class="ma-0" text color="blue">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="onDelete(item.id)" class="ma-0" text color="red">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </th>
                </tr>

                </tbody>
              </template>
            </v-simple-table>
          </v-row>
        </v-col>

        <paginator
                :page="page"
                :total="total"
                @page-changed="onPageChanged"
                @next-page="onNextPage"
                @previous-page="onPreviousPage"
        ></paginator>

      </v-col>

      <v-btn @click="onCreate"
              absolute
              dark
              fab
              bottom
              right
              color="pink"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>

  </v-container>
</template>

<script>
  import Paginator from "../Common/Paginator";

  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      fields: {
        type: Array,
        required: true,
      },
      getAction: {
        type: String,
        required: true,
      },
      deleteAction: {
        type: String,
        required: true,
      },
      itemsGetter: {
        type: String,
        required: true,
      },
      noActions: {
        type: Boolean,
        required: false,
      }
    },
    name: 'List',
    components: {Paginator},
    created() {
        this.load();
    },
    computed: {
      items() {
          return this.$store.getters[this.itemsGetter]
      }
    },
    methods: {
      load() {
        this.$store.dispatch(this.getAction)
        .then(res => {
            this.setPagination({...res.meta})
        })
      },
      onPageChanged(page) {
        this.page = page;
        this.updatePage();
      },
      onNextPage() {
        this.page = this.page < this.total ?
                this.page + 1 :
                this.page;
      },
      onPreviousPage() {
        this.page = this.page > 1 ?
                this.page - 1 :
                this.page;
      },
      updatePage() {
          this.$store.dispatch(this.getAction, ({page: this.page, per_page: this.perPage}))
      },
      setPagination({last_page}) {
        this.total = last_page;
      },
      onEdit(id) {
        this.$emit('item-edit', id)
      },
      onDelete(id) {
          this.$store.dispatch(this.deleteAction, id)
            .then(() => this.updatePage())
      },
      onCreate() {
        this.$emit('item-create')
      },
    },
    data: () => ({
      page: 1,
      perPage: 10,
      total: 20,
    }),
  }
</script>
