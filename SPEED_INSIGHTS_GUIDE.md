# Speed Insights Integration Guide

This document provides detailed instructions for integrating Vercel Speed Insights into your application.

## Quick Start

### 1. Enable Speed Insights on Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to the **Speed Insights** tab
4. Click **Enable**

> **Note:** Enabling Speed Insights will add new routes scoped at `/_vercel/speed-insights/*` after your next deployment.

### 2. Install the Package

Choose your package manager:

**pnpm:**
```bash
pnpm add @vercel/speed-insights
```

**npm:**
```bash
npm install @vercel/speed-insights
```

**yarn:**
```bash
yarn add @vercel/speed-insights
```

**bun:**
```bash
bun add @vercel/speed-insights
```

### 3. Add Speed Insights to Your App

#### Next.js (App Router) - Recommended

Add the `SpeedInsights` component to your root layout:

```tsx
// app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

#### Next.js (Pages Router)

Add the `SpeedInsights` component to your `_app` file:

```tsx
// pages/_app.tsx
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
```

#### Create React App

Add the component to your main app file:

```tsx
// App.tsx
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div>
      {/* Your app content */}
      <SpeedInsights />
    </div>
  );
}
```

#### Remix

Add the component to your root file:

```tsx
// app/root.tsx
import { SpeedInsights } from "@vercel/speed-insights/remix";

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* Your app content */}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

#### Vue

Add the component to your main app template:

```vue
<!-- src/App.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
  <!-- Your app content -->
</template>
```

#### Nuxt

Add the component to your default layout:

```vue
<!-- layouts/default.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
  <!-- Your app content -->
</template>
```

#### SvelteKit

Call the `injectSpeedInsights` function in your root layout:

```ts
// src/routes/+layout.ts
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();
```

#### Astro

Add the component to your base layout:

```astro
---
// BaseHead.astro
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />
```

#### HTML (No Framework)

Add these scripts before the closing `</body>` tag:

```html
<!-- index.html -->
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

#### Other Frameworks

Use the generic `injectSpeedInsights` function:

```ts
// main.ts
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();
```

**Important:** Call this function only once in your app, and it must run on the client side.

## Deploy to Vercel

Deploy your application using the Vercel CLI:

```bash
vercel deploy
```

Or connect your Git repository for automatic deployments:
- Push your code to GitHub, GitLab, or Bitbucket
- Import your repository in Vercel
- Vercel will automatically deploy on every push to your main branch

## Verify Installation

After deploying, verify Speed Insights is working:

1. Visit your deployed site
2. Open browser DevTools (Network tab)
3. Look for the `/_vercel/speed-insights/script.js` script
4. If present, Speed Insights is successfully installed

## View Your Data

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Speed Insights** tab
4. Wait for visitors to generate data (typically a few hours to a few days)

## Advanced Configuration

### Custom Route Names

For Next.js versions older than 13.5, you need to manually pass the route:

```tsx
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();
  return <SpeedInsights route={router.pathname} />;
}
```

### Before Send Hook

Filter or modify data before sending to Vercel:

```tsx
<SpeedInsights
  beforeSend={(data) => {
    // Remove sensitive information
    if (data.url.includes('/private/')) {
      return null; // Don't send this metric
    }
    return data;
  }}
/>
```

### Sample Rate

Control what percentage of visitors are tracked:

```tsx
<SpeedInsights sampleRate={0.5} /> // Track 50% of visitors
```

## Troubleshooting

### No Data Appearing

- Wait at least a few hours after enabling for data to appear
- Verify the script is loaded (check browser DevTools)
- Ensure Speed Insights is enabled in your Vercel project settings
- Check that you've deployed after adding the component

### Script Not Loading

- Verify you're accessing the site through Vercel's domain
- Check that Speed Insights is enabled in project settings
- Ensure you've deployed after enabling Speed Insights

### Multiple Instances Warning

- Only include the `SpeedInsights` component once in your app
- For App Router, add it to the root layout only
- For Pages Router, add it to `_app` only

## Learn More

- [Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Package API Reference](https://vercel.com/docs/speed-insights/package)
- [Understanding Metrics](https://vercel.com/docs/speed-insights/metrics)
- [Privacy Policy](https://vercel.com/docs/speed-insights/privacy-policy)
- [Pricing](https://vercel.com/docs/speed-insights/limits-and-pricing)
