export default defineAppConfig({
  seo: {
    title: 'Philipp R. Proksch - Fullstack Developer',
    description: 'Welcome to my portfolio! I\'m Philipp, a Fullstack Developer based in Austria. I specialize in Vue/Nuxt frontends and Python backends for startups and growing companies.'
  },
  global: {
    picture: {
      src: '/avatar.jpg',
      alt: 'My profile picture'
    },
    meetingLink: 'mailto:work@prp.codes',
    email: 'work@prp.codes',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} - All rights reserved.`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/philipprproksch/',
        'target': '_blank',
        'aria-label': 'LinkedIn'
      }, {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://instagram.com/philippproksch',
        'target': '_blank',
        'aria-label': 'Instagram'
      }, {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/prpcodes',
        'target': '_blank',
        'aria-label': 'GitHub'
      }
    ]
  },
  hero: {
    title: 'Hey, I\'m Philipp a Fullstack Developer',
    description: 'I specialize in Vue and Nuxt frontends with Python/Django backends, and I\'ve recently focused on AI-powered applications - from recruiting platforms that match candidates to jobs, to marketing tools that analyze podcast content for targeted advertising.',
    links: [
      {
        label: 'View My Work',
        to: '#experience',
        color: 'neutral'
      }
    ],
    images: [
      {
        src: '/hero/podcast.png',
        alt: 'Podcast Marketing Tool'
      },
      {
        src: '/hero/recruiting.jpg',
        alt: 'Recruiting Platform'
      },
      {
        src: '/hero/website - 1.png',
        alt: 'Consulting Website'
      },
      {
        src: '/hero/website - 2.png',
        alt: 'Artist Portfolio'
      }
    ]
  },
  about: {
    title: 'About Me',
    description: 'I\'m Philipp, a fullstack developer based in Austria with over 5 years of experience building web applications for startups and established companies. I started with a technical apprenticeship in electrical systems before transitioning to a fulltime software development role in 2022. Since then, I\'ve worked across the full stack - building responsive frontends with React/Next or Vue/Nuxt, developing backends with Python and Django. For hosting, I mainly choose Docker and a good old VPS, you know, the boring way, but if the project needs it, I\'m also familiar with serverless architectures. Recently, I\'ve moved focus on AI-powered applications, so I built a recruiting platform that automates candidate-job matching and a podcast marketing tool that uses NLP to match products with relevant content. I enjoy projects where AI solves real business problems, instead of it being used just for hype.'
  },
  experience: {
    title: 'Work Experience',
    items: [
      {
        position: 'Fullstack Developer at',
        date: '2023 - Present',
        company: {
          name: 'Shiffable',
          url: 'https://shiffable.com',
          color: '#ff4d33'
        }
      },
      {
        position: 'Fullstack Developer at',
        date: '2022 - 2023',
        company: {
          name: 'BEYOND',
          url: 'https://www.beyond-it-solutions.at',
          color: '#b05301'
        }
      },
      {
        position: 'Operating Technician at',
        date: '2017 - 2022',
        company: {
          name: 'Wiener Netze',
          url: 'https://www.wienernetze.at',
          color: '#bb005d'
        }
      },
      {
        position: 'Apprenticeship at',
        date: '2013 - 2017',
        company:
        {
          name: 'Wiener Netze',
          url: 'https://www.wienernetze.at',
          color: '#bb005d'
        }
      }
    ]
  },
  projects: {
    title: 'Latest Projects',
    description: 'Some of my recent work',
    items: [
      {
        title: 'AI Recruiting Platform',
        description: 'End-to-end recruitment automation platform. Aggregates job listings from multiple boards, processes candidate CVs through multiple channels, and uses machine learning to match candidates with positions. Includes full workflow management for recruitment teams.',
        image: '/hero/recruiting.jpg'
      },

      {
        title: 'Podcast Marketing Platform',
        description: 'Intelligent platform connecting brands with podcasts through AI-driven content analysis. Analyzes episode transcripts and matches them against product descriptions to recommend the most relevant advertising opportunities with confidence scoring.',
        image: '/hero/podcast.png'
      },
      {
        title: 'Artist Portfolio Website',
        description: 'Clean, image-focused portfolio showcasing contemporary visual art. Features responsive galleries, exhibition history, and artist statement. Optimized for high-resolution images with fast loading times across desktop and mobile devices.',
        image: '/hero/website-2.png'
      },
      {
        title: 'Business Consulting Website',
        description: 'Corporate website for Austrian consulting firm. Modern, professional design highlighting services, team expertise, and client success stories. Built with performance-first architecture ensuring quick load times and seamless navigation.',
        image: '/hero/website-1.png'
      }
    ]
  }
})
