
export interface VideoResource {
  id: string;
  title: string;
  description: string;
  channel: string;
  duration: string;
  youtubeId: string; // Added for embed
  tags: string[];
}

export interface PodcastResource {
  id: string;
  name: string;
  description: string;
  startWith: string;
  link: string;
  platform: 'YouTube' | 'Xiaoyuzhou';
}

export interface PersonResource {
  id: string;
  name: string;
  handle: string;
  platform: string;
  reason: string;
  avatar: string;
  link: string;
}

export interface NewsletterResource {
  id: string;
  name: string;
  frequency: string;
  topics: string;
  link: string;
}

export interface GithubResource {
  id: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
  prompt?: string; // For skills
}

export const videos: VideoResource[] = [
  {
    id: '1',
    title: 'How to Build a Beloved AI Product - Granola CEO Chris Pedregal',
    description: 'Chris Pedregal, CEO of Granola, discusses how to build a beloved AI product and the future of AI interfaces.',
    channel: 'The MAD Podcast with Matt Turck',
    duration: '52:15',
    youtubeId: 'IcbuTTVUY7M',
    tags: ['Founder Interview', 'Practical Tutorial']
  },
  {
    id: '3',
    title: 'Helping Founders Go Direct in a New Era of PR & Comms with Lulu Cheng Meservey',
    description: 'Lulu Cheng Meservey discusses modern PR strategies for founders and how to communicate effectively in the AI era.',
    channel: 'Uncapped with Jack Altman',
    duration: '1:02:10',
    youtubeId: 'GRoU1T4E9rQ',
    tags: ['Marketing and Growth', 'Founder Interview']
  }
];

export const podcasts: PodcastResource[] = [
  // Lenny's Podcast Episodes
  {
    id: '1',
    name: 'Lenny\'s Podcast',
    description: 'How to hire the best people | Nikhyl Singhal (Meta, Google, Credit Karma)',
    startWith: 'Watch on YouTube',
    link: 'https://www.youtube.com/watch?v=We7BZVKbCVw',
    platform: 'YouTube'
  },
  {
    id: '2',
    name: 'Lenny\'s Podcast',
    description: 'How to fire people with grace, work through conflict, and build a high-performing team | Matt Mochary',
    startWith: 'Watch on YouTube',
    link: 'https://www.youtube.com/watch?v=6qAB6aUMIeA',
    platform: 'YouTube'
  },
  {
    id: '3',
    name: 'Lenny\'s Podcast',
    description: 'How to validate your startup idea | Y Combinator',
    startWith: 'Watch on YouTube',
    link: 'https://www.youtube.com/watch?v=qbvY0dQgSJ4',
    platform: 'YouTube'
  },
  // 十字路口 Episodes
  {
    id: '4',
    name: '十字路口',
    description: 'AI时代是谁的黄金时代？｜和张咋啦聊：文科生、积极行动、爆款的规律、普通人也能赢',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/695af1289b7892496e9811cb',
    platform: 'Xiaoyuzhou'
  },
  {
    id: '5',
    name: '十字路口',
    description: 'Vibe Coding 下半场：四大天王，和想赢的人｜对话朱广翔：百度秒哒产品总经理',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/6985820dc78b823892eb4642',
    platform: 'Xiaoyuzhou'
  },
  // 张小珺Jun Episode
  {
    id: '6',
    name: '张小珺Jun',
    description: '128. Manus决定出售前最后的访谈：啊，这奇幻的2025年漂流啊…',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/695331cb2db086f897b50ea9',
    platform: 'Xiaoyuzhou'
  },
  // Peter Yang Episode
  {
    id: '7',
    name: 'Peter Yang',
    description: '7 Counterintuitive Product Lessons from Anthropic\'s Head of Product | Ami Vora',
    startWith: 'Watch on YouTube',
    link: 'https://www.youtube.com/watch?v=Vp2BsJNVFqQ',
    platform: 'YouTube'
  },
  {
    id: '13',
    name: 'Peter Yang',
    description: 'Inside How the Claude Code Team Ships at Lightning Speed | Cat Wu',
    startWith: 'Watch on YouTube',
    link: 'https://www.youtube.com/watch?v=jmHBMtpR36M',
    platform: 'YouTube'
  },
  // 十字路口 Additional Episodes
  {
    id: '8',
    name: '十字路口',
    description: '他看到的未来，和我们有什么不一样？| 对话18岁的涂津豪：DeepSeek 前实习生、阿里数竞 AI 组冠军',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/697c3998073030367a6ee5ef',
    platform: 'Xiaoyuzhou'
  },
  {
    id: '9',
    name: '十字路口',
    description: '偏执、野心，与一副 AI 眼镜：顶级产品经理的底层燃料｜对谈理想 SVP 范皓宇',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/696b6b3a109824f9e1fe90e2',
    platform: 'Xiaoyuzhou'
  },
  {
    id: '10',
    name: '十字路口',
    description: '2026，AI视频「大年」将至｜对谈OiiOii创始人闹闹：亲历微信与字节后，如何抓住下一波机会？',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/695d9741c1e012a7abb9ebc2',
    platform: 'Xiaoyuzhou'
  },
  // 硅谷101 Episodes
  {
    id: '11',
    name: '硅谷101',
    description: 'E224｜深度拆解Clawdbot，为何它能成为2026年第一个现象级产品？',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/69828c85a712301410e31643',
    platform: 'Xiaoyuzhou'
  },
  {
    id: '12',
    name: '硅谷101',
    description: 'E227｜美国医疗市场AI争夺战：巨头押注，创业公司能赢吗？',
    startWith: 'Listen on Xiaoyuzhou',
    link: 'https://www.xiaoyuzhoufm.com/episode/69a77745f44b398f59390e48',
    platform: 'Xiaoyuzhou'
  }
];

export const people: PersonResource[] = [
  {
    id: '1',
    name: 'Josh Woodward',
    handle: '@joshwoodward',
    platform: 'X (Twitter)',
    reason: 'AI insights and updates.',
    avatar: 'https://unavatar.io/twitter/joshwoodward',
    link: 'https://x.com/joshwoodward'
  },
  {
    id: '2',
    name: 'Andrej Karpathy',
    handle: '@karpathy',
    platform: 'X (Twitter)',
    reason: 'Deep learning and AI education.',
    avatar: 'https://unavatar.io/twitter/karpathy',
    link: 'https://x.com/karpathy'
  },
  {
    id: '3',
    name: 'Greg Isenberg',
    handle: '@gregisenberg',
    platform: 'X (Twitter)',
    reason: 'Community building and AI trends.',
    avatar: 'https://unavatar.io/twitter/gregisenberg',
    link: 'https://x.com/gregisenberg'
  },
  {
    id: '4',
    name: 'Lenny Rachitsky',
    handle: '@lennysan',
    platform: 'X (Twitter)',
    reason: 'Product management and growth.',
    avatar: 'https://unavatar.io/twitter/lennysan',
    link: 'https://x.com/lennysan'
  },
  {
    id: '5',
    name: 'Peter Yang',
    handle: '@petergyang',
    platform: 'X (Twitter)',
    reason: 'Creator economy and AI products.',
    avatar: 'https://unavatar.io/twitter/petergyang',
    link: 'https://x.com/petergyang'
  },
  {
    id: '6',
    name: 'Steven Johnson',
    handle: '@stevenbjohnson',
    platform: 'X (Twitter)',
    reason: 'Technology history and future.',
    avatar: 'https://unavatar.io/twitter/stevenbjohnson',
    link: 'https://x.com/stevenbjohnson'
  },
  {
    id: '7',
    name: 'Cat Wu',
    handle: '@_catwu',
    platform: 'X (Twitter)',
    reason: 'AI research and engineering.',
    avatar: 'https://unavatar.io/twitter/_catwu',
    link: 'https://x.com/_catwu'
  },
  {
    id: '8',
    name: 'Google Labs',
    handle: '@GoogleLabs',
    platform: 'X (Twitter)',
    reason: 'Latest experiments from Google.',
    avatar: 'https://unavatar.io/twitter/GoogleLabs',
    link: 'https://x.com/GoogleLabs'
  },
  {
    id: '9',
    name: 'Lulu Meservey',
    handle: '@lulumeservey',
    platform: 'X (Twitter)',
    reason: 'Comms and tech culture.',
    avatar: 'https://unavatar.io/twitter/lulumeservey',
    link: 'https://x.com/lulumeservey'
  },
  {
    id: '10',
    name: 'Zara Zhang',
    handle: '@zarazhangrui',
    platform: 'X (Twitter)',
    reason: 'Tech investment and cross-border insights.',
    avatar: 'https://unavatar.io/twitter/zarazhangrui',
    link: 'https://x.com/zarazhangrui'
  }
];

export const newsletters: NewsletterResource[] = [
  {
    id: '1',
    name: 'The AI Valley',
    frequency: 'Weekly',
    topics: 'AI News & Tools',
    link: 'https://www.theaivalley.com/'
  },
  {
    id: '2',
    name: 'Peter Yang',
    frequency: 'Weekly',
    topics: 'Creator Trends',
    link: 'https://creatoreconomy.so/'
  },
  {
    id: '3',
    name: 'Google Blog',
    frequency: 'Updates',
    topics: 'Google News',
    link: 'https://blog.google/'
  },
  {
    id: '4',
    name: 'Ben\'s Bites',
    frequency: 'Daily',
    topics: 'AI Product Launches',
    link: 'https://bensbites.beehiiv.com/'
  }
];

export const githubSkills: GithubResource[] = [
  {
    id: '1',
    title: 'Anthropic Skills',
    description: 'A collection of skills for Claude.',
    link: 'https://github.com/anthropics/skills',
    prompt: 'Check out the repository for various skill implementations.'
  },
  {
    id: '2',
    title: 'Obsidian Skills',
    description: 'Skills for Obsidian users.',
    link: 'https://github.com/kepano/obsidian-skills',
    prompt: 'Enhance your Obsidian workflow with these skills.'
  }
];

export const githubMethods: GithubResource[] = [
  {
    id: '1',
    title: 'MinerU',
    description: 'A one-stop, open-source, high-quality data extraction tool.',
    link: 'https://github.com/opendatalab/MinerU',
    tags: ['Parsing', 'Data']
  },
  {
    id: '2',
    title: 'Docling',
    description: 'Document processing and parsing library.',
    link: 'https://github.com/docling-project/docling',
    tags: ['Parsing', 'Documents']
  }
];

export const githubProjects: GithubResource[] = [
  {
    id: '1',
    title: 'OpenManus',
    description: 'Open source implementation of Manus (Large Project).',
    link: 'https://github.com/FoundationAgents/OpenManus',
    tags: ['Agent', 'Open Source']
  }
];
