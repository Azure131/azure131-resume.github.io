import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: '电子商务平台',
      description:
        '一个完整的电子商务解决方案，包含商品管理、购物车、支付集成等功能。采用微服务架构，支持高并发访问。',
      image: 'https://images.unsplash.com/photo-1676799910963-3932099f67e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU5OTYwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      period: '2023.06 - 2023.12',
      role: '技术负责人',
      achievements: [
        '系统支持每日10万+并发用户',
        '实现了99.9%的系统可用性',
        '优化加载速度提升40%',
      ],
      link: '#',
      github: '#',
    },
    {
      title: '智能数据分析平台',
      description:
        '为企业提供数据可视化和智能分析服务的SaaS平台。支持多种数据源接入，提供丰富的图表组件和自定义仪表板。',
      image: 'https://images.unsplash.com/photo-1765917393290-5b458231c02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzY1OTkwNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'Python', 'D3.js', 'PostgreSQL'],
      period: '2022.09 - 2023.05',
      role: '全栈开发工程师',
      achievements: [
        '服务50+企业客户',
        '处理百万级数据实时分析',
        '用户满意度达95%',
      ],
      link: '#',
      github: '#',
    },
    {
      title: '移动端社交应用',
      description:
        '一款创新的移动社交应用，支持即时通讯、动态分享、视频通话等功能。注重用户体验和隐私保护。',
      image: 'https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTk1NTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      period: '2022.01 - 2022.08',
      role: '前端工程师',
      achievements: [
        '上线3个月用户突破10万',
        'App Store评分4.8星',
        '实现端到端加密通讯',
      ],
      link: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="text-primary text-sm uppercase tracking-wider font-semibold">Projects</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            项目经历
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
            我参与过的重要项目
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card border-border group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* 项目图片 */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* 项目信息 */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {project.title}
                          </h3>
                          <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                            {project.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-4 bg-primary rounded-full" />
                          <p className="text-sm text-primary font-medium">{project.role}</p>
                        </div>
                      </div>

                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <h4 className="font-semibold text-sm">主要成果</h4>
                        </div>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-foreground/70 text-sm flex items-start">
                              <span className="text-primary mr-2 mt-1">▪</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          查看项目
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          源代码
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
