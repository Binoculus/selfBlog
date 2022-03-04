<template>
  <div></div>
</template>

<script>
import { Login } from "@/api/api";
export default {
  data() {
    return {};
  },
  mounted() {
    Login().then((res) => {
      console.log(res);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>