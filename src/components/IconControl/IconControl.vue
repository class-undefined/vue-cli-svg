<template>
  <svg :ref="name" :class="cls"
       v-on="$listeners"
       @mouseenter="mouseenter($event)"
       @mouseleave="mouseleave($event)"
       @mousedown="mousedown($event)"
       @dblclick="dbClick($event)"
       :style="{left:mouse.x + 'px',top:mouse.y + 'px'}"
  >
    <use :xlink:href="n"/>
  </svg>
</template>

<script>
export default {
  name: "IconControl",
  props: {
    name: {
      type: String,
      required: true
    },
    iconKey: {
      type: Number,
      required: true
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
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
      mouse: {
        x: this.x,
        y: this.y,
      },
      status: ''
    }
  },
  mounted() {
    this.id = this.$refs[this.name];
  },
  methods: {
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
    /*鼠标按下事件 21：51*/
    mousedown(event) {
      document.onmousemove = e => {
        this.mouse.x = e.clientX - this.$store.getters.getSvgIconWidth
        this.mouse.y = e.clientY - this.$store.getters.getSvgIconWidth
      }
      document.onmouseup = e => {
        document.onmousemove = null//鼠标抬起时将拖动事件取消
      }
    },
    dbClick(event) {
      let name = this.name
      let iconKey = this.iconKey
      console.log(iconKey);
      globalEvent.$emit('IconControlItemDbClick', {name, iconKey})//发送双击信号给DrawBoard画板
    }
  }
};
</script>

<style scoped lang="scss">
.svg-icon {
  margin: 3px;
  width: $svg-icon-width;
  height: $svg-icon-height;
  position: absolute;
  display: inline-block;
}

.svg-icon-mouseenter {
  box-shadow: 0 0 0 2px rgba(245, 108, 108, 0.5);
  border-radius: 2px;

}
</style>