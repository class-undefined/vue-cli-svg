<template>
  <div class="draw-board-container" @mousemove="mousemove($event)" @click="creatIconControl($event)">
    <icon-control
        v-for="(value,key) in this.componentIcons"
        :key="key"
        :name="value.iconName"
        :iconKey="value.iconKey"
        :x="value.dx"
        :y="value.dy"></icon-control>
  </div>
</template>

<script>
import Icons from "@/components/Icons";
import IconControl from "@/components/IconControl/IconControl";

export default {
  name: "DrawBoard",
  components: {
    IconControl,
    Icons
  },
  data() {
    return {
      componentIcons: {},//储存组件图标name的变量,这是一个键值对
      iconKey: 0,
      iconName: '',//当前选中的icon（未创建状态）
      mouse: {
        x: 0,//鼠标x坐标
        y: 0,//鼠标y坐标
        cursor: '',//鼠标形状
      }

    }
  },
  computed: {
    componentIconsList() {
      return this.componentIcons;
    }
  },
  methods: {
    creatIconControl(event) {
      // console.log(this.iconName === '');
      if (this.iconName !== '') {//若未选择标签则不做任何事情
        let e = event || window.event
        // this.mouse.x = e.pageX - element.offsetLeft
        // this.mouse.y = e.pageY - element.offsetTop
        this.mouse.x = e.pageX
        this.mouse.y = e.pageY
        let dx = this.mouse.x - this.$store.getters.getSvgIconWidth;//16为偏移量 即定位到中心
        let dy = this.mouse.y - this.$store.getters.getSvgIconHeight;
        let iconName = this.iconName;
        let iconKey = this.iconKey;

        let icon = {
          dx,
          dy,
          iconName,
          iconKey
        }//组件参数
        this.$set(this.componentIcons,this.iconKey++,icon)
        // this.componentIcons[this.iconKey++] = icon;//将即将创建的组件加入组件池中
        this.iconName = '';
        // console.log(this.componentIcons);
      }


    },
    /*监听鼠标移动事件，获取相对于创建组件区域，x与y的相对坐标 */
    mousemove(event) {
      // let e = event || window.event
      // let element = e.target
      // this.mouse.x = e.pageX - element.offsetLeft
      // this.mouse.y = e.pageY - element.offsetTop
    }
  },
  created() {
    let self = this
    /*监听组件被单击后发送的事件*/
    globalEvent.$on('componentType', value => {
      this.iconName = value;
      // console.log(this.iconName);
      // this.componentIcons[this.iconKey++] = value;
      // console.log(this.componentIcons,this.iconKey);
    })
    globalEvent.$on('IconControlItemDbClick',value=>{
      self.$delete(this.componentIcons,value.iconKey)
    })
  }
}
</script>

<style scoped>
.draw-board-container {
  box-shadow: 0 0 0 2px #909399;
  border-radius: 3px;
  /*position: absolute;*/
  min-height: 600px;
  /*width: 450px;*/
}
</style>