import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts.js';

export async function get() {
  let items = await pagesGlobToRssItems(import.meta.glob('./**/*.md'));

  return rss({
    title: "莫比乌斯",
    description: "我想和这个世界谈谈",
    site: SITE_URL,
    items: items.sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate)),
    customData: `<language>zh-cn</language>`,
  });
}
