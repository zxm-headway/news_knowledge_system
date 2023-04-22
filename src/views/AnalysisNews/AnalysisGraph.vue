<template>
  <div ref="knowledge_gragh_ref" class="graph_container"></div>
</template>

<script>
import { onMounted, ref,onBeforeUnmount } from "vue";
import  { graph_data } from "./graph_data";
import G6 from "@antv/g6";

export default {
  name: "AnalysisGraph",
  setup() {
    const knowledge_gragh_ref = ref(null);
    let graph;
    let graph_data_reception = graph_data

    const get_gragh_data = ()=>{
      create_gragh(graph_data_reception)
    }

    //创造图形
    const create_gragh = (graph_data) => {
      console.log(knowledge_gragh_ref.value,knowledge_gragh_ref.value.clientHeight)
      const colors = [
        "#5F95FF",
        "#61DDAA",
        "#65789B",
        "#F6BD16",
        "#7262FD",
        "#78D3F8",
        "#9661BC",
      ];
      const strokes = [
        "#5B8FF9",
        "#5AD8A6",
        "#9270CA",
        "#FF9D4D",
        "#269A99",
        "#FF99C3",
      ];

      const clusterMap = new Map();
      let clusterId = 0;

      
    //发起axios请求获取数据
      let legendType  =  {
      nodes:[
        {id:"concept",label:"概念属性"},
        {id:"films",label:"电影院"},
        {id:"address",label:"地址"},
        {id:"belongs",label:"所属院线"},
        // {id:"CompetentAuthorities",label:"主管部门"},
        // {id:"Typeschool",label:"办学类型"},
        // {id:"NameUniversity",label:"高校名称"}
      ],
      
     }
      //清除图上所有的样式
      function clearAllStats() {
        graph.setAutoPaint(false);
        graph.getNodes().forEach(function (node) {
          graph.clearItemStates(node);
          node.show();
        });
        graph.getEdges().forEach(function (edge) {
          graph.clearItemStates(edge);
          edge.show();
        });
        graph.paint();
        graph.setAutoPaint(true);
      }

      const container = knowledge_gragh_ref.value;
      const width = container.clientWidth||1200;
      const height = container.clientHeight || 1000;

      graph = new G6.Graph({
        container: knowledge_gragh_ref.value,
        width,
        height,
        // plugins: [legend],
        layout: {
          // Object，可选，布局的方法及其配置项，默认为 random 布局。
          type: "force2",
          // nodeStrength: 3000 ,
          // edgeStrength:1000,// 指定为力导向布局
          preventOverlap: true,
          linkDistance: 300, // 防止节点重叠
          // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
        },
        modes: {
          default: ["drag-canvas", "drag-node", "zoom-canvas"],
        },
        defaultNode: {
          size: [50, 50],

          style: {
            lineWidth: 2,
            fill: "#DEE9FF",
            stroke: "#5B8FF9",
          },
          labelCfg: {
            style: {
              fill: "black",
            },
            // label: 'node-label',
          },
        },
        defaultEdge: {
          size: 1,
          style: {
            endArrow: {
              path: G6.Arrow.triangle(),
              fill: "#e2e2e2",
            },
            stroke: "#e2e2e2",
            lineAppendWidth: 5,
            labelCfg: {
              position: "center",
              offsetY: -80,
            },
          },

          type: "line",
        },
        nodeStateStyles: {
          activeByLegend: {
            lineWidth: 5,
            strokeOpacity: 0.5,
            stroke: "#f00",
            opacity: 1,
          },
          inactiveByLegend: {
            opacity: 0.2,
          },
        },
        edgeStateStyles: {
          activeByLegend: {
            lineWidth: 10,
            stroke: "#f00",
            strokeOpacity: 0.5,
          },
          inactiveByLegend: {
            opacity: 0.5,
          },
        },
      });

      graph.on('node:click', function (e) {
      const item = e.item;
      //保存节点信息
      console.log(item)
      console.log(item.get('model'))
      ///
      graph.setAutoPaint(false);
      graph.getNodes().forEach(function (node) {
        // console.log(node)
        // graph.clearItemStates(node);
        node.hide()
        // graph.setItemState(node, 'dark', true);
      });
      // graph.setItemState(item, 'dark', false);
      // graph.setItemState(item, 'highlight', true);

      //对节点的邻居节点展示
      graph.getEdges().forEach(function (edge) {

        edge.show()
        item.show()
       
        if (edge.getSource() === item ) {
          
          edge.getTarget().show()
          
          edge.toFront();
        } 
        else if (edge.getTarget() === item) {
         
          edge.getSource().show()
          
          edge.toFront();
        } 
        else {
          graph.setItemState(edge, 'highlight', false);
          edge.hide()
        
        }
      });
      graph.paint();
      graph.setAutoPaint(true);
    });

      graph.on('canvas:click', clearAllStats);

      //对节点进行分类
      graph_data.nodes.forEach(function (node) {
        // cluster
        if (node.type && clusterMap.get(node.type) === undefined) {
          clusterMap.set(node.type, clusterId);
          clusterId++;
        }
        const cid = clusterMap.get(node.type);
        // console.log(cid,clusterMap)
        if (!node.style) {
          node.style = {};
        }
        node.style.fill = colors[cid % colors.length];
        node.style.stroke = strokes[cid % strokes.length];
      });


      legendType.nodes.forEach((node) => {
      // console.log(node)
      const cid = clusterMap.get(node.id);
      // console.log(clusterMap,cid)
      if(!node.style){
        node.style = {
       
          fill: colors[cid % colors.length],
          stroke: strokes[cid % strokes.length]
        };
      }

      // console.log(node)
      
    })

    graph.data(graph_data);

    graph.render();
    
    // graph.fitView();
    // 适配屏幕宽度



    };

    onMounted(()=>{
      console.log(knowledge_gragh_ref.value)
      get_gragh_data()
    })

    onBeforeUnmount(()=>{
				graph.destroy();
			})

    return {
      knowledge_gragh_ref,
    };
  },
};
</script>

<style lang="less" scoped>
.graph_container {
  height: 100%;
  width: 100%;
  // background-color: #de4c4c;
}
</style>