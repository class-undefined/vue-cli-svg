<template>
  <div>
    <h3>{{title}}</h3>
    <span>{{tips}}，登录状态：{{logined}}，皮肤：{{skin}}</span>
    <br><br>
    <transition-group name="slide-fade">
      <button @click="login" v-show="!logined" key="1">登录</button>
      <button @click="logout" v-show="logined" key="2">登出</button>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: "Vuex",
    };
  },
  computed: {
    skin() {
      // 由于 Vuex 的状态存储是响应式的，从store实例中读取状态最简单的方法就是在计算属性中返回某个状态
      return this.$store.state.skin;
    },
    ...mapState(["logined"]), // 借助vuex提供的mapState函数来将同名情况的参数直接快速注入
    // ...mapState({
    // 箭头函数可使代码更简练
    // count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    // countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    // countPlusLocalState (state) {
    //    return state.count + this.localCount
    // }
    // })
    tips() {
      return this.$store.getters.tips(this.$store.state.user.name);
    },
    ...mapGetters({}),
    ...mapActions({}),
  },
  methods: {
    login: function () {
      // this.$store.commit("login", {name: 'zhanggp'});
      // 对象风格的mutation提交
      this.$store.commit({
        type: "login",
        name: "zhanggp",
      });
    },
    logout: function () {
      // this.$store.dispatch('logout', {name: ''})
      this.$store.dispatch({
        type: "logout",
        name: "",
      });
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>