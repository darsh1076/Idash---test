var rpmchart, speedchart;
var speedchart= new Highcharts.chart('container1', {

    chart: {
        //renderTo: 'container',
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Speedometer'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 1, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
          //  outerRadius: '109%'
              outerRadius: '120%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 1, y1: 0, x2: 0, y2: 1 },
                stops: [
                    //[0, '#333'],
                    [0, '#0000'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
          //  backgroundColor: '#DDD',
            backgroundColor: '#0000',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        //minorTickColor: '#666',
        minorTickColor: '#6969',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ' km/h'
        }
    }]

},

function (chart) {
    setInterval(

      function () {
          //var point = chart.series[0].points[0];

         $.get("chart.php", function (data1) {


           //newVal=JSON.parse(newVal);
        //  var local=parseInt(newVal.speed)
            //x=parseInt(newVal.speed);

          //  chart.series[0].setData(data1);
           //chart1.series[0].setData(data1);


            //speed gauge
            var point = speedchart.series[0].data[0];
            newVal = data1.speed;
            point.update(newVal);

            //rpm gauge
            var point1 = rpmchart.series[0].data[0];
            newVal = data1.rpm;
            point1.update(newVal);



            //line graph

           // var series = chart1.series[0];
           // shift = series.data.length > 20; // shift if the series is
           // array=[data1.speed,data1.rpm]                                          // longer than 20
           // chart1.series[0].addPoint(array, true, shift);



      // chart.series[0].addPoint(newVal, true, shift)
      //  chart1.series[0].addPoint(newval, true, shift);
          //  chart1.series[0].setData(newVal);
            //  document.write(newVal[0])
        //   chart1.series[0].addPoint(newval, true, shift);
            // point.update(parseFloat(newVal));
        });
    }, 1000);
  });
//});


//
// var chart;
//
// function requestData() {
//     $.ajax({
//         url: 'chart.php',
//         success: function(point) {
//             var series = chart.series[0],
//                 shift = series.data.length > 20; // shift if the series is
//                                                  // longer than 20
//
//             // add the point
//             chart.series[0].addPoint(point, true, shift);
//
//             // call it again after one second
//             setTimeout(requestData, 1000);
//         },
//         cache: false
//     });
// }

rpmchart=new Highcharts.chart('container2', {

    chart: {
        //renderTo: 'container',
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Rpm'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 1, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
          //  outerRadius: '109%'
              outerRadius: '120%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 1, y1: 0, x2: 0, y2: 1 },
                stops: [
                    //[0, '#333'],
                    [0, '#0000'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
          //  backgroundColor: '#DDD',
            backgroundColor: '#0000',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 10,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 1,
        minorTickPosition: 'inside',
        //minorTickColor: '#666',
        minorTickColor: '#6969',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 1,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Rpm X 1000'
        },
        plotBands: [{
            from: 0,
            to: 3,
            color: '#55BF3B' // green
        }, {
            from: 3,
            to: 6,
            color: '#DDDF0D' // yellow
        }, {
            from: 6,
            to: 9,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Rpm',
        data: [3],
        tooltip: {
            valueSuffix: ' X 1000 Rpm'
        }
    }]

}

);

var chart = AmCharts.makeChart("chartdiv", {
  "theme": "light",
  "type": "gauge",
  "axes": [{
    "topTextFontSize": 20,
    "topTextYOffset": 70,
    "axisColor": "#31d6ea",
    "axisThickness": 1,
    "endValue": 100,
    "gridInside": true,
    "inside": true,
    "radius": "50%",
    "valueInterval": 10,
    "tickColor": "#67b7dc",
    "startAngle": -90,
    "endAngle": 90,
    "unit": "%",
    "bandOutlineAlpha": 0,
    "bands": [{
      "color": "#0080ff",
      "endValue": 100,
      "innerRadius": "105%",
      "radius": "170%",
      "gradientRatio": [0.5, 0, -0.5],
      "startValue": 0
    }, {
      "color": "#3cd3a3",
      "endValue": 0,
      "innerRadius": "105%",
      "radius": "170%",
      "gradientRatio": [0.5, 0, -0.5],
      "startValue": 0
    }]
  }],
  "arrows": [{
    "alpha": 1,
    "innerRadius": "35%",
    "nailRadius": 0,
    "radius": "170%"
  }]
});

setInterval(randomValue, 2000);

// set random value
function randomValue() {
  var value = Math.round(Math.random() * 100);
  chart.arrows[0].setValue(value);
  chart.axes[0].setTopText(value + " %");
  // adjust darker band to new value
  chart.axes[0].bands[1].setEndValue(value);
}