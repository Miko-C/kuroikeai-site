export interface PlatformItem {
  id: string;
  title: string;
  url: string;
  isConfigured: boolean;
  descriptionParagraphs: string[];
}

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
    descriptionParagraphs: [
      'メインの活動場所。主に配信（雑談/作業/勉強/ゲーム）。解説動画、AI楽曲、歌ってみたも投稿。',
    ],
  },
  {
    id: 'x',
    title: 'X',
    ...x,
    descriptionParagraphs: ['日常の気づき/調べた事。好きなポストをRP。時々、絵/漫画/動画も投稿。'],
  },
  {
    id: 'note',
    title: 'note',
    ...note,
    descriptionParagraphs: [
      '2021年4月ごろから投稿、記事数483(2026年2月時点)。内省/解説/社会批判/銘柄分析。DeepResearch等AI調査も。',
    ],
  },
  {
    id: 'vrchat',
    title: 'VRChat',
    ...vrchat,
    descriptionParagraphs: ['配信で使用。よければ入ってください。'],
  },
  {
    id: 'discord',
    title: 'Discord',
    ...discord,
    descriptionParagraphs: ['配信内容をAI要約して投稿。告知も（不定期）。'],
  },
  {
    id: 'twitch',
    title: 'Twitch',
    ...twitch,
    descriptionParagraphs: ['YouTubeと同時配信。'],
  },
  {
    id: 'kick',
    title: 'Kick',
    ...kick,
    descriptionParagraphs: ['YouTubeと同時配信。'],
  },
];
