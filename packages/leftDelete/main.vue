<template>
  <div class="left-delete-wrap" data-type="0">
    <div class="flex" @touchstart="touchStart" @touchend="touchEnd">
      <div class="left">
        <slot></slot>
      </div>
      <div class="right flex">
        <div class="delete-btn" @click.stop="deleteBox">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
/** 
 * 左滑删除
*/
export default {
  name: "LeftDelete",
  data() {
    return {
      startX: 0,
      endX: 0,
    };
  },
  methods: {
    touchStart(e) {
      this.startX = e.touches[0].clientX;
    },
    touchEnd(e) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement;
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        parentElement.dataset.type = 1; // 显示删除
      }

      // 右滑
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        parentElement.dataset.type = 0; // 不显示删除
      }

      this.startX = 0;
      this.endX = 0;
    },
    deleteBox() {
      this.$emit("emitDelete", 'left');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-delete-wrap {
  height: 100%;
  width: 100%;
  position: relative;
  transition: 0.2s all;
}

.flex {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.left-delete-wrap[data-type="0"] {
  transform: translate3d(0, 0, 0);
}
.left-delete-wrap[data-type="1"] {
  transform: translate3d(-100px, 0, 0);
}

.left-delete-wrap .left {
  flex: 1;
  border-right: 1px solid #eee;
}

.left-delete-wrap .right {
  width: 100px;
  height: 100%;
  background: red;
  position: absolute;
  top: 0;
  right: -101px;
  box-sizing: border-box;
}
</style>
