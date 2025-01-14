import { convertToPercentage } from "@/utils/conversions"
export default {
  name: 'CountryGraphics',
  props: ['data'],
  data () {
    return {
      modifiedData: []
    }
  },
  mounted () {
    this.sortData()
  },
  methods: {
    sortData () {
      const sortedArray = Object.entries(this.data).sort(([, a], [, b]) => b - a)
      this.modifiedData = sortedArray.map(([key, value]) => {
        return {
          key,
          value: convertToPercentage(value, false)
        }
      })
    }
  }
}