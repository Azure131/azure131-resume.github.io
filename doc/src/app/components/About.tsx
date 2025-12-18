import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Briefcase, Award, Code2, Palette, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const skills = [
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 88, category: 'backend' },
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'UI/UX 设计', level: 92, category: 'design' },
    { name: 'Figma', level: 90, category: 'design' },
    { name: 'Tailwind CSS', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 88, category: 'frontend' },
  ];

  const education = [
    {
      degree: '计算机科学硕士',
      school: '清华大学',
      period: '2018 - 2020',
    },
    {
      degree: '软件工程学士',
      school: '北京大学',
      period: '2014 - 2018',
    },
  ];

  const experience = [
    {
      title: '高级前端工程师',
      company: '科技创新公司',
      period: '2022 - 至今',
      description: '负责核心产品的前端架构设计与开发，带领团队完成多个重要项目。',
    },
    {
      title: '全栈开发工程师',
      company: '互联网科技公司',
      period: '2020 - 2022',
      description: '参与多个大型项目的开发，涵盖前端、后端及数据库设计。',
    },
  ];

  const achievements = [
    { icon: Award, text: '获得公司年度最佳创新奖', color: 'text-yellow-500' },
    { icon: Code2, text: '开源项目累计 5000+ GitHub Stars', color: 'text-purple-500' },
    { icon: Zap, text: '技术博客累计阅读量 100万+', color: 'text-blue-500' },
    { icon: Palette, text: '多次在技术大会上分享经验', color: 'text-pink-500' },
  ];

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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="text-primary text-sm uppercase tracking-wider font-semibold">About Me</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            关于我
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
            了解我的背景与技能
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* 个人简介 */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                个人简介
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                我是一名充满热情的全栈开发工程师，拥有超过5年的行业经验。
                我热爱编程与设计，致力于创造既美观又实用的数字产品。
                我相信好的设计不仅要看起来漂亮，更要解决实际问题。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                在工作之余，我喜欢参与开源项目，分享技术文章，
                以及探索新的技术和设计趋势。我相信持续学习是保持竞争力的关键。
              </p>
            </Card>
          </motion.div>

          {/* 技能专长 */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                技能专长
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* 教育背景 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold">教育背景</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-l-4 border-primary bg-card">
                  <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-foreground/80 mb-1">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">{edu.period}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 工作经历 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Briefcase className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold">工作经历</h3>
          </motion.div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card border-border relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 pl-4">
                    <div>
                      <h4 className="font-bold text-lg">{exp.title}</h4>
                      <p className="text-foreground/80">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm mt-2 md:mt-0 bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-foreground/70 pl-4">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 成就与荣誉 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Award className="text-yellow-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold">成就与荣誉</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card border-border group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-lg group-hover:scale-110 transition-transform">
                      <achievement.icon className={`${achievement.color}`} size={24} />
                    </div>
                    <p className="text-foreground/80 flex-1 pt-2">{achievement.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
