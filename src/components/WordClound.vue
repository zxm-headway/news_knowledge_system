<template>
 
    <div ref="world_ref" style="height: 30vh;width:60vh;" class="world_box"></div>



</template>

<script>
import { onMounted, reactive ,ref} from 'vue';

import * as echarts from 'echarts/core';
import 'echarts-wordcloud';

export default {
  name: "WordClound",
  setup() {
    const world_ref = ref(null)

    let data_world = reactive([
				{ value: '30', name: 'VIVO' },
				{ value: '29', name: 'OPPO' },
				{ value: '28', name: 'HONOR' },
				{ value: '27', name: '红米' },
				{ value: '26', name: '小米' },
				{ value: '25', name: '美图' },
				{ value: '24', name: 'ONEPLUS' },
				{ value: '23', name: '魅族' },
				{ value: '22', name: '红手指' },
				{ value: '21', name: 'SAMSUNG' },
				{ value: '20', name: '金立' },
				{ value: '16', name: 'BLACKBERRY' },
				{ value: '15', name: '诺基亚' },
				{ value: '14', name: '锤子' },
				{ value: '13', name: '大疆' },
				{ value: '12', name: '361' },
				{ value: '11', name: '摩托罗拉' },
				{ value: '10', name: '联想' },
				{ value: '9', name: '玩家国度' },
			]
    )
    
   function initChart() {
			var myChart = echarts.init(world_ref.value);
			const option = {
				title: {
					text: '',
					x: "center"
				},
				backgroundColor: "#fff",
				tooltip: {
				pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
				},
				series: [
					{
						type: "wordCloud",
						//用来调整词之间的距离
						gridSize: 10,
						//用来调整字的大小范围
						// Text size range which the value in data will be mapped to.
						// Default to have minimum 12px and maximum 60px size.
						sizeRange: [14, 40],
						// Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
						//用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
						// rotationRange: [-45, 0, 45, 90],
						// rotationRange: [ 0,90],
						rotationRange: [0, 0],
						//随机生成字体颜色
						// maskImage: maskImage,
						textStyle: {
							color: function () {
								return (
									"rgb(" +
									Math.round(Math.random() * 255) +
									", " +
									Math.round(Math.random() * 255) +
									", " +
									Math.round(Math.random() * 255) +
									")"
								);
							}
						},
						//位置相关设置
						// Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
						// Default to be put in the center and has 75% x 80% size.
						left: "center",
						top: "center",
						right: null,
						bottom: null,
						width: "100%",
						height: "100%",
						//数据
						data: data_world
					}
				]
			};
			myChart.setOption(option);
			// 点击某个字
			myChart.on('click', function (params) {
				console.log('myChart----click---:',params.data)
			});
		}

    onMounted(()=>{
      // console.log(world_ref.value)
      initChart()
    })

    return {
      data_world,
      world_ref,
    };
  }
}
</script>

<style lang="less" scoped>
  .world_box{
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
</style>