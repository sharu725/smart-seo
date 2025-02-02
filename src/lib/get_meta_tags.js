import { browser } from "$app/environment";

const getHeadTags = () => {
  if (!browser) return "";
  console.log(document);
  return [
    document.querySelector("title"),
    document.querySelector('meta[property="og:title"]'),
    document.querySelector('meta[name="description"]'),
    document.querySelector('meta[property="og:description"]'),
    document.querySelector('link[rel="canonical"]'),
    document.querySelector('meta[property="og:url"]'),
  ]
    .map((el) => el?.outerHTML.trim() + "\n")
    .filter(Boolean)
    .join("");
};

export default getHeadTags;
