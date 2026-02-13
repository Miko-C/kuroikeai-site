/// <reference path="../.astro/types.d.ts" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

interface ImportMetaEnv {
  readonly PUBLIC_X_URL?: string;
  readonly PUBLIC_X_PROFILE_URL?: string;
  readonly PUBLIC_YOUTUBE_URL?: string;
  readonly PUBLIC_YOUTUBE_CHANNEL_ID?: string;
  readonly PUBLIC_YOUTUBE_CHANNEL_URL?: string;
  readonly PUBLIC_HOME_FEATURED_YT_VIDEO_ID?: string;
  readonly PUBLIC_LIVE_FALLBACK_YT_VIDEO_ID?: string;
  readonly YOUTUBE_API_KEY?: string;
  readonly PUBLIC_NOTE_URL?: string;
  readonly PUBLIC_NOTE_RSS_URL?: string;
  readonly PUBLIC_NOTE_PROFILE_URL?: string;
  readonly PUBLIC_SITE_ORIGIN?: string;
  readonly PUBLIC_VRCHAT_URL?: string;
  readonly PUBLIC_DISCORD_URL?: string;
  readonly PUBLIC_TWITCH_URL?: string;
  readonly PUBLIC_KICK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals extends Runtime {}
}
