const config = {
  title: "ARK Builders | Privacy-focused apps for every day",
  author: "Kawsar Ahmed",
  headerTitle: "ARK Builder",
  description: "ARK Builder (un)official blog, created with Sveltekit and Tailwind.css",
  language: "en-us",
  theme: "dark",
  // system, dark or light
  domain: "https://www.ark-builders.dev/",
  siteUrl: "https://www.ark-builders.dev",
  siteLogo: "/icon-512.png",
  // image: '/img/avatar.png',
  email: "info@ark-builders.dev",
  github: "https://github.com/ARK-Builders",
  twitter: "https://twitter.com/ARKBuilders_DEV",
  linkedin: "https://www.linkedin.com/in/prokawsar/",
  locale: "en-US",
  primaryColor: "#06a261",
  newsletter: "",
  multiuser: true
};
const user = {
  name: "admin",
  // avatar value can be removed for image
  avatar: "/icon-32.png",
  twitter: ""
};
const navLinks = [
  { href: "/apps", title: "Apps" },
  // {
  // 	href: 'https://ark-builders.notion.site/Research-0e9029fa5e704ddfa8b6786b794a2f17',
  // 	title: 'Research'
  // },
  { href: "/blog", title: "Blog" },
  { href: "/", title: "Contribute" },
  { href: "/", title: "Support" }
];
const openGraph = {
  enabled: true,
  width: 1200,
  height: 630
};
const comment = {
  provider: "giscus",
  giscus: {
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://giscus.app/
    repo: "akiarostami/sveltekit-tailwind-blog-starter",
    reposId: "R_kgDOIen4kw",
    category: "Sample Site Comments",
    categoryId: "DIC_kwDOIen4k84CS9tX",
    mapping: "pathname",
    // supported options: pathname, url, title
    reactionsEnabled: "1",
    // Emoji reactions: 1 = enable / 0 = disable
    // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    metadata: "0",
    // theme example: light, dark, dark_dimmed, dark_high_contrast
    // Place the comment box above the comments. options: bottom, top
    inputPosition: "bottom",
    // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
    lang: "en",
    dataStrict: "0",
    loading: "lazy",
    // theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
    // light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
    theme: "light",
    // theme when dark mode
    darkTheme: "dark",
    themeURL: ""
  },
  utterances: {
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://utteranc.es/
    repo: "akiarostami/sveltekit-tailwind-blog-starter",
    issueTerm: "pathname",
    // supported options: pathname, url, title
    label: "Comment 💬",
    // label (optional): Comment 💬
    // theme example: github-light, github-dark, preferred-color-scheme
    // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
    theme: "github-light",
    // theme when dark mode
    darkTheme: "github-dark"
  }
};
export {
  comment as a,
  config as c,
  navLinks as n,
  openGraph as o,
  user as u
};
