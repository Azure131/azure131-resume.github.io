<template>
  <section id="about" class="py-20 bg-muted/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- 左侧内容 -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="space-y-6"
        >
          <h2 class="text-4xl md:text-5xl font-bold">
            <span class="gradient-text">关于我</span>
          </h2>
          
          <div class="space-y-4 text-lg text-muted-foreground">
            <p>
              我是一名充满激情的全栈开发工程师，拥有丰富的Web开发经验。
              专注于创建高性能、用户友好的应用程序，追求代码质量和用户体验的完美平衡。
            </p>
            <p>
              在技术之外，我对设计和用户体验有着浓厚的兴趣。我相信优秀的产品需要
              技术与设计的完美融合，每一个细节都值得精心打磨。
            </p>
          </div>

          <!-- 技能标签 -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-foreground">技术栈</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skills"
                :key="skill"
                class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- 统计数据 -->
          <div class="grid grid-cols-3 gap-6 pt-6">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center"
            >
              <div class="text-3xl font-bold gradient-text">{{ stat.value }}</div>
              <div class="text-sm text-muted-foreground">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- 右侧图片/视觉元素 -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="relative"
        >
          <div class="relative aspect-square max-w-md mx-auto">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform -rotate-6"></div>
            
            <!-- 主内容区 -->
            <div class="relative inset-0 bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center">
              <div class="text-center space-y-4">
                <!-- 开发者图标 -->
                <div class="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Code class="w-16 h-16 text-white" />
                </div>
                <div class="space-y-2">
                  <h4 class="text-2xl font-bold">持续学习</h4>
                  <p class="text-muted-foreground">技术改变世界，代码创造未来</p>
                </div>
              </div>
            </div>

            <!-- 浮动装饰元素 -->
            <div
              v-motion
              :enter="{ y: [0, -20, 0] }"
              class="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-lg shadow-lg flex items-center justify-center"
            >
              <Sparkles class="w-8 h-8 text-white" />
            </div>
            
            <div
              v-motion
              :enter="{ y: [0, 20, 0] }"
              :delay="200"
              class="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-lg shadow-lg flex items-center justify-center"
            >
              <Cpu class="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code, Sparkles, Cpu } from 'lucide-vue-next'

const skills = [
  'Vue.js', 'React', 'TypeScript', 'Node.js',
  'Tailwind CSS', 'Python', 'PostgreSQL', 'Docker',
  'Git', 'AWS', 'Figma', 'UI/UX'
]

const stats = [
  { value: '50+', label: '完成项目' },
  { value: '5年+', label: '开发经验' },
  { value: '100%', label: '客户满意度' }
]
</script>