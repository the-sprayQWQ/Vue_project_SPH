<template>
  <div class="pagination">
    <!-- 上面部分 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-show="StartNumAndEndNum.start>1" @click="$emit('getPageNo', 1)" :class="{active:pageNo == 1}">1</button>
    <button v-show="StartNumAndEndNum.start>2">···</button>

    <!-- 中间部分 -->
    <button v-for="(page,index) in StartNumAndEndNum.end" :key="index" v-show="page>=StartNumAndEndNum.start" @click="$emit('getPageNo', page)" :class="{active:pageNo == page}">{{ page }}</button>

    <!-- 下面部分 -->
    <button v-show="StartNumAndEndNum.end<totalPage - 1">···</button>
    <button v-show="StartNumAndEndNum.end<totalPage" @click="$emit('getPageNo', totalPage)" :class="{active:pageNo == totalPage}">{{ totalPage }}</button>
    <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>

  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    StartNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      let start = 0;
      let end = 0;

      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        //正常现象连续页数5页,但是你的总数肯定是大于5的
        //开始数字
        start = pageNo - parseInt(continues / 2);
        //结束数字
        end = pageNo + parseInt(continues / 2);
        //把出现负数或者0的不正常情况纠正
        if(start < 1){
          start = 1
          end = continues
        }
        //把大于总页码的不正常情况纠正
        if(end > totalPage){
          start = totalPage - continues + 1
          end = totalPage
        }
      }
      return {start , end}
    },
  },
};
</script>

<style lang='less' scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>