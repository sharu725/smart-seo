# Svelte Smart Seo

Effortlessly optimize your SvelteKit projects with this intelligent SEO component.

It automatically includes essential meta tags, saving you valuable setup time.

## Installation

`npm i -D svelte-smart-seo`

## Usage

#### Basic

You should be using it only at `routes/+layout.svelte`, nowhere else.

```svelte
<script>
  import SmartSeo from "$lib/SmartSeo.svelte";
</script>


<SmartSeo SITE_TITLE="A Site Title" SITE_URL="https://example.com" />
```

#### Tags added

It adds `title`, `description`, and `canonical` tags (and their open graph versions). Nothing else.

#### More Tags

You have to add them yourself using the default ``svete:head``.

```svelte

<svelte:head>
<!-- Your custom tags -->
</svelte:head>
```

## Desclaimer

This package is currently under development and may contain unforeseen issues. Please exercise caution when using it.
