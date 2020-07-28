<template>
  <div class="search-results">
      <div class="row" >
          <div v-for="result in results" class="col">
              <search-result :result="result"></search-result>
          </div>
      </div>
  </div>
</template>

<script>

import SearchRepository from "../resources/repository/search.repository";
import loadingInterceptor from "../resources/interceptors/loading.interceptor";
import SearchResult from "./Search/SearchResult";

export default {
  name: 'SearchResults',
  components: {
      SearchResult
  },
  data: () => ({
    repository: new SearchRepository({interceptors: [loadingInterceptor]}),
    results: null,
  }),
  created() {
    this.onSearch();
  },
  methods: {
    onSearch() {
      this.repository.query(this.$route.query.query)
        .then(res => {
          this.results = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    $route() {
      this.onSearch();
    }
  }
}
</script>
