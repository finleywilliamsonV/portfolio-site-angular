export type Project = {
  title: string
  tags: string[]
  description: string
  thumbnailImage: string
  additionalImages?: string[]
  linkText: string
  url?: string
  githubLink: string
}

export const ProjectData: Project[] = [
  {
    title: 'Lorem Ipsum Generator',
    tags: ['Node', 'Express', 'MongoDB', 'Pug'],
    description:
      'Generate Lorem Ipsum text in a variety of styles. This site uses Express for routing, MongoDB for data used in generation, Pug for a views engine, and Bootstrap for styling.',
    thumbnailImage: 'assets/images/LoremIpsum3x2.png',
    linkText: 'Under Construction',
    // url: '/lorem',
    githubLink: 'https://github.com/finleywilliamsonV/lorem-express'
  },
  {
    title: 'ToDo List',
    tags: ['Node'],
    description:
      'A simple to-do list. I use vanilla JS for routing and views handling, store & retrieve user list data in local storage, and use Bootstrap for styling.',
    thumbnailImage: 'assets/images/ToDoList3x2.png',
    linkText: 'Under Construction',
    // url: '/todo',
    githubLink: 'https://github.com/finleywilliamsonV/To-Do-VanillaJS'
  },
  {
    title: 'Real-Time Weather',
    tags: ['Node', 'React', 'Parcel'],
    description:
      'Displays a 7-day weather forecast for any location. Uses OpenCage Geocoder and DarkSky Weather APIs. Application state managed with React, bundled with Parcel.',
    thumbnailImage: 'assets/images/Weather3x2-cropped.png',
    linkText: 'Under Construction',
    // url: '/weather/',
    githubLink: 'https://github.com/finleywilliamsonV/real-time-weather'
  },
  {
    title: 'Emojis in Space',
    tags: ['ActionScript3'],
    description:
      'A retro-themed, top-down shooter. Help Clyde Panther battle against a raucous horde of emojis and save the galaxy! My first commercial game. Previously on iOS and Google Play, currently unavailable.',
    thumbnailImage: 'assets/images/emojis-in-space/EmojisInSpace3x2.png',
    additionalImages: [
      'assets/images/emojis-in-space/eis1.png',
      'assets/images/emojis-in-space/eis2.png',
      'assets/images/emojis-in-space/eis3.png',
      'assets/images/emojis-in-space/eis4.png',
      'assets/images/emojis-in-space/eis5.png',
      'assets/images/emojis-in-space/eis6.png',
      'assets/images/emojis-in-space/eis7.png',
      'assets/images/emojis-in-space/eis8.png'
    ],
    linkText: 'Visit Site',
    url: 'http://emojisin.space',
    githubLink: 'https://github.com/finleywilliamsonV/EmojisInSpace'
  },
  {
    title: 'Dungeon Masters',
    tags: ['ActionScript3'],
    description:
      'Build your own dungeon, fill it with monsters, and defend against endless waves of adventurers. Implements a D&D style combat system.',
    thumbnailImage: 'assets/images/dungeon-masters/DungeonMasters3x2.png',
    additionalImages: [
      'assets/images/dungeon-masters/dm1.png',
      'assets/images/dungeon-masters/dm2.png',
      'assets/images/dungeon-masters/dm3.png',
      'assets/images/dungeon-masters/dm4.png',
      'assets/images/dungeon-masters/dm5.png'
    ],
    linkText: 'Not Deployed',
    githubLink: 'https://github.com/finleywilliamsonV/DungeonMasters'
  }
]
