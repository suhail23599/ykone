import { convertToPercentage } from "@/utils/conversions"
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, CategoryScale, LinearScale);
export default {
  name: 'GenderGraphics',
  props: ['data'],
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.renderChart()
  },
  methods: {
    renderChart () {
      const ctx = document.getElementById('gender-graph').getContext('2d')
      const female = convertToPercentage(this.data?.FEMALE, false)
      const male = convertToPercentage(this.data?.MALE, false)
      const maxValue = Math.max(female, male)

      const centerTextPlugin = {
        id: 'centerTextPlugin',
        afterDraw(chart) {
          const { ctx, chartArea: { width, height } } = chart
          const text = chart.config?.options?.centerTextPlugin?.text || ''
          const textColor = female >= male ? '#64FFAA' : '#8C96FF'
          ctx.save()
          ctx.font = '32px IBM Plex Sans'
          ctx.fillStyle = textColor
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(text, width / 2, height / 2)

          ctx.font = '16px IBM Plex Sans';
          ctx.fillStyle = '#a6a6b3';
          const fontText = female >= male ? 'Female' : 'Male';
          ctx.fillText(fontText, width / 2, height / 2 + 30);
          ctx.restore()
        }
      }

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Female', 'Male'],
          datasets: [
            {
              data: [female, male],
              backgroundColor: ['#64FFAA', '#8C96FF'],
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              cutout: '90%',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          },
          centerTextPlugin: {
            text: `${maxValue}%`
          }
        },
        plugins: [centerTextPlugin]
      })
    },
    convertToPercentage (value) {
      return convertToPercentage(value)
    }
  }
}