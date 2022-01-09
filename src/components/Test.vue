<template>
  <div class="hello">
    <div class="box-wrap" v-for="i in 3" :key="i">
      <long-delete v-if="i > 1" @emitDelete="deleteBox">
        <div>长按删除</div>
      </long-delete>
      <left-delete v-else @emitDelete="deleteBox">
        <div>左滑删除</div>
      </left-delete>
    </div>
  </div>
</template>

<script>
import LongDelete from "./LongDelete.vue";
import LeftDelete from "./LeftDelete.vue";
export default {
  name: "Test",
  components: {
    LongDelete,
    LeftDelete,
  },
  data() {
    return {
      animateShow: false,
    };
  },
  methods: {
    deleteBox(data) {
      console.log("delete", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*,
body {
  margin: 0;
  padding: 0;
}

.box-wrap {
  height: 100px;
  width: 100%;
  border: 1px solid #eee;
  overflow: hidden;
  margin: 0 auto 20px;
  position: relative;
}
</style>
