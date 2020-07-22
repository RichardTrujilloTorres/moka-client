<template>
    <div>
        <div v-for="history in histories">
            <change v-if="history" :history="history"></change>
        </div>

        <p v-if="!histories.length">No results found.</p>

        <div class="my-2">
            <v-btn @click="previous" class="mx-2" fab dark small color="primary">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn @click="next" class="mx-2" fab dark small color="primary">
                <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Change from "./Change";

    export default {
        name: 'ChangeList',
        props: {
            resource: {
                type: String,
                required: true,
            },
        },
        components: {
            Change
        },
        created() {
            this.getResourceHistory(this.resource)
        },
        watch: {
            resource: {
                handler(name) {
                    this.getResourceHistory(name)
                }
            }
        },
        data: () => ({
            page: 1,
        }),
        computed: {
            ...mapGetters({
                histories: 'histories/histories',
            }),
        },
        methods: {
            ...mapActions({
                getHistories: 'histories/getHistories',
            }),
            getResourceHistory(name, params = null) {
                return this.getHistories({
                    resource: name,
                    params: params,
                });
            },
            next() {
                this.page += 1;
                return this.getResourceHistory(this.resource, {
                    page: this.page
                })
            },
            previous() {
                this.page = this.page > 1 ?
                    this.page - 1 :
                    1;
                return this.getResourceHistory(this.resource, {
                    page: this.page
                })
            },
        }
    }
</script>
