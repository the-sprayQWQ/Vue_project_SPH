//先引入mockjs
import Mock from 'mockjs'
//把JSON文件引入进来
//webpack默认暴露的有json 和 图片
import banner from './banner.json'
import floor from './floor.json'
//模拟轮播图的数据
Mock.mock("/mock/banner",{code:200,data:banner})
//模拟楼层区数据
Mock.mock("/mock/floor",{code:200,data:floor})