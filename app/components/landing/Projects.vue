<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: posts } = await useAsyncData('index-projects', () =>
  queryCollection('projects').all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: 'projects not found', fatal: true })
}
</script>

<template>
  <UPageSection
    :title="page.projects.title"
    :description="page.projects.description"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-4 lg:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <UBlogPosts
      orientation="vertical"
      class="gap-4 lg:gap-y-4"
    >
      <Motion
        v-for="(post, index) in posts"
        :key="index"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UBlogPost
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="post.date"
          :to="post.path"
          orientation="horizontal"
          variant="outline"
          :ui="{
            header: 'h-full'
          }"
        />
      </Motion>
    </UBlogPosts>
  </UPageSection>
</template>
