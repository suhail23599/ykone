import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend)
export default {
  name: 'AgeGraphics',
  props: ['data'],
  data () {
    return {

    }
  },
  mounted () {
    this.renderChart()
  },
  methods: {
    renderChart () {
      const ctx = document.getElementById('age-graph').getContext('2d')
      const sortedData = Object.keys(this.data)
        .sort((a, b) => {
          const startA = parseInt(a.split('-')[0], 10)
          const startB = parseInt(b.split('-')[0], 10)
          return startA - startB;
        })
        .reduce((acc, key, index, array) => {
          const newKey = index === array.length - 1 ? key.replace('-', '+') : key
          acc[newKey] = this.data[key];
          return acc;
        }, {})
      const labels = Object.keys(sortedData)
      const values = Object.values(sortedData)
      const backgroundColors = Array(labels.length).fill('#8C96FF')
      const maxValueIndex = values.indexOf(Math.max(...values))
      backgroundColors[maxValueIndex] = '#64FFAA'
      console.log()
      new Chart (ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: backgroundColors,
              borderColor: '#2C2F45',
              borderWidth: 1, 
            }
          ]
        },
        options: {
          responsive: true,
          barPercentage: 0.1,
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#FFFFFF99'
              },
              border: {
                display: false,
              }
            },
            y: {
              beginAtZero: true,
              display: false
            },
          },
          plugins: {
            legend: {
              display: false
            },
          },
          layout: {
            padding: {
              bottom: 10
            }
          },
          elements: {
            bar: {
              borderRadius: 8,
              barPercentage: 0.5,
              categoryPercentage: 1,
            },
          }
        }
      })
    }
  }
}