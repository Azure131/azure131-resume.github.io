<template>
  <div class="min-h-screen bg-background">
    <!-- 进度条 -->
    <div
      class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left"
      :style="{ scaleX: scrollProgress }"
    ></div>
    
    <Header :active-section="activeSection" @navigate="handleNavigate" />
    
    <main>
      <Hero :on-navigate="handleNavigate" />
      <About />
      <Projects :on-navigate="handleNavigate" />
      <Portfolio />
      <Contact />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const activeSection = ref('home')
const scrollProgress = ref(0)

const handleNavigate = (section) => {
  activeSection.value = section
  
  if (section === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const element = document.getElementById(section)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

const handleScroll = () => {
  // 更新进度条
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (window.scrollY / windowHeight) * 100
  scrollProgress.value = scrolled / 100

  // 更新当前活动区域
  const sections = ['home', 'about', 'projects', 'portfolio', 'contact']
  const scrollPosition = window.scrollY + 100

  if (scrollPosition < 300) {
    activeSection.value = 'home'
    return
  }

  for (const section of sections.slice(1)) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetBottom = offsetTop + element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* 确保进度条动画正常工作 */
.progress-bar {
  transform-origin: left;
  transition: transform 0.1s ease-out;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 确保固定定位元素正常工作 */
body {
  margin: 0;
  padding: 0;
}

/* 添加一些全局动画 */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% auto;
}

/* 文本省略 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>