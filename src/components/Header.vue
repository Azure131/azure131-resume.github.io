<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-effect">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-bold gradient-text">Dev</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="onNavigate(item.id)"
            :class="[
              'text-sm font-medium transition-colors relative py-2',
              activeSection === item.id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            ]"
          >
            {{ item.label }}
            <span
              v-if="activeSection === item.id"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
            ></span>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden py-4 border-t border-border/50"
      >
        <div class="flex flex-col space-y-2">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="handleMobileNav(item.id)"
            :class="[
              'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors',
              activeSection === item.id
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            ]"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['navigate'])

const mobileMenuOpen = ref(false)

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'portfolio', label: '作品集' },
  { id: 'contact', label: '联系' }
]

const onNavigate = (section) => {
  emit('navigate', section)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleMobileNav = (section) => {
  onNavigate(section)
  mobileMenuOpen.value = false
}
</script>