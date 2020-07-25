<template>
    <div class="text-center">
        <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
    export default {
        name: 'Loader',
        created() {
            this.$eventBus.$on('loading', () => this.loading = true)
            this.$eventBus.$on('loaded', () => this.loading = false)
        },
        data () {
            return {
                loading: false,
            }
        },
        methods: {
        }
    }
</script>
