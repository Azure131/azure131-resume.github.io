<template>
  <footer class="bg-background border-t border-border/50">
    <!-- 主要内容区 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- 品牌信息 -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold gradient-text">Dev</h3>
          <p class="text-sm text-muted-foreground">
            专注于创造优雅、创新且令人难忘的数字体验。
            将代码转化为艺术，用设计讲述故事。
          </p>
          <div class="flex gap-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <component :is="social.icon" class="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="space-y-4">
          <h4 class="font-semibold text-foreground">快速链接</h4>
          <ul class="space-y-2">
            <li>
              <a href="#home" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                首页
              </a>
            </li>
            <li>
              <a href="#about" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                关于我
              </a>
            </li>
            <li>
              <a href="#projects" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                项目
              </a>
            </li>
            <li>
              <a href="#portfolio" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                作品集
              </a>
            </li>
            <li>
              <a href="#contact" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                联系我
              </a>
            </li>
          </ul>
        </div>

        <!-- 服务 -->
        <div class="space-y-4">
          <h4 class="font-semibold text-foreground">服务</h4>
          <ul class="space-y-2">
            <li>
              <span class="text-sm text-muted-foreground">网站开发</span>
            </li>
            <li>
              <span class="text-sm text-muted-foreground">移动应用开发</span>
            </li>
            <li>
              <span class="text-sm text-muted-foreground">UI/UX设计</span>
            </li>
            <li>
              <span class="text-sm text-muted-foreground">品牌设计</span>
            </li>
            <li>
              <span class="text-sm text-muted-foreground">技术咨询</span>
            </li>
          </ul>
        </div>

        <!-- 联系信息 -->
        <div class="space-y-4">
          <h4 class="font-semibold text-foreground">联系信息</h4>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <Mail class="w-4 h-4 text-primary" />
              <span class="text-sm text-muted-foreground">hello@example.com</span>
            </div>
            <div class="flex items-center gap-2">
              <Phone class="w-4 h-4 text-primary" />
              <span class="text-sm text-muted-foreground">+86 138 0000 0000</span>
            </div>
            <div class="flex items-center gap-2">
              <MapPin class="w-4 h-4 text-primary" />
              <span class="text-sm text-muted-foreground">北京市朝阳区</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="border-t border-border/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-sm text-muted-foreground">
            © {{ currentYear }} Dev. All rights reserved.
          </div>
          <div class="flex gap-6">
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors">
              隐私政策
            </a>
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      v-motion
      :enter="{ y: 0, opacity: 1 }"
      :leave="{ y: 10, opacity: 0 }"
      class="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors z-40 flex items-center justify-center"
    >
      <ArrowUp class="w-5 h-5" />
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  ArrowUp 
} from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
const showBackToTop = ref(false)

const socialLinks = [
  {
    name: 'GitHub',
    url: '#',
    icon: Github
  },
  {
    name: 'Twitter',
    url: '#',
    icon: Twitter
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: Linkedin
  }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>