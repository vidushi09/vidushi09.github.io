import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Vidushi Sharma",
  DESCRIPTION: "This is my portfolio and blog.",
  AUTHOR: "Vidushi Sharma",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Resume", 
    HREF: "/Vidushi_Sharma.pdf", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "✉️ E-mail",
    ICON: "email", 
    TEXT: "vidushi949@gmail.com",
    HREF: "mailto:vidushi949@gmail.com",
  },
  { 
    NAME: "🐙 Github",
    ICON: "github",
    TEXT: "Vidushi Sharma",
    HREF: "https://github.com/vidushi09"
  },
  { 
    NAME: "🔗 LinkedIn",
    ICON: "linkedin",
    TEXT: "Vidushi Sharma",
    HREF: "https://www.linkedin.com/in/vidushi-sharma9/",
  },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "Vidushi Sharma",
  //   HREF: "",
  // },
]

