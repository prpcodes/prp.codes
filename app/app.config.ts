export default defineAppConfig({
  global: {
    picture: {
      dark: '/images/avatar.jpg',
      light: '/images/avatar.jpg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://calendly.com/work-calendly/30min',
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
    links: [{
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
    }]
  }
})
