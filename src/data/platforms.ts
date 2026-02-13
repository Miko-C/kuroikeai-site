export interface PlatformItem {
  id: string;
  title: string;
  url: string;
  isConfigured: boolean;
  backgroundImages: string[];
  descriptionParagraphs: string[];
}

const visualCandidates = {
  youtube: ['/visuals/bg-live.png', '/visuals/space datacenter.png', '/visuals/hero.png'],
  x: ['/visuals/bg-post.png', '/visuals/snow datacenter.png', '/visuals/hero.png'],
  note: ['/visuals/bg-article.png', '/visuals/room.png', '/visuals/hero.png'],
  vrchat: ['/visuals/bg-activity.png', '/visuals/section-dc.png.png', '/visuals/home.png'],
  discord: ['/visuals/bg-activity.png', '/visuals/section-dc.png.png', '/visuals/home.png'],
  twitch: ['/visuals/bg-live.png', '/visuals/space datacenter.png', '/visuals/hero.png'],
  kick: ['/visuals/bg-live.png', '/visuals/space datacenter.png', '/visuals/hero.png'],
} as const;

const env = import.meta.env;

const toUrlState = (value?: string) => {
  if (!value) {
    return { url: 'URL未設定', isConfigured: false };
  }
  return { url: value, isConfigured: true };
};

const youtube = toUrlState(env.PUBLIC_YOUTUBE_URL);
const x = toUrlState(env.PUBLIC_X_URL);
const note = toUrlState(env.PUBLIC_NOTE_URL);
const vrchat = toUrlState(env.PUBLIC_VRCHAT_URL);
const discord = toUrlState(env.PUBLIC_DISCORD_URL);
const twitch = toUrlState(env.PUBLIC_TWITCH_URL);
const kick = toUrlState(env.PUBLIC_KICK_URL);

export const platforms: PlatformItem[] = [
  {
    id: 'youtube',
    title: 'YouTube',
    ...youtube,
    backgroundImages: [...visualCandidates.youtube],
    descriptionParagraphs: [
      'メインの活動場所。主に配信。雑談/作業/勉強/ゲーム。',
      '解説動画、AI楽曲、歌ってみたも。',
    ],
  },
  {
    id: 'x',
    title: 'X',
    ...x,
    backgroundImages: [...visualCandidates.x],
    descriptionParagraphs: [
      '日常の気づき/調べたこと。好きなポストをRP。',
      '時々絵/漫画/動画も。',
    ],
  },
  {
    id: 'note',
    title: 'note',
    ...note,
    backgroundImages: [...visualCandidates.note],
    descriptionParagraphs: [
      '2021年4月ごろから投稿、記事数483(2026年2月時点)。',
      '内省エッセイ/解説/社会批判/銘柄分析。DeepResearch等AI調査も。',
    ],
  },
  {
    id: 'vrchat',
    title: 'VRChat',
    ...vrchat,
    backgroundImages: [...visualCandidates.vrchat],
    descriptionParagraphs: ['配信で使用。よければ入ってください。'],
  },
  {
    id: 'discord',
    title: 'Discord',
    ...discord,
    backgroundImages: [...visualCandidates.discord],
    descriptionParagraphs: ['配信内容をAIでまとめて投稿。告知も（サボりがち）。'],
  },
  {
    id: 'twitch',
    title: 'Twitch',
    ...twitch,
    backgroundImages: [...visualCandidates.twitch],
    descriptionParagraphs: ['YouTubeと同時配信。'],
  },
  {
    id: 'kick',
    title: 'Kick',
    ...kick,
    backgroundImages: [...visualCandidates.kick],
    descriptionParagraphs: ['YouTubeと同時配信。'],
  },
];
