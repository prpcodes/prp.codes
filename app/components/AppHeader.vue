<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="px-2 sm:px-4"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    />
  </div>
</template>
