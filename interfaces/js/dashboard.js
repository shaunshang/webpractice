function drawLine(fill, stroke) {
  var data = {
      labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40,50,90,70,22,40]
        },
        {
          fillColor : fill,
          strokeColor : stroke,
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100,80,70,40,55,60]
        }
      ]
  }
  var lc = document.getElementById("line-chart").getContext("2d");
  var myNewChart = new Chart(lc).Line(data, {animation : false});
}  

function drawPie(fill) {
  var data = [
    {
      value: 30,
      color: "rgba(240,133,59,1)"
    },
    {
      value : 50,
      color : "rgba(220,220,220,1)"
    },
    {
      value : 100,
      color : fill
    }     
  ]
  var pc = document.getElementById("pie-chart").getContext("2d");
  var myNewChart = new Chart(pc).Pie(data, {animation : false});
}

function drawBar(fill, stroke) {
  var data = {
    labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        data : [65,59,90,81,56,55,40]
      },
      {
        fillColor : fill,
        strokeColor : stroke,
        data : [28,48,40,19,96,27,100]
      }
    ]
  }
  var bc = document.getElementById("bar-chart").getContext("2d");
  var myNewChart = new Chart(bc).Bar(data, {animation : false});
}