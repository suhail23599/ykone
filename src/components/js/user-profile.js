import { mapActions } from 'vuex'
import { formatNumber, convertTimeStampToDate } from '@/utils/conversions'
import UserMetrics from '@/components/UserMetrics'

const UserQuality = () => import('@/components/UserQuality')

export default {
  name: 'UserProfile',
  data() {
    return {
      profileData: null,
    }
  },
  components: {
    UserMetrics,
    UserQuality
  },
  mounted () {
    this.getDetails()
  },
  methods: {
    ...mapActions([
      'getProfileDetails'
    ]),
    getDetails () {
      this.getProfileDetails().then((response) => {
        this.profileData = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    convertToReadableFormat (number) {
      return formatNumber(number)
    },
    convertTimestampToDate (timestamp) {
      return convertTimeStampToDate(timestamp)
    }
  }
}