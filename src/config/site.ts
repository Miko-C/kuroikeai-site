export const site = {
  title: '黒池璦 KUROIKE AI | Official Site',
  description:
    '黒池璦 KUROIKE AI 公式サイト。配信・創作・調査と分析を黒基調と雪の世界観でまとめたオフィシャルハブ。',
};

const env = import.meta.env;

export const links = {
  x: env.PUBLIC_X_URL || '#',
  youtube: env.PUBLIC_YOUTUBE_URL || '#',
  note: env.PUBLIC_NOTE_URL || '#',
  vrchat: env.PUBLIC_VRCHAT_URL || '#',
  discord: env.PUBLIC_DISCORD_URL || '#',
  twitch: env.PUBLIC_TWITCH_URL || '#',
  kick: env.PUBLIC_KICK_URL || '#',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/links', label: 'Links' },
  { href: '/live', label: 'Live' },
  { href: '/fanart', label: 'Fanart' },
];

export const profile = {
  name: '黒池璦 (KUROIKE AI)',
  bio: '配信は雑談/ゲーム中心、歌枠も。顔出し配信や動画もあり。生成AIを使った創作多数。',
  milestones: [
    '2020年12月20日 活動開始',
    '2021年12月11日 カクヨムに小説投稿開始',
    '2021年12月12日 YouTubeで動画投稿開始',
    '2021年4月12日 YouTubeでライブ配信開始',
    '2024年2月16日 登録者100人突破',
    '2025年5月15日 登録者1000人突破',
    'YouTubeパートナー認定済み',
  ],
};

export const visuals = {
  hero: '/visuals/hero.png',
  activity: '/visuals/section-dc.png.png',
  live: '/visuals/space datacenter.png',
  post: '/visuals/snow datacenter.png',
  article: '/visuals/room.png',
  cat: '/visuals/black cat.png',
  dog: '/visuals/どうも.png',
  avatar: '/visuals/kuroikeai.png',
};

export const activitySummary = [
  '主な活動は、バーチャルアバターを使った配信。',
  '小説・漫画・絵・動画・音楽など、幅広い創作を投稿。',
  '企業や市場の調査・分析・考察、日常で感じたことを記事や配信で発信。',
  '制作と発信の両面でAIを多用。',
];

export const footerLinkItems = [
  { label: 'X', href: links.x },
  { label: 'YouTube', href: links.youtube },
  { label: 'note', href: links.note },
  { label: 'VRChat', href: links.vrchat },
  { label: 'Discord', href: links.discord },
  { label: 'Twitch', href: links.twitch },
  { label: 'Kick', href: links.kick },
];
