// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'reginaldmj', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['reginaldmj/gitprofile'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      // header: 'My Projects',
      // // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Reginald Jefferson',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'reginald-jefferson-42b0b61a8/',
    //twitter: 'username',
    //mastodon: 'username.social',
    //researchGate: '',
    //facebook: '',
    //instagram: '',
    //youtube: '', // example: 'pewdiepie'
    //dribbble: '',
    //behance: '',
    //medium: 'username',
    //dev: 'username',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    //website: '',
    phone: '708-980-9994',
    email: 'reginald.jeffersonm@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.hostize.com/v/OqZThbKQd_/reginald-jefferson-resume-full-pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Express.js',
    'Angular.js',
    'Typescript',
    'Java',
    'Python',
    'Django',
    'C#',
    'C++',
    '.NET',
    'PHP',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Freelance',
      position: 'Full Stack Web Developer',
      from: 'January 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'American Express',
      position: 'Platinum Travel Consultant',
      from: 'November 2022',
      to: 'June 2023',
      companyLink: 'https://www.americanexpress.com/en-us/travel/',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Web Development',
      //body: '',
      year: 'October 2021',
      //link: 'https://example.com',
    },
    {
      name: 'Front End Web Development',
      //body: '',
      year: 'October 2020',
      //link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Southern New Hampshire University',
      degree: 'Front End and Full Stack Web Development',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'University of Illinois at Chicago',
      //degree: '',
      from: '2016',
      to: '2017',
    },
    {
      institution: 'Moraine Valley Community College',
      degree: 'Associate of Science',
      from: '2010',
      to: '2014',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
