<template>
  <section id="portfolio" class="py-20 bg-muted/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">作品集</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          探索我的创意世界，每个作品都代表着一次技术与艺术的完美融合
        </p>
      </div>

      <!-- 分类筛选 -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            selectedCategory === category.id
              ? 'bg-primary text-white'
              : 'bg-white/50 text-muted-foreground hover:bg-primary/10'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- 作品网格 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in filteredPortfolio"
          :key="item.id"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ 
            opacity: 1, 
            scale: 1,
            transition: { delay: index * 100 }
          }"
          class="group cursor-pointer"
          @click="selectedWork = item"
        >
          <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 hover:shadow-2xl transition-all duration-300">
            <!-- 作品图片 -->
            <div class="absolute inset-0 flex items-center justify-center">
              <component 
                :is="item.icon" 
                class="w-24 h-24 text-primary/60 group-hover:text-primary transition-colors"
              />
            </div>

            <!-- 悬停信息 -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 class="text-xl font-bold text-white mb-2">{{ item.title }}</h3>
              <p class="text-white/80 text-sm mb-4">{{ item.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-white/60 text-xs">{{ item.category }}</span>
                <Eye class="w-4 h-4 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 作品详情模态框 -->
      <div
        v-if="selectedWork"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click="selectedWork = null"
      >
        <div
          class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <div class="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-2xl flex items-center justify-center">
            <component 
              :is="selectedWork.icon" 
              class="w-32 h-32 text-primary/60" 
            />
            <button
              @click="selectedWork = null"
              class="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
          
          <div class="p-8">
            <h3 class="text-3xl font-bold mb-4">{{ selectedWork.title }}</h3>
            <div class="flex items-center gap-4 mb-6">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {{ selectedWork.category }}
              </span>
              <span class="text-muted-foreground">{{ selectedWork.year }}</span>
            </div>
            
            <p class="text-lg text-muted-foreground mb-6">{{ selectedWork.fullDescription }}</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-3">使用技术</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in selectedWork.technologies"
                    :key="tech"
                    class="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold mb-3">项目成果</h4>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li v-for="achievement in selectedWork.achievements" :key="achievement">
                    • {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Eye, 
  X, 
  Palette, 
  Camera, 
  PenTool, 
  Smartphone, 
  Monitor,
  Brush,
  Film,
  Music
} from 'lucide-vue-next'

const selectedCategory = ref('all')
const selectedWork = ref(null)

const categories = [
  { id: 'all', name: '全部' },
  { id: 'web', name: '网页设计' },
  { id: 'mobile', name: '移动应用' },
  { id: 'brand', name: '品牌设计' },
  { id: 'illustration', name: '插画设计' }
]

const portfolio = [
  {
    id: 1,
    title: '品牌视觉识别系统',
    description: '为科技公司打造的完整品牌形象',
    category: '品牌设计',
    year: '2024',
    icon: Palette,
    technologies: ['Figma', 'Illustrator', 'After Effects'],
    fullDescription: '这是一套为新兴科技公司设计的完整品牌视觉识别系统，包括Logo设计、色彩系统、字体规范、应用场景展示等。设计理念融合了科技感与人文关怀，体现了公司创新与责任并重的核心价值观。',
    achievements: [
      '提升品牌认知度45%',
      '获得设计大奖提名',
      '应用于100+场景'
    ]
  },
  {
    id: 2,
    title: '摄影作品集',
    description: '城市风光与人像摄影精选',
    category: '插画设计',
    year: '2024',
    icon: Camera,
    technologies: ['Photoshop', 'Lightroom', 'Capture One'],
    fullDescription: '这组摄影作品探索了现代都市中人与环境的关系，通过镜头记录城市变迁和人文故事。作品风格独特，色彩运用大胆，情感表达细腻。',
    achievements: [
      '获得国际摄影比赛金奖',
      '在3个画廊展出',
      '出版摄影集'
    ]
  },
  {
    id: 3,
    title: 'UI插画组件库',
    description: '现代风格的插画素材库',
    category: '插画设计',
    year: '2023',
    icon: PenTool,
    technologies: ['Figma', 'Sketch', 'Adobe XD'],
    fullDescription: '为设计师和开发者创建的免费插画组件库，包含500+精心设计的插画素材，支持多种格式导出，已被数千个项目采用。',
    achievements: [
      '下载量超过10万次',
      '在GitHub获得2k+ stars',
      '被30+公司使用'
    ]
  },
  {
    id: 4,
    title: '移动应用界面设计',
    description: '健康管理APP的UI/UX设计',
    category: '移动应用',
    year: '2024',
    icon: Smartphone,
    technologies: ['Figma', 'Principle', 'Flinto'],
    fullDescription: '为健康管理应用设计的全新界面系统，注重用户体验和视觉美感的平衡。设计风格清新自然，交互流程简洁直观。',
    achievements: [
      '用户满意度提升30%',
      '日活跃用户增长50%',
      '获得设计大奖'
    ]
  },
  {
    id: 5,
    title: '响应式网站设计',
    description: '创意工作室官网设计',
    category: '网页设计',
    year: '2024',
    icon: Monitor,
    technologies: ['Figma', 'Webflow', 'GSAP'],
    fullDescription: '为创意设计工作室打造的响应式官网，融合了大胆的色彩运用和流畅的动画效果，完美展现工作室的创意理念。',
    achievements: [
      '页面加载速度提升60%',
      '用户停留时间增加3倍',
      '获得Awwwards认可'
    ]
  },
  {
    id: 6,
    title: '数字艺术创作',
    description: '抽象风格数字绘画系列',
    category: '插画设计',
    year: '2023',
    icon: Brush,
    technologies: ['Procreate', 'Photoshop', 'Illustrator'],
    fullDescription: '探索数字媒介的无限可能性，这组抽象作品结合了传统绘画技巧和数字技术，创造出独特的视觉体验。',
    achievements: [
      '在数字艺术展展出',
      '作品被私人收藏',
      '在线展览访问量破万'
    ]
  },
  {
    id: 7,
    title: '动画短片制作',
    description: '品牌故事动画宣传片',
    category: '品牌设计',
    year: '2024',
    icon: Film,
    technologies: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    fullDescription: '为品牌制作的动画短片，通过生动的视觉叙事展现品牌理念和历史。动画风格独特，富有感染力。',
    achievements: [
      'YouTube播放量100万+',
      '获得广告节奖项',
      '客户满意度满分'
    ]
  },
  {
    id: 8,
    title: '音乐可视化设计',
    description: '互动式音乐体验界面',
    category: '网页设计',
    year: '2023',
    icon: Music,
    technologies: ['Three.js', 'Web Audio API', 'React'],
    fullDescription: '将音乐与视觉艺术完美结合的创新项目，用户可以通过界面与音乐进行互动，创造独特的视听体验。',
    achievements: [
      '获得创新设计奖',
      '技术文章发表',
      '开源社区贡献'
    ]
  }
]

const filteredPortfolio = computed(() => {
  if (selectedCategory.value === 'all') {
    return portfolio
  }
  return portfolio.filter(item => item.category === selectedCategory.value)
})
</script>