import { convertToPercentage } from '@/utils/conversions'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  name: 'EthnicityGraphics',
  data () {
    return {
      sortedData: []
    }
  },
  props: ['data'],
  mounted () {
    this.sortedData = this.data.sort((a, b) => b.weight - a.weight)
    this.sortedData = this.sortedData.map(item => {
      return {
        ...item,
        weight: convertToPercentage(item.weight, false)
      }
    })
    this.renderChart()
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('ethnicity-graph').getContext('2d')
      const labels = this.sortedData.map(item => item.name)
      const data = this.sortedData.map(item => item.weight)
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [
            {
              data,
              borderWidth: 2,
              pointRadius: 6,
              pointBackgroundColor: ['#64FFAA', ...Array(data.length - 1).fill('#8C96FF')],
              pointBorderWidth: 0,
              fill: false,
              showLine: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            r: {
              angleLines: {
                display: true,
                borderDash: [2, 3],
                color: 'rgba(255, 255, 255, 1)',
              },
              grid: {
                display: true,
                circular: true,
                color: 'rgba(255, 255, 255, 0.05)',
              },
              pointLabels: {
                color: 'rgba(255, 255, 255, 0.6)',
                font: {
                  size: 14,
                }
              },
              ticks: {
                display: false,
                count: this.sortedData.length
              },
              suggestedMin: 0,
              suggestedMax: 100
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        }
      })
    }
  }
}