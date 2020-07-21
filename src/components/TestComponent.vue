<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>

export default {
  props: {
    myProp: {
      type: String
    }
  },
  data: () => ({
    msg: null
  }),
  computed: {
    myPropComputed() {
      return this.myProp
    }
  },
  watch: {
    myPropComputed: {
      // comment out 'immediate: true' to pass test
      immediate: true,
      handler() {
        this.msg = this.myPropComputed
      }
    }
  }
}
</script>
