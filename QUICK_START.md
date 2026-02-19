# Speed Insights Quick Reference

## Installation

```bash
npm install @vercel/speed-insights
```

## Usage by Framework

### Next.js App Router
```tsx
// app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function RootLayout({ children }) {
  return <html><body>{children}<SpeedInsights /></body></html>;
}
```

### Next.js Pages Router
```tsx
// pages/_app.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} /><SpeedInsights /></>;
}
```

### React
```tsx
import { SpeedInsights } from "@vercel/speed-insights/react";
export default function App() {
  return <div><SpeedInsights /></div>;
}
```

### Remix
```tsx
import { SpeedInsights } from "@vercel/speed-insights/remix";
export default function App() {
  return <html><body><SpeedInsights /></body></html>;
}
```

## Deploy & Enable

1. Deploy to Vercel: `vercel deploy`
2. Enable Speed Insights in your project dashboard
3. Visit your site to start collecting data
