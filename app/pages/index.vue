<script setup lang="ts">
const { seo } = useAppConfig()

useSeoMeta({
  title: seo.title,
  ogTitle: seo.title,
  description: seo.description,
  ogDescription: seo.description
})
</script>

<template>
  <UPage>
    <LandingHero />
    <LandingAbout />
    <LandingWorkExperience />
    <LandingProjects />
  </UPage>
</template>
