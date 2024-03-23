import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Providers } from './providers';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: ` Todoy`,
  description: `Today's todo-list`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Providers>
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
