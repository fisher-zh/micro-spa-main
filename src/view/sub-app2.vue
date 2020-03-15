<template>
  <div>test
    <button @click="goLink">go sub-app-1</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {

    }
  },
  methods: {
    goLink () {
      this.$router.push({
        path: '/sub-app-1'
      })
    }
  }
}
</script>
