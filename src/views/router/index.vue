<template>
  <div>
    <h3>{{title}}</h3>
    <button v-permission="['admin']">{{'admin can see me' | capitalize}}</button>
    <button v-permission="['editor']">{{'editor can see me' | capitalize}}</button>
    <router-view></router-view>
    <transition :name="effect.fade">
      <router-view name="icons"></router-view>
    </transition>
    <transition :name="effect.slide">
      <router-view name="404"></router-view>
    </transition>
  </div>
</template>

<script>
import permission from "@/directive/permission";
export default {
  directives: { permission },
  data() {
    return {
      title: "Vue Router",
      effect: {
        fade: "fade",
        slide: "slide-fade"
      }
    };
  },
  created() {
    console.log(this.$route);
  },
  mounted() {
    setTimeout(() => {
      this.$route.params.test = "test";
      console.log("测试路由更新：", this.$route);
    }, 100);
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log("beforeRouteEnter...");
    next(vm => {
      console.log("beforeRouteEnter", vm, to, from);
    });
  },
  beforeRouterUpdate(to, from, next) {
    // ...
    console.log("beforeRouterUpdate...");
    next(vm => {
      console.log("beforeRouterUpdate", vm, to, from);
    });
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("beforeRouteLeave...");
    next(vm => {
      console.log("beforeRouteLeave", vm, to, from);
    });
  }
};
</script>

<style scoped lang="scss"></style>