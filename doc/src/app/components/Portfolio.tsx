import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      title: '品牌官网设计',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1588657545172-3191326df6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2NjAzOTcxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: '为科技公司设计的现代化官网，注重用户体验和品牌传达',
      tags: ['UI设计', 'Figma', '响应式'],
      link: '#',
    },
    {
      title: 'SaaS 仪表板',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1765917393290-5b458231c02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzY1OTkwNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '功能丰富的数据分析仪表板，包含实时数据可视化',
      tags: ['React', 'TypeScript', 'Charts'],
      link: '#',
    },
    {
      title: '移动应用UI套件',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1676799910963-3932099f67e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU5OTYwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '完整的移动应用UI组件库，适用于多种应用场景',
      tags: ['UI Kit', 'Mobile', 'Design System'],
      link: '#',
    },
    {
      title: '电商网站开发',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTk1NTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: '高性能的电商平台，支持多种支付方式和物流跟踪',
      tags: ['Next.js', 'E-commerce', 'API'],
      link: '#',
    },
    {
      title: '品牌识别系统',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1588657545172-3191326df6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2NjAzOTcxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: '完整的品牌视觉识别系统，包含logo、色彩、字体等',
      tags: ['品牌设计', 'VI设计', 'Logo'],
      link: '#',
    },
    {
      title: '内容管理系统',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1765917393290-5b458231c02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzY1OTkwNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '灵活的内容管理系统，支持多用户协作和版本控制',
      tags: ['CMS', 'Node.js', 'Database'],
      link: '#',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-primary text-sm uppercase tracking-wider font-semibold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">作品集</h2>
          <p className="text-xl text-muted-foreground">精选设计与开发作品</p>
        </motion.div>

        <Tabs
          defaultValue="all"
          className="mb-12"
          onValueChange={setSelectedCategory}
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted/50 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              全部
            </TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              设计
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              开发
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <PortfolioGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="design" className="mt-8">
            <PortfolioGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="development" className="mt-8">
            <PortfolioGrid items={filteredItems} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function PortfolioGrid({ items }: { items: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="wait">
        {items.map((item, index) => (
          <motion.div
            key={`${item.category}-${index}`}
            variants={itemVariants}
            layout
          >
            <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer bg-card border-border h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-primary/90 backdrop-blur-sm rounded-full p-4"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <Layers className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 flex-1">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
