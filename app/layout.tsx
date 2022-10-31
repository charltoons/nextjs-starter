export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js v13 Starter</title>
        <link rel="stylesheet" href="/styles/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
