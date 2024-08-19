import { PropsWithChildren } from "react";

import Header from "../Header";
import GlobalStyle from "@/styles/globalStyles";
// import Footer from '../Footer'

type Props = PropsWithChildren<{
  isHome?: boolean;
  title?: string;
}>;

const Layout: React.FC<Props> = ({ children, isHome, title }) => {
  return (
    <>
      
      <Header isHome={isHome} title={title} />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
