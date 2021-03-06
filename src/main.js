var svg = d3.select('body')
            .append('svg:svg')
var map = d3.select('body')
            .append('div')
            .attr('class', 'map')
            .attr('id', 'mapContainer')
var force = d3.layout.force()
              .gravity(-0.1)
              .charge(-30)
              .friction(0.95)
              .linkDistance(100)
              .linkStrength(1)
              .size([700, 500])
var nodes = [
{x: 220, y: 205, fixed: true},
{x: 50, y: 455},
{x: 220, y: 305, fixed: true},
{x: 50, y: 455},
{x: 320, y: 305, fixed: true},
{x: 50, y: 455},
{x: 350, y: 175, fixed: true},
{x: 650, y: 275},
{x: 450, y: 195, fixed: true},
{x: 690, y: 555},
{x: 370, y: 305, fixed: true},
{x: 550, y: 855},
]
var links = [{ source: nodes[0], target: nodes[1]}]
var single = {}
nodes.forEach(function(v,i){
if(!(i%2)){
  single.source = v
}else{
  single.target = v
}
if(i%2){
  links.push(single)
  single = {}
}
})


svg.selectAll('image')
 .data(nodes)
 .enter()
 .append('image')
 .attr('width', 50)
 .attr('height', 50)
 .attr('xlink:href', function(d){
   if(!d.fixed){
    return 'http://bpic.588ku.com/element_origin_min_pic/00/00/00/0056938a5cbfc10.jpg'
   }
 })
 .attr('x', function(d){ return (d.x - 50/2)})
 .attr('y', function(d){ return d.y - 50/2})
 .call(force.drag)
svg.selectAll('circle')
 .data(nodes)
 .enter()
 .append('circle')
 .attr('cx', function(d){
    if(d.fixed){
      return d.x
    }
 })
 .attr('cy', function(d){
   if(d.fixed){
     return d.y
   }
 })
 .attr('r', 7)


svg.selectAll('line')
 .data(links)
 .enter()
 .append('line')
 .attr('class', 'line')
 .attr('x1', function(d){ return d.source.x})
 .attr('y1', function(d){ return d.target.y})
 .attr('x2', function(d){ return d.source.x})
 .attr('y2', function(d){ return d.target.y})

force.nodes(nodes)
force.links(links)
force.start()

force.on('tick', function(){
  svg.selectAll('image')
     .attr('x', function(d){return d.x})
     .attr('y', function(d){ return d.y})

svg.selectAll('line')
   .attr("x1", function (d) {return d.source.x;})
   .attr("y1", function (d) {return d.source.y;})
   .attr("x2", function (d) {return d.target.x;})
   .attr("y2", function (d) {return d.target.y;})
})

// 百度地图API功能
var map = new BMap.Map("mapContainer");    // 创建Map实例
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);
