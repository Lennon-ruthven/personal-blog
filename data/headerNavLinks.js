const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/posts', title: 'Posts' },
  {
    type: 'dropdown',
    title: 'Other',
    links: [
      { href: '/tags', title: 'Tags' },
      { href: '/tools', title: 'Tools' },
    ],
  },
]

export default headerNavLinks
