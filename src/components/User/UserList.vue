<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-col class="mb-4">

          <h2 class="headline font-weight-bold mb-3">
              Accounts
          </h2>

          <v-row justify="center">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">Email</th>
                  <th class="text-left">Name</th>
                  <th class="text-right">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.email">
                  <td>{{ user.email }}</td>
                  <td>{{ user.name }}</td>
                  <th>
                    <v-btn @click="onEdit(user.id)" class="ma-0" text color="blue">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="onDelete(user.id)" class="ma-0" text color="red">
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
    </v-row>
  </v-container>
</template>

<script>
  import Paginator from "../Common/Paginator";
  import {mapActions, mapGetters} from "vuex";
  export default {
    name: 'UserList',
    components: {Paginator},
    created() {
      this.getUsers();
    },
    computed: {
        ...mapGetters({
            users: 'user/users',
        })
    },
    methods: {
      ...mapActions({
        getUsers: 'user/getUsers',
        deleteUser: 'user/deleteUser',
      }),
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
        this.getUsers({page: this.page, per_page: this.perPage});
      },
      onEdit(id) {
          this.$router.push({name: 'AccountDetail', params: {id}})
      },
      onDelete(id) {
          this.deleteUser(id)
            .then(() => this.updatePage());
      }
    },
    data: () => ({
      page: 1,
      perPage: 10,
      total: 20,
    }),
  }
</script>
