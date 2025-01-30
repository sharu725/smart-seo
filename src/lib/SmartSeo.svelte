<script>
  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import { make_title } from "./helpers.js";

  /** @type {{
    SITE_TITLE?: string;
    SITE_URL?: string;
  }} */
  let { SITE_TITLE = "", SITE_URL = "" } = $props();

  let page_path_name = $derived(page.url.pathname.split("/"));
  let is_homepage = $derived(page.route.id === "/");

  const get_title = () => {
    if (is_homepage) {
      return "Home";
    } else if (page_path_name) {
      return make_title(page_path_name.reverse().join(" | "));
    } else {
      return "";
    }
  };

  const get_description = () => {
    if (get_title()) {
      return `${get_title().replaceAll(" | ", " ")} page${SITE_TITLE ? ` from ${SITE_TITLE}` : ""}.`;
    } else {
      return "";
    }
  };

  const get_canonical = () => {
    if (SITE_URL) {
      const trailing_slash_removed_site_url = SITE_URL.endsWith("/")
        ? SITE_URL.slice(0, -1)
        : SITE_URL;
      return `${trailing_slash_removed_site_url.replace(/\/$/, "")}${page.url.pathname}`;
    } else {
      return page.url;
    }
  };

  let final_title = $derived(get_title());
  let final_description = $derived(get_description().replaceAll("  ", " "));
  let final_canonical = $derived(get_canonical());
</script>

<svelte:head>
  {#if final_title}
    <title>{final_title}{SITE_TITLE ? ` | ${SITE_TITLE}` : ""}</title>
    <meta
      property="og:title"
      content="{final_title}{SITE_TITLE ? ` | ${SITE_TITLE}` : ''}"
    />
  {/if}
  {#if final_description}
    <meta name="description" content={final_description} />
    <meta property="og:description" content={final_description} />
  {/if}
  {#if final_canonical}
    <meta property="og:url" content={final_canonical} />
    <link rel="canonical" href={final_canonical} />
  {/if}
</svelte:head>
