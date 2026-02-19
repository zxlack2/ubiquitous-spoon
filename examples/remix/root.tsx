import { SpeedInsights } from "@vercel/speed-insights/remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Remix App with Speed Insights</title>
      </head>
      <body>
        <h1>Remix App</h1>
        <p>This is a Remix example with Vercel Speed Insights.</p>
        <SpeedInsights />
      </body>
    </html>
  );
}
