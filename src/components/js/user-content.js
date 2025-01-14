import { mapActions } from "vuex"
import { formatTimestamp, convertToPercentage, formatNumber } from "@/utils/conversions"
export default {
  name: 'UserContent',
  data () {
    return {
      filters: [
        {
          value: 'DATE',
          sortby: 'created_at',
        },
        {
          value: 'REACH',
          sortby: 'reach',
        },
        {
          value: 'IMPRESSIONS',
          sortby: 'impressions',
        },
        {
          value: 'ENGAGEMENT',
          sortby: 'engagement_rate',
        },
        {
          value: 'INTERACTIONS',
          sortby: 'interactions',
        },
        {
          value: 'EMV',
          sortby: 'media_value'
        }
      ],
      selectedFilter: {
        value: 'DATE',
        sortby: 'created_at'
      },
      contentData: [],
      currentPage: 0,
      hoveredIndex: -1,
      metricFields: {
        reach: 'Reach',
        impressions: 'Impressions',
        engagement_rate: 'Engagement',
        interactions: 'Interactions',
        media_value: 'Influencer EMV',
        likes_count: 'Likes',
      }
    }
  },
  mounted () {
    this.getContentData()
  },
  methods: {
    ...mapActions([
      'getContentDetails'
    ]),
    selectFilter (filter) {
      this.currentPage = 0
      this.selectedFilter = filter
      this.contentData = []
      this.getContentData()
    },
    getContentData () {
      this.getContentDetails({
        page: this.currentPage,
        filter: this.selectedFilter.sortby
      }).then((response) => {
        this.contentData = [...this.contentData, ...response.data] || []
      }).catch((error) => {
        console.log(error)
      })
    },
    handleMouseHover (index) {
      this.hoveredIndex = index
    },
    formatDate (timestamp) {
      return formatTimestamp(timestamp)
    },
    getMetricValue (metric) {
      if (metric.type === 'percentage') {
        return convertToPercentage(metric.value)
      } else if (metric.type === 'numerical_short_scale') {
        return formatNumber(metric.value)
      } else {
        return formatNumber(metric.value) + "€"
      }
    },
    loadMore () {
      this.currentPage += 1
      this.getContentData()
    }
  },
}