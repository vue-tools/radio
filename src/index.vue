<style src="./style.css"></style>
<template src="./template.html"></template>
<script>
    /**
     * @props val initial value
     */
    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
            disabled: Boolean,
            value: {},
            val: {}
        },
        computed: {
            checked(){
                return this.model == this.val
            },
            model: {
                get(){
                    return this.value
                },
                set(v){
                    /* istanbul ignore next */
                    this.$emit('input', v)
                }
            }
        }
    }
</script>