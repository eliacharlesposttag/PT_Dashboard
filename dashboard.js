//SIDE BAR ANIMATION
// var mini = true;

// function toggleSidebar() {
//   if (mini) {
//     console.log("opening sidebar");
//     document.getElementById("sidebarMenu").style.width = "250px";
//     // document.getElementById("main").style.marginLeft = "250px";
//     this.mini = false;
//   } else {
//     console.log("closing sidebar");
//     document.getElementById("sidebarMenu").style.width = "85px";
//     // document.getElementById("main").style.marginLeft = "85px";
//     this.mini = true;
//   }
// }

//BAR CHARTS

const START=1, END=31;
var xValues = Array.from({length: END-START}, (x, i) => i+START);

const barChartOverview = {
  labels: xValues,
  datasets:[{
    label: 'Prime',
    data: Array.from({length: END-START}, (x, i) => Math.floor(Math.random()*100)+50),
    backgroundColor: "#0e385e",
    stack: 'Prime Stack'
  },{
    label: 'Postcode Prime',
    data: Array.from({length: END-START}, (x, i) => Math.floor(Math.random()*50)+10),
    backgroundColor: "#00a99d",
    stack: 'Prime Stack'
  }
]
}
const configBar = {
  type: 'bar',
  data: barChartOverview,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total Usage',
          beginAtZero:true,
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Days'
        }
      }]
      
    }
  }
};

const myBarChartOverview = new Chart(
  document.getElementById('overview-bar'),
  configBar
);


// LINE CHARTS


const lineChartOverview = {
  labels: xValues,
  datasets:[{
    label:'Unverified',
    data: Array.from({length: END-START}, (x, i) => Math.floor(Math.random()*2)+1),
    lineTension:0,
    fill: false,
    borderColor: '#8a8c8e',
  },{
    label:'Non-findable',
    data: Array.from({length: END-START}, (x, i) => Math.floor(Math.random()*2)+6),
    lineTension:0,
    fill: false,
    borderColor: "#b91d47",
  }]
}

const configLine ={
  type:'line',
  data:lineChartOverview,
  options:{
    responsive:true,
    plugins:{
      legend:{
        position:'top'
      }

    },
    scales: {
      y:{
        
      },
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '%',
        },
        beginAtZero:true
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Days'
        }
      }]
    }
  }
}

const myLineChartOverview = new Chart(
  document.getElementById('overview-line'),
  configLine
);


// PIE CHARTS 

const OverviewPie = {
  labels: ['PostTag Verified', 'Unverified', 'Non-findable'],
  datasets: [
    {
      label: 'Performance',
      data: [93,2,5],
      backgroundColor: ["#0e385e","#00a99d","#b91d47"]
    }
  ]
};

const configPieOverView = {
  type: 'doughnut',
  data: OverviewPie ,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overview Performance'
      }
    }
  },
};

const myPieChartOverview = new Chart(
  document.getElementById('overview-pie'),
  configPieOverView
);


const OverviewBreakdownPie = {
  labels: ['Foreign', 'Bad Request', 'Insufficient Tokens'],
  datasets: [
    {
      label: 'Performance',
      data: [30,20,50],
      backgroundColor: ["#0e385e","#00a99d","#b91d47"]
    }
  ]
};

const configBreakdownPieOverView = {
  type: 'doughnut',
  data: OverviewBreakdownPie ,
  options: {
    // responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overview Performance'
      }
    }
  },
};

const myBreakdownPieChartOverview = new Chart(
  document.getElementById('overview-breakdown-pie'),
  configBreakdownPieOverView
);