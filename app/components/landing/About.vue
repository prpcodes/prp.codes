<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection id="about" :title="page.about.title" :description="page.about.description" :ui="{
    container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
    title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
    description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted text-wrap',
    footer: 'mt-2',
    links: 'block gap-x-0 gap-y-0 justify-start'
  }">
    <!-- <template #links>
      <UButton
        size="xs"
        variant="link"
        class="px-0 gap-0"
        label="Learn More"
        trailing-icon="i-lucide-arrow-right"
        to="/about"
      />
    </template> -->
  </UPageSection>
</template>
