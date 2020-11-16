const dashboardNASDAQChart = {
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    datasets: [
      {
        label: 'planejado',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "#F4F3EF",
        backgroundColor: "#52CAF9",
        pointBorderColor: "#52CAF9",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },

      {
        label: 'dentro do prazo',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "#F4F3EF",
        backgroundColor: "#5CFFA4",
        pointBorderColor: "#5CFFA4",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },

      {
        label: 'atrasado',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: true,
        borderColor: "#F4F3EF",
        backgroundColor: "#FF5F49",
        pointBorderColor: "#FF5F49",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Quantidade de Produtos'
        }
      }],

      xAxes: [{
        ticks: {
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Meses'
        }
      }],
    }
  }
};

const grafico1 = {
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    datasets: [
      {
        label: 'planejado',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: true,
        borderColor: "#F4F3EF",
        backgroundColor: "#52CAF9",
        pointBorderColor: "#52CAF9",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Quantidade de Produtos'
        }
      }],

      xAxes: [{
        ticks: {
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Meses'
        }
      }],
    }
  }
};

const grafico2 = {
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    datasets: [
      {
        label: 'dentro do prazo',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "#F4F3EF",
        backgroundColor: "#5CFFA4",
        pointBorderColor: "#51BCDA",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Quantidade de Produtos'
        }
      }],

      xAxes: [{
        ticks: {
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Meses'
        }
      }],
    }
  }
};

const grafico3 = {
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    datasets: [
      {
        label: 'atrasado',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "#F4F3EF",
        backgroundColor: "#FF5F49",
        pointBorderColor: "#FFFFFF",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Quantidade de Produtos'
        }
      }],

      xAxes: [{
        ticks: {
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Meses'
        }
      }],
    }
  }
};


const grafico4 = {
  data: {
    labels: [
      "Planejados",
      "Dentro do Prazo",
      "Atrasados"
    ],
    datasets: [
      {
        data: [10, 10, 10],
        fill: false,
        borderColor: ["#F4F3EF","#F4F3EF","#F4F3EF"],
        backgroundColor: ["#52CAF9","#5CFFA4","#FF5F49"],
        pointBorderColor: ["#52CAF9","#5CFFA4", "#FFFFFF"],
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8              
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
   }
};

const graficoDou = {
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    datasets: [
      {
        label: 'planejado',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "#F4F3EF",
        backgroundColor: "#52CAF9",
        pointBorderColor: "#52CAF9",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Quantidade de Publicações'
        }
      }],

      xAxes: [{
        ticks: {
          beginAtZero: true
         },
        scaleLabel: {
          display: true,
          labelString: 'Dias do Mês'
        }
      }],
    }
  }
};


module.exports = {
  dashboardNASDAQChart,
  grafico1,
  grafico2,
  grafico3,
  grafico4,
  graficoDou
};
