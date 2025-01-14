import { convertToPercentage, formatNumber } from "@/utils/conversions"

export default {
  name: 'UserMetrics',
  props: ['title','data'],
  computed: {
    getValue () {
      if (this.data.type === 'percentage') {
        return convertToPercentage(this.data?.value)
      } else {
        return formatNumber(this.data?.value) + "€"
      }
    },
    getStatus () {
      if (this.data.direction === 'positive') {  
        return 'Excellent'
      } else if (this.data.direction === 'negative') {
        return 'Bad'
      } else {
        return 'Neutral'
      }
    }
  }
}