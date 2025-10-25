<script setup lang="ts">
const { projects } = useAppConfig()
</script>

<template>
  <UPageSection
    id="projects"
    :title="projects.title"
    :description="projects.description"
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
        v-for="(post, index) in projects.items"
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
