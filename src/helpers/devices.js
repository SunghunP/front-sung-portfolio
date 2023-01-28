const sizes = {
  mobile: '320px',
  mobileLg: '400px',
  tablet: '500px',
  tabletLg: '670px',
  laptop: '1024px',
}

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  mobileLg: `(min-width: ${sizes.mobileLg})`,
  tablet: `(min-width: ${sizes.tablet})`,
  tabletLg: `(min-width: ${sizes.tabletLg})`,
  laptop: `(min-width: ${sizes.laptop})`
}

