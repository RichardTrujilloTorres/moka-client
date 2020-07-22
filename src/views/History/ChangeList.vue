<template>
    <div>
        <div v-for="history in histories">
            <change :history="history"></change>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Change from "./Change";

    export default {
        name: 'ChangeList',
        components: {
            Change

        },
        created() {
            this.getHistories({
                resource: 'permission',
                params: {}
            }); // TODO: prop
        },
        data: () => ({
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
        }
    }
</script>
