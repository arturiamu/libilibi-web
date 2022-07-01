<template>
  <div id="data">
    <div id="main" style="width: 100%;height: 500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {httpGet} from "@/js/https";

export default {
  name: "Data",
  mounted() {

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };

    //发送请求到后端请求数据

    httpGet("/echarts/videoHeatUser").then(res => {
      console.log(res)
      if(res.state === 200){
        //将后端得到的数据放入数组中
        // console.log(res)
        let v = []
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i] < 0.5)continue;
          let vi = {
            value:res.data.data[i],
            name:res.data.itemName[i] + "专区",
          }
          v.push(vi)
        }
        option.series[0].data = v
        option && myChart.setOption(option);
      }
    })
  }
}
</script>

<style scoped>
#data{

}
</style>