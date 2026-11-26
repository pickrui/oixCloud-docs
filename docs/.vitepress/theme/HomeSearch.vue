<script setup>
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const text = computed(() => lang.value.startsWith('en')
  ? 'Search guides, settings or error messages'
  : '搜索教程、设置项或报错信息')
const shortcut = ref('Ctrl K')

onMounted(() => {
  if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) shortcut.value = '⌘ K'
})

// Opens the same local search as the navigation bar
function open() {
  document.querySelector('#local-search button')?.click()
}
</script>

<template>
  <button type="button" class="home-search" @click="open">
    <span class="vpi-search home-search-icon" aria-hidden="true" />
    <span class="home-search-text">{{ text }}</span>
    <kbd class="home-search-key" aria-hidden="true">{{ shortcut }}</kbd>
  </button>
</template>
