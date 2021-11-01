<template>
    <button
    @click="$emit('click')"
    class="gm__button"
    :disabled="disabled"
    :class="['gm__button--'+type,{'is-plain': plain,'is-round': round,'is-disabled': disabled},'gm__button--size-'+size]">
        <slot></slot>
        <i v-if="icon" :class="icon"></i>
    </button>
</template>

<script>
/* eslint-disable */
export default {
    name:"gm-button",
    props:{
        type:{
            type:String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'normal'
        },
        icon: {
            type: String,
            default: ''
        },
        plain: Boolean,
        disabled: Boolean,
        round: Boolean,

    },
    data () {
      return {
        msg: 'button'
      }
    }
}
</script>
