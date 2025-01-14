import UserProfile from '@/components/UserProfile'

const UserContent = () => import('@/components/UserContent')
const UserDemoGraphics = () => import('@/components/UserDemoGraphics')
const ContentScanner = () => import('@/components/ContentScanner')
const PerformanceTimeline = () => import('@/components/PerformanceTimeline')

export default {
  name: 'Analytics',
  components: {
    UserProfile,
    UserContent,
    UserDemoGraphics,
    ContentScanner,
    PerformanceTimeline
  }
}
