
Highcharts.chart('growth-water2022', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Вода - рост показателей приборов учёта'
    },
    xAxis: {
        categories: ['Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'м³'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'ГВС',
        data: [29.414, 34.051, 39.001, 41.156, 43.772, 44.924, 47.421, 51.658, 56.042]
    }, {
        name: 'ХВС',
        data: [54.009, 63.404, 74.255, 84.495, 95.695, 108.286, 118.082, 130.632, 142.49]
    }]
});
Highcharts.chart('water-consumption2022', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Расход воды'
    },
    xAxis: {
        categories: ['Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'м³'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'ГВС',
        data: [4.637, 4.95, 2.155, 2.616, 1.152, 2.497, 4.237, 4.384, 3.839]
    }, {
        name: 'ХВС',
        data: [9.395, 10.851, 10.24, 11.2, 12.591, 9.796, 12.55, 11.858, 9.577]
    }]
});




//=======================================================================================




Highcharts.chart('growth-electricity2022', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Электричество - рост показателей приборов учёта'
    },
    xAxis: {
        categories: ['Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'кВт'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Свет-1',
        data: [30919, 31026.04, 31130.35, 31255.22, 31403.17, 31536.75, 31631.31, 31751.53, 31883.92]
    }, {
        name: 'Свет-2',
        data: [9663, 9709.42, 9752.13, 9798.83, 9846.44, 9889.29, 9917.58, 9951.83, 9987.11]
    }, {
        name: 'Свет-3',
        data: [40585.47, 40735.47, 40882.48, 41054.05, 41249.61, 41426.04, 41549.89, 41703.36, 41871.03]
    }]
});
Highcharts.chart('electricity-consumption2022', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Расход электричества'
    },
    xAxis: {
        categories: ['Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'кВт'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Свет-1',
        data: [107.04, 104.31, 124.87, 147.95, 133.58, 94.56, 120.22, 132.39, 98.58]
    }, {
        name: 'Свет-2',
        data: [46.42, 42.71, 46.7, 47.61, 42.85, 28.29, 34.25, 35.28, 33.65]
    }, {
        name: 'Свет-3',
        data: [150, 147.01, 171.57, 195.56, 176.43, 123.85, 153.47, 167.67, 132.23]
    }]
});





//=======================================================================================




Highcharts.chart('utility-bills2022', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Коммунальные платежи'
    },
    xAxis: {
        categories: ['Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: '₽'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'платежи',
        data: [0, 0, 3010, 2365, 3380, 2274.23, 2220.91, 2143.96, 3111.07]
    }]
});

























Highcharts.chart('growth-water2023', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Вода - рост показателей приборов учёта'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'м³'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'ГВС',
        data: [59.881, 64.276, 68.829, 73.422, 77.671, 81.531, 82.734, 0, 0, 0, 0, 0]
    }, {
        name: 'ХВС',
        data: [152.067, 162.561, 173.479, 184.05, 194.677, 205.62, 215.743, 0, 0, 0, 0, 0]
    }]
});
Highcharts.chart('water-consumption2023', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Расход воды'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'м³'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'ГВС',
        data: [4.395, 4.553, 4.593, 4.249, 3.86, 1.203, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'ХВС',
        data: [10.494, 10.918, 10.571, 10.627, 10.943, 10.123, 0, 0, 0, 0, 0, 0]
    }]
});




//=======================================================================================




Highcharts.chart('growth-electricity2023', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Электричество - рост показателей приборов учёта'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'кВт'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Свет-1',
        data: [31982.5, 32131.79, 32264.31, 32388.16, 32518.76, 32641.52, 32756.5, 0, 0, 0, 0, 0,]
    }, {
        name: 'Свет-2',
        data: [10020.76, 10063.95, 10108.39, 10152.95, 10194.78, 10233.23, 10275.94, 0, 0, 0, 0, 0,]
    }, {
        name: 'Свет-3',
        data: [42003.26, 42195.74, 42372.7, 42541.12, 42713.54, 42874.75, 43032.44, 0, 0, 0, 0, 0,]
    }]
});
Highcharts.chart('electricity-consumption2023', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Расход электричества'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'кВт'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Свет-1',
        data: [149.29, 132.52, 123.85, 130.6, 122.76, 114.98, 0, 0, 0, 0, 0, 0,]
    }, {
        name: 'Свет-2',
        data: [43.19, 44.44, 44.56, 41.83, 38.45, 42.71, 0, 0, 0, 0, 0, 0,]
    }, {
        name: 'Свет-3',
        data: [192.48, 176.96, 168.42, 172.42, 161.21, 157.69, 0, 0, 0, 0, 0, 0,]
    }]
});




//=======================================================================================




Highcharts.chart('utility-bills2023', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Коммунальные платежи'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: '₽'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'платежи',
        data: [2588.96, 3183.77, 3078.45, 3387.67, 3140.76, 3178.91, 0, 0, 0, 0, 0, 0,]
    }]
});

























Highcharts.chart('growth-water2024', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Вода - рост показателей приборов учёта'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'м³'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'ГВС',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'ХВС',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
});
Highcharts.chart('water-consumption2024', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Расход воды'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'м³'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'ГВС',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'ХВС',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
});




//=======================================================================================




Highcharts.chart('growth-electricity2024', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Электричество - рост показателей приборов учёта'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'кВт'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Свет-1',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'Свет-2',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'Свет-3',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
});
Highcharts.chart('electricity-consumption2024', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Расход электричества'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: 'кВт'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Свет-1',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'Свет-2',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'Свет-3',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
});




//=======================================================================================




Highcharts.chart('utility-bills2024', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Коммунальные платежи'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    yAxis: {
        title: {
            text: '₽'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {enabled: true},
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'платежи',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
});



































