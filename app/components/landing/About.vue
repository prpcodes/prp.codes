<script setup lang="ts">
const { about } = useAppConfig()
</script>

<template>
  <UPageSection
    id="about"
    :title="about.title"
    :description="about.description"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted text-wrap',
      footer: 'mt-2',
      links: 'block gap-x-0 gap-y-0 justify-start'

    }"
  />
</template>
