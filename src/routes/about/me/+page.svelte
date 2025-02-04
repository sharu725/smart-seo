<script>
  import getHeadTags from "$lib/get_meta_tags.js";
  import { onMount } from "svelte";
  import Prism from "../../Prism.svelte";

  let headContent = $state("");

  onMount(() => {
    headContent = getHeadTags();
  });
</script>

About/me page

{#if headContent}
  <Prism code={headContent} />
{/if}
