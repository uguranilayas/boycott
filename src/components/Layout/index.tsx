import { PropsWithChildren } from "react";

import Header from "../Header";
import GlobalStyle from "@/styles/globalStyles";
// import Footer from '../Footer'

type Props = PropsWithChildren<{
  isHome?: boolean;
  title?: string;
  backRoute?: string;
}>;

const Layout: React.FC<Props> = ({ children, isHome, title, backRoute }) => {
  return (
    <>
      <GlobalStyle />
      <Header isHome={isHome} title={title} backRoute={backRoute} />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
