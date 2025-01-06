import "./globals.css";
import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactQueryClientProvider } from '@/providers/ReactQueryProvider';
import { MuiThemeProvider } from '@/providers/MuiThemeProvider';

export const metadata = {
  title: 'ConectaBem',
  description: 'ConectaBem',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-teste">
        <MuiThemeProvider>
          <ReactQueryClientProvider>
            <GoogleOAuthProvider
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
            >
              <div className="flex flex-col gap-8">
                <Header />
                <div className="px-8">{children}</div>
              </div>
            </GoogleOAuthProvider>
          </ReactQueryClientProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
