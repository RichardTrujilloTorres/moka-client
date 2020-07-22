<template>
    <v-card
            class="mx-auto"
            max-width="800"
    >
        <v-card-text v-if="history">
            <p>
                <vue-json-pretty :data="history">
                </vue-json-pretty>
            </p>
        </v-card-text>
    </v-card>
</template>

<script>
    import VueJsonPretty from 'vue-json-pretty';

    export default {
        name: 'Change',
        props: {
            history: {
                type: Object,
                required: true,
            }
        },
        components: {
            VueJsonPretty,
        },
        created() {
        },
        data: () => ({
        }),
    }
</script>
