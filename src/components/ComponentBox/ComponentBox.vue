<template>
  <el-collapse class="el-collapse" v-model="activeNames" @change="handleChange">
    <el-collapse-item :title="item.category" v-for="(item,itemIndex) in items" :key="itemIndex">
        <span class="span-icon" v-for="(icon,iconIndex) in item.icons" :key="iconIndex">
          <icons :name="icon"></icons>
        </span>
    </el-collapse-item>
  </el-collapse>

</template>

<script>

import Icons from "../Icons";

export default {
  name: 'ComponentBox',
  components: {
    Icons
  },
  data() {
    return {
      activeNames: ['1']
    };
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return {
          category: {type: String, default: '默认分类'},//分类名
          icons: {
            type: Array,
            default: []
          }//图标列表
        }
      }
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
  .el-collapse{
    background-color: rgba(236,245,255,0.7);
  }
  .span-icon{
    display: inline-block;
  }

</style>
