<template>
  <div class="home">
    <h1>This is Home page</h1>

    <v-btn @click="gotoTestGridCustom">Test Grid Custom</v-btn>
    <v-btn @click="gotoTestTable">Test Table Component</v-btn>
    <v-btn class="ml-2" @click="gotoTooFields">Test Too Input Fields</v-btn>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    gotoTestGridCustom: function() {
      this.$router.push("test-grid");
    },
    gotoTestTable: function() {
      this.$router.push("test-table");
    },
    gotoTooFields: function() {
      this.$router.push("test-too-fields");
    }
  }
};
</script>
