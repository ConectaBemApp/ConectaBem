import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactQueryClientProvider } from "@/providers/ReactQueryProvider";
import { MuiThemeProvider } from "@/providers/MuiThemeProvider";
import { Toaster } from "react-hot-toast";
import { SessionProviderAuth } from "@/providers/SessionProvider";
import PatientRegistration1 from "../cadastro-de-paciente 1";
import PatientRegistration2 from "../cadastro-de-paciente 2";

export const metadata = {
  title: "ConectaBem",
  description: "ConectaBem",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-default">
        <ReactQueryClientProvider>
          <SessionProviderAuth>
            <MuiThemeProvider>
              <GoogleOAuthProvider
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
              >
                <div className="flex flex-col gap-8">
                  <Toaster position="top-center" />
                  <Header />
                  {/* <PatientRegistration1 /> */}
                  <PatientRegistration2 />
                  <div className="px-8">{children}</div>
                </div>
              </GoogleOAuthProvider>
            </MuiThemeProvider>
          </SessionProviderAuth>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
