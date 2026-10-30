<script setup>
import { onContentUpdated, useData } from 'vitepress'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

const { lang } = useData()
const text = computed(() => lang.value.startsWith('en')
  ? { title: 'Illustration', close: 'Close', fit: 'Fit to screen', actual: 'Actual size', hint: 'Scroll to inspect details · Pinch to zoom further' }
  : { title: '示意图', close: '关闭', fit: '适应屏幕', actual: '原始大小', hint: '左右、上下滑动查看 · 双指可继续缩放' })
const dialog = ref()
const stage = ref()
const image = ref()
const fit = ref(false)
let observer
let opener

function updateTables() {
  document.querySelectorAll('.table-block').forEach(block => {
    const region = block.querySelector('.table-scroll')
    const overflow = region.scrollWidth > region.clientWidth + 1
    block.classList.toggle('is-scrollable', overflow)
    region.tabIndex = overflow ? 0 : -1
  })
}

function observeTables() {
  observer?.disconnect()
  document.querySelectorAll('.table-scroll, .table-scroll table').forEach(el => observer?.observe(el))
  updateTables()
}

async function openImage(event) {
  const link = event.target.closest('.guide-figure > a')
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  const img = link.querySelector('img')
  opener = link
  image.value = { src: img.currentSrc || img.src, alt: img.alt, width: Number(img.getAttribute('width')) }
  fit.value = false
  await nextTick()
  dialog.value.showModal()
  stage.value.scrollTo(0, 0)
  document.documentElement.classList.add('guide-image-open')
}

function closeImage() {
  document.documentElement.classList.remove('guide-image-open')
  opener?.focus({ preventScroll: true })
}

onMounted(() => {
  observer = new ResizeObserver(updateTables)
  observeTables()
  document.addEventListener('click', openImage)
})
onContentUpdated(() => {
  dialog.value?.close()
  observeTables()
})
onUnmounted(() => {
  observer?.disconnect()
  document.removeEventListener('click', openImage)
  document.documentElement.classList.remove('guide-image-open')
})
</script>

<template>
  <dialog ref="dialog" class="guide-image-viewer" aria-labelledby="guide-image-title" aria-describedby="guide-image-hint" @close="closeImage">
    <header class="guide-image-toolbar">
      <h2 id="guide-image-title">{{ image?.alt || text.title }}</h2>
      <div class="guide-image-actions">
        <button :aria-pressed="fit" @click="fit = true">{{ text.fit }}</button>
        <button :aria-pressed="!fit" @click="fit = false">{{ text.actual }}</button>
        <button autofocus @click="dialog.close()">{{ text.close }}</button>
      </div>
    </header>
    <p id="guide-image-hint" class="guide-image-hint">{{ text.hint }}</p>
    <div ref="stage" class="guide-image-stage" role="region" tabindex="0" :aria-label="text.title">
      <img v-if="image" :src="image.src" :alt="image.alt" :style="{ width: fit ? '100%' : image.width + 'px' }">
    </div>
  </dialog>
</template>
