import './globals.css'

export const metadata = {
  title: "E-BUUY", 
  author: "Aitisam Yaseen",
  description: "An E-commerce website built with NextJS.",
  keywords: "NextJS, ecommerce, JavaScript, ReactJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="icon" type="image/icon" href="/favicon.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
