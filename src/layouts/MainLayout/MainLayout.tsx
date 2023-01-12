import { ReactNode, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./MainLayout.scss";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isShowGutters, setIsShowGutters] = useState(false);

  const toggleShowGutters = () => {
    setIsShowGutters((val) => !val);
  };

  return (
    <div className="main-layout">
      <Header toggleShowGutters={toggleShowGutters} />
      <main>
        <div className={`container main-content gx-md-5 ${isShowGutters ? "show-gutters" : ""}`}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
