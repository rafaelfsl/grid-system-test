import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./MainLayout.scss";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <div className="container main-content gx-md-5">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
