const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/articles', title: 'articles' },
  { href: '/about', title: 'About' },
  {
    type: 'dropdown',
    title: 'Other',
    links: [
      { href: '/tags', title: 'Tags' },
    ],
  },
]

export default headerNavLinks
