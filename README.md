# Smart Seo for Svelte

Effortlessly optimize your SvelteKit projects with this intelligent SEO component. It automatically includes essential meta tags, saving you valuable setup time.

Just drop this component on the main layout and it does its magic for all child pages.

Use this on non-critical projects where you do not want to add basic SEO tags yourself. For example, demo projects, package sites etc.

If you want SEO on critical websites, then consider using [svelte-seo](https://github.com/artiebits/svelte-seo).

## Installation

```bash
npm i -D svelte-smart-seo
```

## Usage

You should be using it only at `routes/+layout.svelte`, nowhere else.

```svelte
<script>
  import SmartSeo from "svelte-smart-seo";
</script>

<SmartSeo SITE_TITLE="SuperSite" SITE_URL="https://example.com" />
```

#### Tags added

It adds `title`, `description`, and `canonical` tags (and their open graph versions). Nothing else.

#### Examples

Imagine you have a page [/about](/about)

Here are the tags added.

```html
<title>About | SuperSite</title>
<meta property="og:title" content="About | SuperSite" />
<meta name="description" content="This is About page from SuperSite." />
<meta property="og:description" content="This is About page from SuperSite." />
<link rel="canonical" href="https://something.com/about" />
<meta property="og:url" content="https://something.com/about" />
```

Page - [/about/me](/about/me)

```html
<title>Me | SuperSite</title>
<meta property="og:title" content="Me | SuperSite" />
<meta name="description" content="Me page from SuperSite." />
<meta property="og:description" content="Me page from SuperSite." />
<link rel="canonical" href="https://something.com/about/me" />
<meta property="og:url" content="https://something.com/about/me" />
```

Page - [/blog/svelte-seo/new/package](/blog/svelte-seo/new/package)

```html
<title>Package | New | Svelte Seo | Blog | SuperSite</title>
<meta
  property="og:title"
  content="Package | New | Svelte Seo | Blog | SuperSite"
/>
<meta
  name="description"
  content="Package New Svelte Seo Blog page from SuperSite."
/>
<meta
  property="og:description"
  content="Package New Svelte Seo Blog page from SuperSite."
/>
<link
  rel="canonical"
  href="https://something.com/blog/svelte-seo/new/package"
/><meta
  property="og:url"
  content="https://something.com/blog/svelte-seo/new/package"
/>
```

#### More Tags

You have to add them yourself using the default `svete:head`.

```svelte
<svelte:head>
<!-- Your custom tags -->
</svelte:head>
```

## Desclaimer

This package is currently under development and may contain unforeseen issues. Please exercise caution when using it.

[github](https://github.com/sharu725/smart-seo) [npm](https://www.npmjs.com/package/svelte-smart-seo)
