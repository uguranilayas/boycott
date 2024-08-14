import React from "react";

import * as S from "./styled";
import { ArrowBack } from "@mui/icons-material";
import { H4 } from "../Typography";
import Link from "next/link";
import { Container } from "@mui/material";

type Props = {
  isHome?: boolean;
  title?: string;
  backRoute?: string;
};

const Header: React.FC<Props> = ({ isHome, title, backRoute }) => {
  return (
    <S.HeaderWrap isHome={isHome}>
      <Container maxWidth="sm">
        <S.HeaderItemsWrap>
          <Link href={backRoute ?? ""}>
            <ArrowBack />
          </Link>
          <H4>{title}</H4>
          <div></div>
        </S.HeaderItemsWrap>
      </Container>
    </S.HeaderWrap>
  );
};

export default Header;
