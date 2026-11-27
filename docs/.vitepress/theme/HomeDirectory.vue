<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { hrefFor, iconFor, isEnglish, sectionsFor } from './sections.js'

// Homepage directory: every section with its articles, in sidebar order.
// Wide screens stack sections in two columns, alternating so their lengths stay close
const { page } = useData()
const english = computed(() => isEnglish(page.value.relativePath))
const articleCount = (items = []) => items.reduce((count, item) => count + 1 + articleCount(item.items), 0)
const sections = computed(() => sectionsFor(page.value.relativePath).map((section, order) => {
  const entries = (section.items ?? []).map(item => ({
    text: item.text,
    href: hrefFor(item.link),
    icon: iconFor(item.link),
    count: articleCount(item.items)
  }))
  return { order, title: section.text, href: hrefFor(section.link), icon: iconFor(section.link), entries, marked: entries.some(e => e.icon) }
}))
const columns = computed(() => [0, 1].map(column => sections.value.filter(s => s.order % 2 === column)))
const countLabel = count => english.value ? `${count} ${count === 1 ? 'guide' : 'guides'}` : `${count} 篇`
</script>

<template>
  <nav class="home-directory" :aria-label="english ? 'All guides' : '全部教程'">
    <div class="home-directory-grid">
      <div v-for="(column, index) in columns" :key="index" class="home-directory-column">
        <section
          v-for="section in column"
          :key="section.href"
          :class="['home-section', { 'is-long': section.entries.length > 8 }]"
          :style="{ order: section.order }"
        >
          <h2 class="home-section-title">
            <a :href="section.href">
              <span class="home-section-icon" aria-hidden="true"><span :class="['gi', 'gi-' + section.icon]" /></span>
              <span class="home-section-name">{{ section.title }}</span>
            </a>
          </h2>
          <ul class="home-section-list">
            <li v-for="entry in section.entries" :key="entry.href">
              <a :href="entry.href">
                <span v-if="section.marked" class="home-entry-mark" aria-hidden="true">
                  <span v-if="entry.icon" :class="['gi', 'gi-' + entry.icon]" />
                </span>
                <span class="home-entry-text">{{ entry.text }}</span>
                <span v-if="entry.count" class="home-entry-count">{{ countLabel(entry.count) }}</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </nav>
</template>
