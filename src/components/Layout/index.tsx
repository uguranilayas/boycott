import { PropsWithChildren } from "react";

import Header from "../Header";
import GlobalStyle from "@/styles/globalStyles";
// import Footer from '../Footer'

type Props = PropsWithChildren<{
  variant?: "default" | "login";
}>;

const Layout: React.FC<Props> = ({ children, variant }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
