
const base_path = 'https://staging.campaygn.com/assessment'

const paths = {
  profile_data: `${base_path}/profile_data`,
  content_data: (page, filter) => `${base_path}/post_data/${page}?sort_by=${filter}`,
  audience_data: `${base_path}/audience_demographics`,
  performance_data: `${base_path}/performance_timeline`
}

export default paths