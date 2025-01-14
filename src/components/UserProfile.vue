<template>
  <div v-if="profileData" class="profile-wrapper">
    <div class="profile-picture border">
      <img
        :src="profileData.profile_display_picture" 
        alt="profile-picture"
        class="profile-picture__img"
      >
    </div>
    <div class="profile-bio border">
      <div class="profile-bio__header">
        <div class="profile-bio__header-section-1 flex-align">
          <div>
            {{ profileData?.profile_name }}
          </div>
          <div>
            {{ convertToReadableFormat(profileData?.profile_followers.value) }}
          </div>
        </div>
        <div class="profile-bio__header-section-2 flex-align">
          <div>
            @{{ profileData.profile_username }}
          </div>
          <div>
            Followers
          </div>
        </div>
      </div>
      <div class="profile-bio__info">
        <div class="profile-bio__info-section-1 flex-align">
          <div class="bio-align">
            <img src="@/assets/images/flag.svg" alt="influencer-type">
            <span class="text-transform">
              {{ profileData.profile_type }}
            </span>
          </div>
          <div class="bio-align">
            <img src="@/assets/images/location.svg" alt="location">
            <span class="text-transform">
              {{ profileData.profile_country.name }}
            </span>
          </div>
        </div>
        <div class="profile-bio__info-section-2 flex-align">
          <div class="bio-align">
            <img src="@/assets/images/theme.svg" alt="theme">
            <span class="text-transform">
              {{ profileData.profile_theme.join(', ') }}
            </span>
          </div>
          <div class="bio-align">
            <img src="@/assets/images/gender.svg" alt="theme">
            <span>
              {{ profileData.profile_gender === 'f' ? 'Female' : 'Male' }}
            </span>
          </div>
        </div>
        <div class="flex-align">
          <div class="bio-align">
            <img src="@/assets/images/hashtag.svg" alt="theme">
            <span class="text-transform">
              {{ profileData.profile_keyword.join(', ') }}
            </span>
          </div>
        </div>
        <div class="flex-align">
          <div class="bio-align">
            <img src="@/assets/images/instagram.svg" alt="instagram">
            <img src="@/assets/images/youtube.svg" alt="youtube">
            <img src="@/assets/images/email.svg" alt="email">
          </div>
          <div class="created-date">
            Added on {{ convertTimestampToDate(profileData.profile_created_at) }}
          </div>
        </div>
      </div>
    </div>
    <UserQuality
      class="profile-score border"
      :data="profileData.profile_quality"
    >
    </UserQuality>
    <UserMetrics
      class="profile-engagement border"
      title="ENGAGEMENT RATE"
      :data="profileData.profile_engagement_rate"
    >
    </UserMetrics>
    <UserMetrics
      class="profile-active border"
      title="ACTIVE FOLLOWERS"
      :data="profileData.profile_active_followers"
    >
    </UserMetrics>
    <UserMetrics
      class="profile-emv border"
      title="EMV"
      :data="profileData.profile_media_value"
    >
    </UserMetrics>
  </div>
</template>

<script src="./js/user-profile.js"></script>

<style scoped>
.profile-wrapper {
  min-height: 300px;
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas: 
    "picture bio engagement"
    "picture bio engagement"
    "picture bio profile-active"
    "picture score profile-active"
    "picture score emv"
    "picture score emv";
  gap: 8px;
  color: #FFFFFF;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "picture bio"
      "picture bio"
      "engagement engagement"
      "engagement engagement"
      "profile-active profile-active"
      "profile-active profile-active"
      "score score"
      "score score"
      "emv emv"
      "emv emv";
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "picture"
      "bio"
      "score"
      "engagement"
      "profile-active"
      "emv";
  }
}
.profile-picture {
  grid-area: picture;
}
.profile-picture__img {
  width: 100%;
  height: 100%;
}
.profile-bio {
  padding: 24px;
  grid-area: bio;
}
.profile-bio__header {
  color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #36394E;
  padding-bottom: 16px;
}
.profile-bio__header-section-1 {
  font-size: 20px;
}
.profile-bio__header-section-1 > div:first-child::after {
  content: url('../assets/images/verified.svg');
}
.profile-bio__header-section-2 {
  color: #FFFFFF99;
}
.profile-bio__info {
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.text-transform::first-letter{
  text-transform: uppercase;
}
.profile-score {
  padding: 24px;
  grid-area: score;
}
.created-date {
  color: #FFFFFF99;
}

.profile-engagement {
  grid-area: engagement;
}
.profile-active {
  grid-area: profile-active;
}
.profile-emv {
  grid-area: emv;
}

.border {
  border: 1px solid #FFFFFF0A;
}

.flex-align {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bio-align {
  display: flex;
  align-items: center;
  gap: 8px;
}

</style>