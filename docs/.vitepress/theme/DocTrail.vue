<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { ancestorsOf, hrefFor, hubMarkFor, iconFor, isEnglish, linkFor, sectionsFor } from './sections.js'

// Above each article: the section and client it belongs to, so same-titled client articles stay distinct
const { page } = useData()
const english = computed(() => isEnglish(page.value.relativePath))
const link = computed(() => linkFor(page.value.relativePath))
const trail = computed(() => (ancestorsOf(sectionsFor(page.value.relativePath), link.value) ?? [])
  .map(item => ({ text: item.text, href: hrefFor(item.link), icon: iconFor(item.link) })))
const hub = computed(() => hubMarkFor(link.value))
</script>

<template>
  <nav v-if="trail.length" class="doc-trail" :aria-label="english ? 'Breadcrumb' : '所在位置'">
    <ol>
      <li v-for="item in trail" :key="item.href">
        <a :href="item.href"><span v-if="item.icon" :class="['gi', 'gi-' + item.icon]" aria-hidden="true" />{{ item.text }}</a>
      </li>
    </ol>
  </nav>
  <div v-if="hub" class="client-mark" aria-hidden="true">
    <span :class="['gi', 'gi-' + hub]" />
  </div>
</template>
