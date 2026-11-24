<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

// Both clients have articles with the same titles, so each article names its client above the title
const CLIENTS = {
  oixflow: { name: 'oixFlow', icon: 'oixflow' },
  flclash: { name: 'FlClash for oixCloud', icon: 'flclash' }
}

const { page } = useData()
const client = computed(() => {
  const m = page.value.relativePath.match(/^(en\/)?(oixflow|flclash)\/([a-z0-9-]+)\.md$/)
  if (!m) return null
  return { ...CLIENTS[m[2]], index: m[3] === 'index', link: `/${m[1] ?? ''}${m[2]}/` }
})
</script>

<template>
  <div v-if="client?.index" class="client-mark" aria-hidden="true">
    <span :class="['gi', 'gi-' + client.icon]" />
  </div>
  <a v-else-if="client" class="client-badge" :href="client.link">
    <span :class="['gi', 'gi-' + client.icon]" aria-hidden="true" />{{ client.name }}
  </a>
</template>
