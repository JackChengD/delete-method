<template>
  <div
    class="long-delete-wrap"
    @touchstart="showDeleteBtn"
    @touchend="clearBtnTimeOut"
  >
    <slot></slot>
    <transition
      name="delete-opacity"
      @after-enter="afterEnterDeteleOpacity"
      @after-leave="afterLeaveDeteleOpacity"
    >
      <div
        class="delete-btn"
        :class="{ 'delte-opacity': deleteShow }"
        v-if="deleteShow"
        @click.stop="deleteBox"
      >
        删除
      </div>
    </transition>
    <div
      class="circle-shadow"
      :class="{ 'circle-shadow-scale': circleShow }"
    ></div>
  </div>
</template>

<script>
/** 
 * 长按删除
*/
export default {
  name: "LongDelete",
  data() {
    return {
      animateShow: false,
      circleShow: false,
      deleteShow: false,
      btnTimeOut: null,
    };
  },
  methods: {
    showDeleteBtn() {
      this.clearBtnTimeOut();
      this.btnTimeOut = setTimeout(() => {
        this.handleCircle();
      }, 300);
    },
    clearBtnTimeOut() {
      this.btnTimeOut && clearTimeout(this.btnTimeOut);
    },
    handleCircle() {
      if (this.animateShow) return;
      this.animateShow = true;
      this.circleShow = !this.circleShow;
      setTimeout(() => {
        this.deleteShow = !this.deleteShow;
      }, 100);
    },
    afterEnterDeteleOpacity() {
      this.animateShow = false;
    },
    afterLeaveDeteleOpacity() {
      this.animateShow = false;
    },
    deleteBox() {
      this.$emit("emitDelete", 'long');
    },
  },
  destroyed() {
    this.animateShow = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.long-delete-wrap {
  height: 100%;
  width: 100%;
  border: 1px solid #eee;
  overflow: hidden;
  margin: 0 auto 20px;
  position: relative;
}

.delete-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s all linear;
  z-index: 1;
  border: 1px solid red;
  width: 100px;
  perspective-origin: center;
}
.circle-shadow {
  width: 0px;
  height: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #eee;
  transition: 0.5s all linear;
  perspective-origin: center;
  opacity: 0.5;
}

.circle-shadow-scale {
  width: 500px;
  height: 500px;
}

.delete-opacity-enter-active,
.delete-opacity-leave-active {
  transition: opacity 0.5s;
  animation: deleteScale 0.5s;
}
.delete-opacity-enter,
.delete-opacity-leave-to {
  opacity: 0;
  animation: deleteScale 0.5s reverse;
}

@keyframes deleteScale {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
