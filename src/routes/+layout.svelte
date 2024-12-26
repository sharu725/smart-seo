<script>
  import Seo from "$lib/SmartSeo.svelte";

  let { children } = $props();
</script>

<Seo SITE_TITLE="SuperSite" SITE_URL="https://something.com/" />
{@render children()}
