<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-muted text-xs' }"
  >
    <template #left>
      {{ footer.credits }}
    </template>
    <UButton
      size="xs"
      color="neutral"
      variant="ghost"
      label="Impressum"
      class="text-muted text-xs"
      to="/impressum"
    />
    <UButton
      size="xs"
      color="neutral"
      variant="ghost"
      label="Data Protection"
      class="text-muted text-xs"
      to="/data-protection"
    />
    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
      <ColorModeButton />
    </template>
  </UFooter>
</template>
