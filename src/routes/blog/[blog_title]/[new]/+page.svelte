<script>
  import getHeadTags from "$lib/get_meta_tags.js";
  import { onMount } from "svelte";
  import Prism from "../../../Prism.svelte";

  let headContent = $state("");

  onMount(() => {
    headContent = getHeadTags();
  });
</script>

New page

{#if headContent}
  <Prism code={headContent} />
{/if}
