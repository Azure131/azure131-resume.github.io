import { Heart, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 关于 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Portfolio
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              全栈开发工程师，热爱技术与设计，
              致力于创造优雅且富有创意的数字体验。
            </p>
          </motion.div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-xl mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  关于我
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  项目经历
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  作品集
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  联系方式
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-xl mb-4">联系方式</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                邮箱: hello@example.com
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                电话: +86 138 0000 0000
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                位置: 中国 北京
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Portfolio. 保留所有权利。
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              用{' '}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart size={16} className="text-red-500 fill-red-500" />
              </motion.span>{' '}
              和{' '}
              <Code2 size={16} className="text-primary" />
              {' '}制作
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
