<template>
  <!-- 已经注册完全局组件 不用再注册了可以直接使用 -->
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommand></TodayRecommand>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index";
import TodayRecommand from "./TodayRecommand/index";
import Rank from "./rank/index";
import Like from "./like/index";
import Floor from "./floor/index";
import Brand from "./brand/index";
import { mapState } from "vuex";
export default {
  components: { ListContainer, TodayRecommand, Rank, Like, Floor, Brand },
  mounted() {
    this.$store.dispatch("GetfloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
      userInfo: (state) => state.user.userInfo,
    }),
  },
};
</script>

<style>
</style>