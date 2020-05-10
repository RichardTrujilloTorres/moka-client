<template>
    <div>
        <v-alert
            v-model="alert.show"
            dismissible
            elevation="2"
            :type="alert.type"
            @alert-show="onShow"
        >
            <div v-html="alert.message"></div>
        </v-alert>
    </div>
</template>

<script>
    export default {
        created() {
            this.$eventBus.$on('alert-show', this.onShow)
        },
        data () {
            return {
                alert: {
                    show: false,
                    message: '',
                    type: 'success',
                },
            }
        },
        methods: {
            onShow({message, type}) {
                this.alert.message = message;
                this.alert.type = type;
                this.alert.show = true;
            }
        }
    }
</script>
