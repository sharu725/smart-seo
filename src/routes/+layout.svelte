<script>
  import "./style.css";
  import "./atom-dark-syntax.css";
  import Seo from "$lib/SmartSeo.svelte";

  let { children } = $props();
</script>

<Seo SITE_TITLE="SuperSite" SITE_URL="https://something.com/" />
<div class="container">
  {@render children()}
</div>
