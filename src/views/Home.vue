<template>
  <div class="home">
    <h1>This is Home page</h1>

    <v-btn @click="gotoTestGrid">Test Grid</v-btn>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    gotoTestGrid: function() {
      this.$router.push("test-grid");
    }
  }
};
</script>
