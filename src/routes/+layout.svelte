<script>
  import "./style.css";
  import "./atom-dark-syntax.css";
  import Seo from "$lib/SmartSeo.svelte";

  let { children } = $props();
</script>

<Seo SITE_TITLE="Smart Seo" SITE_URL="https://smart-seo.sveltethemes.dev" />
<div class="container">
  {@render children()}
</div>
