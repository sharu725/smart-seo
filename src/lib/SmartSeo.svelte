<script>
  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import { make_title } from "./helpers.js";

  /** @type {{
    SITE_TITLE?: string;
    SITE_URL?: string;
  }} */
  let { SITE_TITLE = "", SITE_URL = "" } = $props();

  let page_param_name = $derived(Object.values(page?.params));
  let page_route_name = $derived(page.route.id?.split("/").slice(1));
  let is_homepage = $derived(page.route.id === "/");

  const get_title = () => {
    if (page_param_name?.lenth) {
      return make_title(page_param_name.reverse().join(" | "));
    } else if (page_route_name) {
      return make_title(page_route_name.reverse().join(" | "));
    } else if (is_homepage) {
      return "Home";
    } else {
      return "";
    }
  };

  const get_description = () => {
    if (get_title()) {
      return `This is ${get_title()} page${SITE_TITLE ? ` from ${SITE_TITLE}` : ""}.`;
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
  let final_description = $derived(get_description());
  let final_canonical = $derived(get_canonical());
</script>

<svelte:head>
  {#if final_title}
    <title>{final_title}{SITE_TITLE ? ` | ${SITE_TITLE}` : ""}</title>
    <meta property="og:title" content={final_title} />
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
