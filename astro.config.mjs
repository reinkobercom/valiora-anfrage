// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const SITE = 'https://go.valiora-partner.de';

export default defineConfig({
  site: SITE,
  // Alle Seiten werden statisch gebaut. Nur das Formular-Endpoint unter /api/*
  // wird on demand gerendert (export const prerender = false in der Datei).
  output: 'static',
  adapter: vercel(),
  // URLs exakt wie bei Onepage: ohne Schrägstrich am Ende (/kurz, /danke).
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
