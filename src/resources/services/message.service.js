export class MessageService {
    constructor(vm) {
        this.vm = vm;
    }

    success(message) {
        this.vm.$eventBus.$emit('alert-show', {
            message,
            type: 'success',
        })
    }

    error(message) {
        this.vm.$eventBus.$emit('alert-show', {
            message,
            type: 'error',
        })
    }

    warning(message) {
        this.vm.$eventBus.$emit('alert-show', {
            message,
            type: 'warning',
        })
    }

    info(message) {
        this.vm.$eventBus.$emit('alert-show', {
            message,
            type: 'info',
        })
    }
}
