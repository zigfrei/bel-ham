import type { NewsCard } from '~/types/main';

export const newsCards: NewsCard[] = [
  {
    id: '1',
    title: 'Vacuum Tube Revival',
    subtitle: 'Restoration',
    tag: 'Worklog Active',
    image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&q=80&w=800',
    gradient: 'linear-gradient(90deg, #f97316, #f59e0b)',
    date: '2025-12-31',
    link: '/news/vacuum-tube-revival',
  },
  {
    id: '2',
    title: '20m DX Net',
    subtitle: 'Live Operations',
    tag: '14.255 MHz',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    gradient: 'linear-gradient(90deg, #22c55e, #059669)',
    date: '2025-12-31',
    link: '/news/20m-dx-net',
  },
  {
    id: '3',
    title: 'Yagi Antenna Build',
    subtitle: 'Fabrication',
    tag: 'Field Day Prep',
    image: 'https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=800',
    gradient: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
    date: '2025-11-30',
    link: '/news/yagi-antenna-build',
  },
  {
    id: '4',
    title: 'QRP Transceiver Mod',
    subtitle: 'Soldering',
    tag: 'Lab Bench',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    gradient: 'linear-gradient(90deg, #a855f7, #4f46e5)',
    date: '2025-10-01',
    link: '/news/qrp-transceiver-mod',
  }
]