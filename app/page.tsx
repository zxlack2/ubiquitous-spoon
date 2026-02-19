export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Vercel Speed Insights Demo</h1>
      <p>
        This Next.js application demonstrates the integration of Vercel Speed
        Insights.
      </p>
      <section style={{ marginTop: "2rem" }}>
        <h2>Features</h2>
        <ul>
          <li>Real User Monitoring (RUM)</li>
          <li>Core Web Vitals tracking</li>
          <li>Performance metrics collection</li>
          <li>Seamless integration with Next.js</li>
        </ul>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>Getting Started</h2>
        <p>
          The Speed Insights component has been added to the root layout,
          which means all pages will automatically track performance metrics.
        </p>
        <p>
          Deploy this app to Vercel and enable Speed Insights in your project
          settings to start collecting data.
        </p>
      </section>
    </main>
  );
}
