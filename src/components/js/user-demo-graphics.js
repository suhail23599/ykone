import GenderGraphics from '@/components/GenderGraphics'
import AgeGraphics from '@/components/AgeGraphics'
import EthnicityGraphics from '@/components/EthnicityGraphics'
import CountryGraphics from '@/components/CountryGraphics'
import { mapActions } from 'vuex'

export default {
  name: 'UserDemoGraphics',
  data () {
    return {
      ethnicityData: null
    }
  },
  components: {
    GenderGraphics,
    EthnicityGraphics,
    AgeGraphics,
    CountryGraphics,
  },
  mounted () {
    this.getEthnicityData()
  },
  methods: {
    ...mapActions([
      'getEthnicityDetails'
    ]),
    getEthnicityData () {
      this.getEthnicityDetails().then((response) => {
        this.ethnicityData = response.data
        console.log(this.ethnicityData, 'ethnicity')
      }).catch((error) => { 
        console.log(error)
      })
    }
  }
}