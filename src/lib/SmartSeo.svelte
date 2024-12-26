<script>
  import { page } from "$app/state";
  import { make_title } from "./helpers.js";
  import { site } from "./stores.svelte.js";

  let { title, description, image, canonical, SITE_TITLE, SITE_URL, children } =
    $props();

  if (SITE_TITLE) {
    site.title = SITE_TITLE;
  }
  if (SITE_URL) {
    site.url = SITE_URL;
  }
  let page_param_name = $derived(Object.values(page?.params)?.at(-1));
  let page_route_name = $derived(page.route.id?.split("/").pop());
  let is_homepage = $derived(page.route.id === "/");

  const get_title = (title) => {
    if (title) {
      return title;
    } else if (page_param_name) {
      return make_title(page_param_name);
    } else if (page_route_name) {
      return make_title(page_route_name);
    } else if (is_homepage) {
      return "Home";
    } else {
      return "";
    }
  };

  const get_description = (description) => {
    if (description) {
      return description;
    } else if (title) {
      return `This is ${title} page ${site.title ? `from ${site.title}` : ""}.`;
    } else if (get_title(title)) {
      return `This is ${get_title(title)} page ${site.title ? `from ${site.title}` : ""}.`;
    } else {
      return "";
    }
  };

  const get_canonical = (canonical) => {
    if (canonical) {
      return canonical;
    } else if (site.url) {
      const trailing_slash_removed_site_url = site.url.endsWith("/")
        ? site.url.slice(0, -1)
        : site.url;
      return `${trailing_slash_removed_site_url.replace(/\/$/, "")}${page.url.pathname}`;
    } else {
      return page.url;
    }
  };

  let final_title = $derived(get_title(title));
  let final_description = $derived(get_description(description));
  let final_canonical = $derived(get_canonical(canonical));
</script>

<svelte:head>
  <title>{final_title} {site.title ? `| ${site.title}` : ""}</title>
  <meta name="description" content={final_description} />
  <meta property="og:title" content={final_title} />
  <meta property="og:description" content={final_description} />
  {#if image}
    <meta property="og:image" content={image} />
  {/if}
  <meta property="og:url" content={page.url} />
  <link rel="canonical" href={final_canonical} />
  {@render children?.()}
</svelte:head>
