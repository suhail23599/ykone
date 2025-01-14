import { mapActions } from "vuex"
import { addDelimiter } from  '@/utils/conversions'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import 'chartjs-adapter-date-fns'
export default {
  name: 'PerformanceTimeline',
  data () {
    return {
      performanceData: {},
      followers: [],
      interactions: []
    }
  },
  mounted () {
    this.getDetails()
  },
  methods: {
    ...mapActions([
      'getPerformanceDetails'
    ]),
    getDetails () {
      this.getPerformanceDetails().then((response) => {
        this.performanceData = response.data
        this.followers = this.performanceData.followers
        this.interactions = this.performanceData.interactions
        this.renderChart()
      }).catch((error) => {
        console.log(error)
      })
    },
    renderChart() {
      const ctx = document.getElementById('performance-graph').getContext('2d')
      new Chart(ctx, {
        type: 'line',
        data: this.getData(),
        options: this.getOptions()
      })
    },
    getData () {
      const followersData = this.followers.map(follower => follower.followers.value)
      const data = {
        labels: this.followers.map(data => new Date(data.date)),
        datasets: [
          {
            label: 'Followers',
            data: followersData,
            borderColor: '#8C96FF',
            pointBackgroundColor: '#FFFF',
            pointBorderColor: '#8C96FF',
            pointRadius: 5,
            pointBorderWidth: 1,
            tension: 0.4,
          }
        ]
      }
      return data
    },
    getOptions () {
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            backgroundColor: '#282B41',
            borderColor: 'rgba(255, 255, 255, 0.5)', 
            borderWidth: 1,
            cornerRadius: 1,
            displayColors: false,
            titleAlign: 'center',
            bodyAlign: 'center', 
            callbacks: {
              labelTextColor: () => '#FFFFFF99',
              label: item => {
                return `Followers on ${item.label}`
              },
              title: item => {
                return `${addDelimiter(item[0].raw)}`
              }
            },
            padding: 6,
            titleFont: { size: 20 },
            bodyFont: { size: 12 },
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: { month: 'MMMM' }
            },
            grid: {
              display: true,
              borderDash: [4, 4],
              color: 'rgba(255, 255, 255, 0.2)'
            },
            ticks: {
              color: '#FFFFFF99'
            }
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              display: false,
              stepSize: 20_000_00
            },
          }
        }
      }
      return options
    }
  }
}