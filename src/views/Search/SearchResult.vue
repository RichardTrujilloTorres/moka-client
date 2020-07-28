<template>
    <v-card
            class="mx-auto"
            max-width="800"
    >
        <v-card-text >
            <p v-for="field in Object.keys(result)">
                {{ field }}: {{ result[field] }}
            </p>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon @click="onGoToResultListing(result)">
                    {{ resourceIcon(result.resourceName) }}
                </v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon @click="onShow(result)">mdi-eye</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {items} from "../../layout/menu";

    export default {
        name: 'SearchResult',
        props: {
            result: {
                type: Object,
                required: true,
            }
        },
        computed: {
        },
        components: {
        },
        created() {
        },
        data: () => ({
        }),
        methods: {
            resourceIcon(name) {
                const resources = items.filter(item => item.text === 'Users')[0].children


                switch (name) {
                    case 'User':
                        return resources.filter(item => item.text === 'Accounts')[0].icon

                    case 'Role':
                        return resources.filter(item => item.text === 'Roles')[0].icon

                    case 'Permission':
                        return resources.filter(item => item.text === 'Permissions')[0].icon
                }
            },
            onShow(result) {
                switch (result.resourceName) {
                    case 'User':
                        this.$router.push({name: 'AccountDetail', params: {id: result.id}})
                        break;

                    case 'Role':
                        this.$router.push({name: 'RoleDetail', params: {id: result.id}})
                        break;

                    case 'Permission':
                        this.$router.push({name: 'PermissionDetail', params: {id: result.id}})
                        break;
                }
            },
            onGoToResultListing(result) {
                switch (result.resourceName) {
                    case 'User':
                        this.$router.push({name: 'Account'})
                        break;

                    case 'Role':
                        this.$router.push({name: 'Role'})
                        break;

                    case 'Permission':
                        this.$router.push({name: 'Permission'})
                        break;
                }
            }
        },
    }
</script>
