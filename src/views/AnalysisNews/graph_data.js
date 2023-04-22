export const graph_data = {
  nodes: [
    //属性节点
    // { id: "47", label: "数据来源", type: "概念属性" },

    { id: "48", label: "电影院", type: "概念属性" },
    { id: "49", label: "地址", type: "概念属性" },
    { id: "50", label: "经济性质", type: "概念属性" },
    { id: "51", label: "所属院线", type: "概念属性" },

    //名称
    { id: "1", label: "越界影城IMAX(大学城店)", type: "电影院" },
    { id: "2", label: "嘉裕国际影城(沙坪坝店)", type: "电影院" },
    { id: "3", label: "重庆市图书馆数字电影院", type: "电影院" },
    { id: "4", label: "影立方沙坪坝融汇影城", type: "电影院" },
    { id: "5", label: "文化馆电影院", type: "电影院" },
    { id: "6", label: "重庆歌乐山文化实业开发公司", type: "电影院" },
    { id: "7", label: "重庆沙坪坝区越界影城沙坪坝店", type: "电影院" },
    { id: "8", label: "煌华横店电影院城", type: "电影院" },
    {
      id: "9",
      label: "沙坪坝电影院院（重庆市银河影业有限公司）",
      type: "电影院",
    },
    { id: "10", label: "喜满客影城", type: "电影院" },
    { id: "11", label: "保利万和(富力西城)国际影城", type: "电影院" },
    { id: "12", label: "重庆沙坪坝区逸乐影城", type: "电影院" },
    { id: "13", label: "重庆UME影城（沙坪坝店）", type: "电影院" },
    { id: "14", label: "重庆博纳月鑫影城", type: "电影院" },
    { id: "15", label: "保利万和熙街影城", type: "电影院" },
    { id: "16", label: "重庆逸都电影院", type: "电影院" },

    // 地址
    { id: "17", label: "重庆市沙坪坝区大学城中路旭阳台北城4楼", type: "地址" },
    {
      id: "18",
      label: "重庆市沙坪坝区小龙坎新街40号8-2、9-2号第三、四层部分区域",
      type: "地址",
    },
    { id: "19", label: "重庆市沙坪坝区凤天路106号重大B区", type: "地址" },
    { id: "20", label: "重庆市沙坪坝区汇泉路一号负一号1-3", type: "地址" },
    { id: "21", label: "双巷子街", type: "地址" },
    { id: "22", label: "沙坪坝区烈士墓旁附属房（烈士陵园内）", type: "地址" },
    {
      id: "23",
      label: "重庆市沙坪坝区沙坪坝正街8号附10号自然层7层1-1",
      type: "地址",
    },
    { id: "24", label: "重庆市沙坪坝区双巷子步行街6号附8号", type: "地址" },
    { id: "25", label: "重庆市沙坪坝区小龙坎新街85号负一层", type: "地址" },
    { id: "26", label: "重庆市沙坪坝区双碑九重锦1号5层", type: "地址" },
    { id: "27", label: "重庆市沙坪坝区大学城中路46号1幢4楼", type: "地址" },
    {
      id: "28",
      label: "重庆市沙坪坝区渝培路50-6-2号融信大厦商业裙楼名义层第六层和第七层",
      type: "地址",
    },
    { id: "29", label: "重庆市沙坪坝区天陈路1号附66号、69号", type: "地址" },
    { id: "30", label: "重庆市市辖区沙坪坝区凤天大道37号", type: "地址" },
    { id: "31", label: "重庆市沙坪坝区景苑路8号附1026号", type: "地址" },
    { id: "32", label: "沙坪坝区景苑路8号1幢3F-07", type: "地址" },

    //经济性质
    { id: "33", label: "暂无", type: "经济性质" },
    { id: "34", label: "有限责任公司", type: "经济性质" },
    { id: "35", label: "国有", type: "经济性质" },
    { id: "36", label: "民营", type: "经济性质" },
    { id: "37", label: "有限责任公司（法人独资）", type: "经济性质" },

    //所属院线
    { id: "38", label: "上海联和", type: "所属院线" },
    { id: "39", label: "江苏幸福蓝海", type: "所属院线" },
    { id: "40", label: "<空>", type: "所属院线" },
    { id: "41", label: "华夏联合院线", type: "所属院线" },
    { id: "42", label: "横店院线", type: "所属院线" },
    { id: "43", label: "保利万和", type: "所属院线" },
    { id: "44", label: "广州金逸珠江", type: "所属院线" },
    { id: "45", label: "中影南方新干线", type: "所属院线" },

    //数据来源
    { id: "46", label: "重庆市文化和旅游发展委员会", type: "数据来源" },
  ],
  edges: [
    { source: "48", target: "1", label: "影院名称" },
    { source: "48", target: "2", label: "影院名称" },
    { source: "48", target: "3", label: "影院名称" },
    { source: "48", target: "4", label: "影院名称" },
    { source: "48", target: "5", label: "影院名称" },
    { source: "48", target: "6", label: "影院名称" },
    { source: "48", target: "7", label: "影院名称" },
    { source: "48", target: "8", label: "影院名称" },
    { source: "48", target: "9", label: "影院名称" },
    { source: "48", target: "10", label: "影院名称" },
    { source: "48", target: "11", label: "影院名称" },
    { source: "48", target: "12", label: "影院名称" },
    { source: "48", target: "13", label: "影院名称" },
    { source: "48", target: "14", label: "影院名称" },
    { source: "48", target: "15", label: "影院名称" },
    { source: "48", target: "16", label: "影院名称" },

    {source:'1',target: '17'},
    {source:'2',target: '18'},
    {source:'3',target: '19'},
    {source:'4',target: '20'},
    {source:'5',target: '21'},
    {source:'6',target: '22'},
    {source:'7',target: '23'},
    {source:'8',target: '24'},
    {source:'9',target: '25'},
    {source:'10',target: '26'},
    {source:'11',target: '27'},
    {source:'12',target: '28'},
    {source:'13',target: '29'},
    {source:'14',target: '30'},
    {source:'15',target: '31'},
    {source:'16',target: '32'},

    { source: "1", target: "33" },
    { source: "2", target: "33" },
    { source: "3", target: "33"},
    { source: "4", target: "34" },
    { source: "5", target: "33" },
    { source: "6", target: "35" },
    { source: "7", target: "33" },
    { source: "8", target: "36" },
    { source: "9", target: "35" },
    { source: "10", target: "33"},
    { source: "11", target: "34" },
    { source: "12", target: "33" },
    { source: "13", target: "36" },
    { source: "14", target: "36" },
    { source: "15", target: "37" },
    { source: "16", target: "33" },


    { source: "1", target: "38", },
    { source: "2", target: "39",},
    { source: "3", target: "40",},
    { source: "4", target: "41", },
    { source: "5", target: "40", },
    { source: "6", target: "40", },
    { source: "7", target: "38", },
    { source: "8", target: "42", },
    { source: "9", target: "43", },
    { source: "10", target: "38", },
    { source: "11", target: "43", },
    { source: "12", target: "44", },
    { source: "13", target: "45", },
    { source: "14", target: "43", },
    { source: "15", target: "43", },
    { source: "16", target: "40"},
 

    { source: "49", target: "17", label: "地址" },
    { source: "49", target: "18", label: "地址" },
    { source: "49", target: "19", label: "地址" },
    { source: "49", target: "20", label: "地址" },
    { source: "49", target: "21", label: "地址" },
    { source: "49", target: "22", label: "地址" },
    { source: "49", target: "23", label: "地址" },
    { source: "49", target: "24", label: "地址" },
    { source: "49", target: "25", label: "地址" },
    { source: "49", target: "26", label: "地址" },
    { source: "49", target: "27", label: "地址" },
    { source: "49", target: "28", label: "地址" },
    { source: "49", target: "29", label: "地址" },
    { source: "49", target: "30", label: "地址" },
    { source: "49", target: "31", label: "地址" },
    { source: "49", target: "32", label: "地址" },

    { source: "50", target: "33", label: "经济性质" },
    { source: "50", target: "33", label: "经济性质" },
    { source: "50", target: "33", label: "经济性质" },
    { source: "50", target: "34", label: "经济性质" },
    { source: "50", target: "33", label: "经济性质" },
    { source: "50", target: "35", label: "经济性质" },
    { source: "50", target: "33", label: "经济性质" },
    { source: "50", target: "36", label: "经济性质" },
    { source: "50", target: "35", label: "经济性质" },
    { source: "50", target: "33", label: "经济性质" },
    { source: "50", target: "34", label: "经济性质" },
    { source: "50", target: "33", label: "经济性质" },
    { source: "50", target: "36", label: "经济性质" },
    { source: "50", target: "36", label: "经济性质" },
    { source: "50", target: "37", label: "经济性质" },
    { source: "50", target: "33", label: "经济性质" },

    { source: "51", target: "38", label: "所属院线" },
    { source: "51", target: "39", label: "所属院线" },
    { source: "51", target: "40", label: "所属院线" },
    { source: "51", target: "41", label: "所属院线" },
    { source: "51", target: "40", label: "所属院线" },
    { source: "51", target: "40", label: "所属院线" },
    { source: "51", target: "38", label: "所属院线" },
    { source: "51", target: "42", label: "所属院线" },
    { source: "51", target: "43", label: "所属院线" },
    { source: "51", target: "38", label: "所属院线" },
    { source: "51", target: "43", label: "所属院线" },
    { source: "51", target: "44", label: "所属院线" },
    { source: "51", target: "45", label: "所属院线" },
    { source: "51", target: "43", label: "所属院线" },
    { source: "51", target: "43", label: "所属院线" },
    { source: "51", target: "40", label: "所属院线" },
  ],
};