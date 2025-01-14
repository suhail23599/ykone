import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js"

export default {
  name: 'RadarGraph',
  props: ['data'],
  mounted () {
    Chart.register(
      RadarController,
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler,
      Tooltip,
      Legend
    )
    this.renderGraph()
  },
  methods: {
    renderGraph () {

      const customPlugin = {
        afterEvent(chart, args) {
          const { event } = args
          const { scales, canvas } = chart
          const rScale = scales.r
          const maxRadius = rScale.getDistanceFromCenterForValue(rScale.max)
          const angleStep = (Math.PI * 2) / rScale._pointLabels.length
          let hoveredDot = null

          rScale._pointLabels.forEach((label, index) => {
            const angle = index * angleStep - Math.PI / 2
            const x = rScale.xCenter + Math.cos(angle) * maxRadius
            const y = rScale.yCenter + Math.sin(angle) * maxRadius

            const distance = Math.sqrt((event.x - x) ** 2 + (event.y - y) ** 2)
            if (distance < 10) {
              hoveredDot = {
                label,
                x,
                y
              }
            }
          })

          const tooltipEl = document.getElementById("tooltip")
          if (hoveredDot) {
            const rect = canvas.getBoundingClientRect()
            tooltipEl.style.opacity = 1
            tooltipEl.style.left = `${rect.left + hoveredDot.x - tooltipEl.offsetWidth / 2}px`
            tooltipEl.style.top = `${rect.top + hoveredDot.y - tooltipEl.offsetHeight - 10}px`
            tooltipEl.innerText = `${hoveredDot.label.toUpperCase()}`
          } else {
            tooltipEl.style.opacity = 0
          }
        },
        afterDraw (chart) {
          const { ctx, scales } = chart
          const rScale = scales.r
          const maxRadius = rScale.getDistanceFromCenterForValue(rScale.max)
          const angleStep = (Math.PI * 2) / rScale._pointLabels.length
          rScale._pointLabels.forEach((label, index) => {
            const angle = index * angleStep - Math.PI / 2
            const x = rScale.xCenter + Math.cos(angle) * maxRadius
            const y = rScale.yCenter + Math.sin(angle) * maxRadius

            ctx.beginPath()
            ctx.arc(x, y, 5, 0, 2 * Math.PI)
            ctx.fillStyle = "#FF9F40"
            ctx.fill()
            ctx.closePath()
          })
        }
      }

      const ctx = document.getElementById('radar-graph').getContext('2d')
      const values =  Object.values(this.data)
      new Chart (ctx, {
        type: "radar",
        data: {
          labels: Object.keys(this.data),
          datasets: [
            {
              data: values,
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderColor: "rgba(255, 255, 255, 0.25)",
              borderWidth: 3,
              pointBackgroundColor: "#FF9F40",
              pointBorderColor: "#fff",
              pointRadius: 0,
              pointHoverRadius: 0,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 20,
              right: 20
            }
          },
          scales: {
            r: {
              angleLines: {
                display: false
              },
              grid: {
                circular: true,
                color: "rgba(255, 255, 255, 0.2)"
              },
              pointLabels: {
                display: false
              },
              ticks: {
                display: false,
                count: 5,
                // max: 40,
                // backdropColor: "transparent"
              }
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
        },
        plugins: [customPlugin]
      })
    }
  }
}