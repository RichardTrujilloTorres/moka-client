<template>
    <div class="search">
        <v-form @submit.prevent="onSearch">
            <v-text-field
                    v-model="query"
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    class="hidden-sm-and-down"
            />
        </v-form>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        created() {
        },
        data () {
            return {
                query: ``,
            }
        },
        methods: {
            onSearch() {
                return this.$route.name === 'Search' ?
                    this.$router.replace({name: 'Search', query: {
                            query: this.query,
                    }})
                    :
                    this.$router.push({name: 'Search', query: {
                            query: this.query,
                    }});
            },
        }
    }
</script>
