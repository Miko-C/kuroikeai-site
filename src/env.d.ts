/// <reference path="../.astro/types.d.ts" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

interface ImportMetaEnv {
  readonly PUBLIC_X_URL?: string;
  readonly PUBLIC_YOUTUBE_URL?: string;
  readonly PUBLIC_NOTE_URL?: string;
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
