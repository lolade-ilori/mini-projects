const menu = [
    {
      id: 1,
      title: "Home",
      url: "/home",
      children: []
    },
    {
      id: 2,
      title: "About",
      url: "/about",
      children: [
        {
          id: 21,
          title: "Our Team",
          url: "/about/team",
          children: []
        },
        {
          id: 22,
          title: "Our History",
          url: "/about/history",
          children: []
        }
      ]
    },
    {
      id: 3,
      title: "Services",
      url: "/services",
      children: [
        {
          id: 31,
          title: "Web Development",
          url: "/services/web-development",
          children: [
            {
              id: 311,
              title: "Frontend Development",
              url: "/services/web-development/frontend",
              children: []
            },
            {
              id: 312,
              title: "Backend Development",
              url: "/services/web-development/backend",
              children: []
            }
          ]
        },
        {
          id: 32,
          title: "SEO Optimization",
          url: "/services/seo",
          children: []
        }
      ]
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
      children: []
    }
];

export default menu
  