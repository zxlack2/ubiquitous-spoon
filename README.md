# Vercel Speed Insights Integration Demo

This repository demonstrates how to integrate Vercel Speed Insights into various web frameworks and applications.

## What's Included

This repository contains:
- A working Next.js application with Speed Insights integration (App Router)
- Next.js Pages Router example
- Example implementations for multiple frameworks:
  - React (Create React App)
  - Remix
  - Vue
  - Astro
  - SvelteKit
  - HTML

## Getting Started

### Prerequisites

- A Vercel account ([sign up for free](https://vercel.com/signup))
- Node.js 18+ installed
- A package manager (npm, pnpm, yarn, or bun)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/zxlack2/ubiquitous-spoon.git
cd ubiquitous-spoon
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Implementation Details

### Next.js App Router (Recommended)

The main implementation uses Next.js 14+ with the App Router. Speed Insights is integrated in the root layout:

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

### Next.js Pages Router

An alternative implementation using the Pages Router is available in `pages/_app.tsx`:

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

### Other Frameworks

Check the `examples/` directory for implementations in other frameworks:
- `examples/react/` - Create React App
- `examples/remix/` - Remix
- `examples/vue/` - Vue
- `examples/astro/` - Astro
- `examples/sveltekit/` - SvelteKit
- `examples/html/` - Pure HTML

## Enabling Speed Insights on Vercel

1. Deploy your app to Vercel:
```bash
vercel deploy
```

2. Go to your project dashboard on Vercel
3. Navigate to the **Speed Insights** tab
4. Click **Enable**

After enabling, Speed Insights will add routes scoped at `/_vercel/speed-insights/*` to track performance metrics.

## How It Works

Once deployed and enabled:
1. The Speed Insights script (`/_vercel/speed-insights/script.js`) is automatically injected
2. Performance metrics (Core Web Vitals) are collected from real users
3. Data is sent to Vercel's analytics platform
4. View insights in your Vercel dashboard under the Speed Insights tab

## Metrics Tracked

Speed Insights tracks these Core Web Vitals:
- **LCP** (Largest Contentful Paint) - Loading performance
- **FID** (First Input Delay) - Interactivity
- **CLS** (Cumulative Layout Shift) - Visual stability
- **FCP** (First Contentful Paint) - Initial rendering
- **TTFB** (Time to First Byte) - Server response time
- **INP** (Interaction to Next Paint) - Responsiveness

## Privacy & Compliance

Vercel Speed Insights is designed with privacy in mind:
- No personally identifiable information is collected
- Complies with GDPR, CCPA, and other privacy regulations
- Data is anonymized and aggregated
- Learn more: [Speed Insights Privacy Policy](https://vercel.com/docs/speed-insights/privacy-policy)

## Learn More

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Using Speed Insights](https://vercel.com/docs/speed-insights/using-speed-insights)
- [Package Reference](https://vercel.com/docs/speed-insights/package)
- [Metrics Explained](https://vercel.com/docs/speed-insights/metrics)
- [Troubleshooting](https://vercel.com/docs/speed-insights/troubleshooting)

## License

This project is open source and available under the MIT License.
