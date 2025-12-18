import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我会尽快回复您。');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com',
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: '电话',
      value: '+86 138 0000 0000',
      link: 'tel:+8613800000000',
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      label: '位置',
      value: '中国 北京',
      link: null,
      color: 'text-red-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com',
      color: 'hover:bg-gray-900 dark:hover:bg-gray-100',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: 'https://twitter.com',
      color: 'hover:bg-sky-500',
    },
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
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="text-primary text-sm uppercase tracking-wider font-semibold">Contact</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            联系我
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
            随时欢迎您的消息
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* 联系表单 */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h3 className="text-2xl font-bold">发送消息</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-foreground/80">
                    姓名
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    className="bg-background border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-foreground/80">
                    邮箱
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-foreground/80">
                    留言
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请输入您想说的话..."
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  发送消息
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* 联系信息 */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <h3 className="text-2xl font-bold">联系信息</h3>
                </div>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <info.icon className={info.color} size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <h3 className="text-2xl font-bold">社交媒体</h3>
                </div>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 bg-muted ${social.color} rounded-xl flex items-center justify-center transition-all group`}
                    >
                      <social.icon
                        className="text-foreground group-hover:text-white transition-colors"
                        size={24}
                      />
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white border-0 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-20">
                  <Sparkles size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">让我们一起创造</h3>
                  <p className="mb-6 opacity-95">
                    无论您有项目想法、合作机会，还是只是想打个招呼，
                    我都很乐意听到您的声音。让我们一起创造些令人惊叹的东西！
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="mailto:hello@example.com">
                      <Mail className="mr-2 h-4 w-4" />
                      立即联系
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
