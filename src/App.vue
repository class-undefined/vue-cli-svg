<template>
  <div id="app">
    <el-container class="el-container">
      <el-header class="el-header">Header</el-header>
      <el-container>
        <el-aside class="el-aside" width="200px">
          <component-box :items="svgImg"></component-box>
        </el-aside>
        <el-container>
          <el-main class="el-main">
            <draw-board/>
          </el-main>
          <el-footer class="el-footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
// import Icons from "./components/Icons";
import ComponentBox from "./components/ComponentBox/ComponentBox";
import DrawBoard from "@/components/DrawBoard/DrawBoard";


export default {
  name: 'app',
  components: {
    DrawBoard,
    // Icons,
    ComponentBox
  },
  data() {
    return {
      svgImg: [
        {
          category: '分类一',
          icons: ['3', '4', '5', '1']
        },
        {
          category: '分类二',
          icons: ['1', '2']
        },
      ]
    }
  },
}
</script>

<style>
body{
  height: 100%;
  width: 100%;
  position: absolute;
}
body{
  margin: 0;
}
* {
  font-weight: 300;
}

.el-header, .el-footer {
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  /*text-align: center;*/
  line-height: 200px;
}

.el-main {
  /*background-color: rgba(236,245,255,0.7);*/
  color: #333;
  min-height: 600px;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
