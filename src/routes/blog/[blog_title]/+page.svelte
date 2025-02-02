<script>
  import getHeadTags from "$lib/get_meta_tags.js";
  import { onMount } from "svelte";

  let headContent = $state("");

  onMount(() => {
    headContent = getHeadTags();
  });
</script>

Blog post

<pre class="language-html">
    {headContent}</pre>

<style>
  pre {
    white-space: pre-line !important;
  }
</style>
