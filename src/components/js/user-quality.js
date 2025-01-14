import RadarGraph from '@/components/charts/RadarGraph'

export default {
  name: 'UserQuality',
  props: ['data'],
  components: {
    RadarGraph
  },
  computed: {
    getStatus () {
      if (this.data.direction === 'positive') {  
        return 'Excellent'
      } else if (this.data.direction === 'negative') {
        return 'Bad'
      } else {
        return 'Average'
      }
    }
  }
}