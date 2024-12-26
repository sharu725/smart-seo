# Svelte Smart Seo

Effortlessly optimize your SvelteKit projects with this intelligent SEO component.

It automatically includes essential meta tags, saving you valuable setup time. Plus, you have the freedom to customize and add any specific meta tags you require.

## Installation

`npm i -D svelte-smart-seo`

## Usage

#### Basic

```svelte
<script>
  import SmartSeo from "$lib/SmartSeo.svelte";
</script>

<SmartSeo />
```

#### At Layout

```svelte
<script>
  import SmartSeo from "$lib/SmartSeo.svelte";

  let { children } = $props();
</script>

<SmartSeo SITE_TITLE="A Site Title" SITE_URL="https://example.com" />

{@render children()}
```

#### Pass your own title, description etc

```svelte
<script>
  import SmartSeo from "$lib/SmartSeo.svelte";
</script>

<SmartSeo title="Sample title" description="Sample description" image="/path/to/image.img" canonical="https://canonical-url.ext" />
```

#### Use your own meta tags

```svelte
<script>
  import SmartSeo from "$lib/SmartSeo.svelte";
</script>

<SmartSeo>
    <link rel="alternate" href="http://example.com/spanish" hreflang="es-es" />
</SmartSeo>
```

## Desclaimer

This package is currently under development and may contain unforeseen issues. Please exercise caution when using it.
