import { ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const codeLines = [
    '$ npm install creativity',
    '$ git commit -m "Building dreams"',
    '$ docker run --innovation',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* 背景动画网格 */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(var(--primary-rgb, 99 102 241) / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(var(--primary-rgb, 99 102 241) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}></div>
      </div>

      {/* 浮动元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="space-y-8">
          {/* 顶部装饰 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-primary"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">欢迎来到我的数字世界</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          {/* 主标题 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="inline-block">你好，我是</span>
              <br />
              <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                创意开发者
              </span>
            </h1>
            
            {/* 代码终端效果 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border backdrop-blur-sm"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                {codeLines[0]}
              </span>
            </motion.div>
          </motion.div>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            全栈开发工程师 × UI/UX 设计师 × 创意工作者
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            将代码转化为艺术，用设计讲述故事。<br />
            专注于创造优雅、创新且令人难忘的数字体验。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              onClick={() => onNavigate('portfolio')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              探索作品
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-primary/20 hover:bg-primary/5"
            >
              联系我
            </Button>
          </motion.div>

          {/* 滚动提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block"
            >
              <ArrowDown className="mx-auto text-muted-foreground" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
