<template>
    <div class="pagination">
        <div class="text-center">
            <v-pagination
                    v-model="currentPage"
                    :length="total"
                    total-visible="7"
                    @input="onInput"
                    @next="onNext"
                    @previous="onPrevious"
                    circle
            ></v-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Paginator',
        props: {
            page: {
                type: Number,
                required: true,
            },
            total: {
                type: Number,
                required: true,
            }
        },
        methods: {
            onInput(page) {
                this.$emit('page-changed', page)
            },
            onNext() {
                this.$emit('next-page')
            },
            onPrevious() {
                this.$emit('previous-page')
            },
        },
        data: () => ({
            currentPage: 1,
        }),
    }
</script>
