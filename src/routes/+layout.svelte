<script>
  import "./style.css";
  import "./atom-dark-syntax.css";
  import Seo from "$lib/SmartSeo.svelte";

  let { children } = $props();
</script>

<nav class="container">
  <ul class="flex">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/about/me">About/me</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
    <li>
      <a href="/blog/a">Blog/a</a>
    </li>
    <li>
      <a href="/blog/a/b">Blog/a/b</a>
    </li>
  </ul>
</nav>
<Seo SITE_TITLE="Smart Seo" SITE_URL="https://smart-seo.sveltethemes.dev" />
<div class="container">
  {@render children()}
</div>

<style>
  .flex {
    display: flex;
    padding: 0;
  }
  li {
    margin-right: 1rem;
    list-style: none;
  }
</style>
