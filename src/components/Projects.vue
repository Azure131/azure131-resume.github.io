<template>
  <section id="projects" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">精选项目</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          展示我最引以为豪的作品，每个项目都体现了技术创新和用户体验的完美结合
        </p>
      </div>

      <!-- 项目网格 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ 
            opacity: 1, 
            y: 0,
            transition: { delay: index * 150 }
          }"
          class="group relative"
        >
          <div class="glass-effect rounded-xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300">
            <!-- 项目图片 -->
            <div class="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <component 
                  :is="project.icon" 
                  class="w-16 h-16 text-primary opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              <!-- 悬停覆盖层 -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div class="text-white space-y-2">
                  <h4 class="text-xl font-bold">{{ project.title }}</h4>
                  <p class="text-sm opacity-90">{{ project.description }}</p>
                </div>
              </div>
            </div>

            <!-- 项目信息 -->
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-muted-foreground mb-4 line-clamp-2">{{ project.description }}</p>
              
              <!-- 技术标签 -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- 链接 -->
              <div class="flex gap-4">
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:text-accent transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <ExternalLink class="w-4 h-4" />
                  演示
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:text-accent transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <Github class="w-4 h-4" />
                  源码
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 查看更多 -->
      <div class="text-center mt-12">
        <button
          @click="onNavigate('portfolio')"
          class="btn-secondary"
        >
          查看更多作品
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ExternalLink, 
  Github, 
  Palette, 
  ShoppingBag, 
  MessageSquare, 
  Database 
} from 'lucide-vue-next'

const props = defineProps({
  onNavigate: {
    type: Function,
    required: true
  }
})

const projects = [
  {
    id: 1,
    title: '创意设计平台',
    description: '一个面向设计师的协作平台，提供实时协作、版本控制和项目管理功能',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    icon: Palette,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: '电商管理系统',
    description: '全功能电商后台管理系统，包含商品管理、订单处理、数据分析等功能',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Redis'],
    icon: ShoppingBag,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: '智能聊天应用',
    description: '基于AI的智能聊天应用，支持多语言、情感分析和智能推荐',
    technologies: ['Vue.js', 'Python', 'TensorFlow', 'WebSocket'],
    icon: MessageSquare,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: '数据可视化平台',
    description: '企业级数据分析和可视化平台，支持多数据源接入和自定义报表',
    technologies: ['React', 'D3.js', 'Node.js', 'MySQL'],
    icon: Database,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: '社交媒体应用',
    description: '创新的社交网络应用，注重用户隐私和内容质量控制',
    technologies: ['Vue.js', 'GraphQL', 'AWS', 'Docker'],
    icon: MessageSquare,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: '在线教育平台',
    description: '综合在线学习平台，支持直播课程、互动练习和学习进度追踪',
    technologies: ['React', 'WebRTC', 'MongoDB', 'Node.js'],
    icon: Database,
    demoUrl: '#',
    githubUrl: '#'
  }
]
</script>