<template>
  <svg :ref="name" :class="cls" v-on="$listeners"
       @click="onclick()"
       @mouseenter="mouseenter($event)"
       @mouseleave="mouseleave($event)">
    <use :xlink:href="n"/>
  </svg>
</template>

<script>
export default {
  name: "Icons",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    cls() {
      return `svg-icon svg-icon-${this.name} svg-icon-${this.status}`;
    },
    n() {
      return `#icon-${this.name}`;
    }
  },
  data() {
    return {
      id: undefined,
      status: 'mouseout'//默认鼠标不在组件内
    }
  },
  mounted() {
    this.id = this.$refs[this.name];
  },
  methods: {
    /*鼠标进入组件事件*/
    mouseenter(event) {// eslint-disable-line no-unused-vars
      /*鼠标进入后,设置其指针样式*/
      this.id.style.cursor = 'pointer'
      /*将鼠标状态设置为进入状态*/
      this.status = 'mouseenter'
    },
    /*鼠标离开组件事件*/
    mouseleave(event) {// eslint-disable-line no-unused-vars
      /*将鼠标状态设置为离开状态*/
      this.status = 'mouseleave'
    },
    /*鼠标被单击事件-发生一个事件，消息值为对应的name*/
    onclick(){
      globalEvent.$emit('componentType',this.name);
    }
  }
};
</script>

<style scoped lang="scss">
.svg-icon {
  margin: 3px;
  width: $svg-icon-width;
  height: $svg-icon-height;
}

.svg-icon-mouseenter {
  box-shadow: 0 0 0 2px #909399;
  border-radius: 2px;

}

.svg-icon-mouseleave {
  width: $svg-icon-width;
  height: $svg-icon-height;
}
</style>