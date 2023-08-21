import "@styles/globals.css";

import Navigation from "@components/Navigation";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
            <Navigation />
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
