<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="experience"
    :title="page.experience.title"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <div
              class="font-medium"
              :style="{ color: experience.company.color }"
            >
              {{ experience.company.name }}
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
