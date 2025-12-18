<template>
  <section id="contact" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">联系我</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          让我们一起创造令人惊叹的项目，期待与你的合作
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- 联系表单 -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0 }"
        >
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-border/50">
            <h3 class="text-2xl font-semibold mb-6">发送消息</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-foreground mb-2">
                    姓名
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="你的姓名"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-foreground mb-2">
                    邮箱
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">
                  主题
                </label>
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="消息主题"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">
                  消息内容
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="告诉我你的想法..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">发送中...</span>
                <span v-else class="flex items-center justify-center">
                  <Send class="mr-2 h-4 w-4" />
                  发送消息
                </span>
              </button>
            </form>

            <!-- 成功提示 -->
            <div
              v-if="showSuccess"
              class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
            >
              <div class="flex items-center">
                <CheckCircle class="w-5 h-5 mr-2" />
                <span>消息发送成功！我会尽快回复你。</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 联系信息 -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="space-y-8"
        >
          <!-- 联系方式 -->
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 class="text-2xl font-semibold mb-6">联系方式</h3>
            
            <div class="space-y-4">
              <div
                v-for="contact in contactInfo"
                :key="contact.type"
                class="flex items-center gap-4"
              >
                <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <component :is="contact.icon" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div class="text-sm text-muted-foreground">{{ contact.type }}</div>
                  <div class="font-medium">{{ contact.value }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 社交媒体 -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-border/50">
            <h3 class="text-2xl font-semibold mb-6">关注我</h3>
            
            <div class="grid grid-cols-2 gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <component :is="social.icon" class="w-5 h-5 text-primary" />
                <span class="text-sm font-medium">{{ social.name }}</span>
              </a>
            </div>
          </div>

          <!-- 工作时间 -->
          <div class="bg-muted/30 rounded-2xl p-6">
            <h4 class="font-semibold mb-4 flex items-center">
              <Clock class="w-5 h-5 mr-2 text-primary" />
              工作时间
            </h4>
            <div class="space-y-2 text-sm text-muted-foreground">
              <div>周一 - 周五: 9:00 - 18:00</div>
              <div>周六 - 周日: 10:00 - 16:00</div>
              <div class="pt-2 text-primary font-medium">
                通常24小时内回复
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { 
  Send, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Github,
  Twitter,
  Linkedin,
  Globe,
  Clock
} from 'lucide-vue-next'

const isSubmitting = ref(false)
const showSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactInfo = [
  {
    type: '邮箱',
    value: 'hello@example.com',
    icon: Mail
  },
  {
    type: '电话',
    value: '+86 138 0000 0000',
    icon: Phone
  },
  {
    type: '地址',
    value: '北京市朝阳区',
    icon: MapPin
  }
]

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
  },
  {
    name: '个人网站',
    url: '#',
    icon: Globe
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // 模拟表单提交
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // 重置表单
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // 3秒后隐藏成功提示
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}
</script>