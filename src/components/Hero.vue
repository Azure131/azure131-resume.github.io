<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
    <!-- 背景动画网格 -->
    <div class="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
      <div 
        class="absolute inset-0" 
        :style="{
          backgroundImage: `linear-gradient(to right, rgb(var(--primary-rgb, 99 102 241) / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(var(--primary-rgb, 99 102 241) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }"
      ></div>
    </div>

    <!-- 浮动元素 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        v-motion
        class="absolute w-2 h-2 bg-primary/30 rounded-full"
        :initial="particle.initial"
        :enter="particle.animate"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
      <div class="space-y-8">
        <!-- 顶部装饰 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="0"
          class="flex items-center justify-center gap-2 text-primary"
        >
          <Sparkles class="w-5 h-5" />
          <span class="text-sm uppercase tracking-wider">欢迎来到我的数字世界</span>
          <Sparkles class="w-5 h-5" />
        </div>

        <!-- 主标题 -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="200"
          class="space-y-4"
        >
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span class="inline-block">你好，我是</span>
            <br />
            <span class="inline-block gradient-text">创意开发者</span>
          </h1>
          
          <!-- 代码终端效果 -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :delay="400"
            class="inline-flex items-center gap-2 terminal-effect"
          >
            <Terminal class="w-4 h-4 text-primary" />
            <span class="font-mono text-sm text-muted-foreground">
              {{ currentCodeLine }}
            </span>
          </div>
        </div>

        <!-- 副标题 -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="600"
          class="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
        >
          全栈开发工程师 × UI/UX 设计师 × 创意工作者
        </p>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="800"
          class="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          将代码转化为艺术，用设计讲述故事。<br />
          专注于创造优雅、创新且令人难忘的数字体验。
        </p>

        <!-- CTA 按钮 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="1000"
          class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <button
            @click="onNavigate('portfolio')"
            class="btn-primary flex items-center"
          >
            <Sparkles class="mr-2 h-4 w-4" />
            探索作品
          </button>
          <button
            @click="onNavigate('contact')"
            class="btn-secondary"
          >
            联系我
          </button>
        </div>

        <!-- 滚动提示 -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="1500"
          class="pt-16"
        >
          <div
            v-motion
            :enter="{ y: [0, 10, 0] }"
            :delay="1500"
            class="inline-block"
          >
            <ArrowDown class="mx-auto text-muted-foreground" :size="32" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sparkles, Terminal, ArrowDown } from 'lucide-vue-next'

const props = defineProps({
  onNavigate: {
    type: Function,
    required: true
  }
})

const codeLines = [
  '$ npm install creativity',
  '$ git commit -m "Building dreams"',
  '$ docker run --innovation',
]

const currentCodeLine = ref(codeLines[0])
let codeInterval = null

const particles = Array.from({ length: 20 }, (_, i) => ({
  initial: {
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
  },
  animate: {
    y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
    opacity: [0, 1, 0],
    transition: {
      duration: Math.random() * 10 + 10,
      repeat: Infinity,
      ease: 'linear',
    }
  }
}))

onMounted(() => {
  let index = 0
  codeInterval = setInterval(() => {
    index = (index + 1) % codeLines.length
    currentCodeLine.value = codeLines[index]
  }, 3000)
})

onUnmounted(() => {
  if (codeInterval) {
    clearInterval(codeInterval)
  }
})
</script>