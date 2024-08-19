import React from "react";

import { ArrowBack } from "@mui/icons-material";
import { H4 } from "../Typography";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation"; // Usage: App router

import * as S from "./styled";

type Props = {
  isHome?: boolean;
  title?: string;
};

const Header: React.FC<Props> = ({ isHome, title }) => {
  const router = useRouter();

  return (
    <S.HeaderWrap isHome={isHome}>
      <Container maxWidth="sm">
        <S.HeaderItemsWrap>
          <ArrowBack onClick={() => router.back()} />
          <H4>{title}</H4>
          <div></div>
        </S.HeaderItemsWrap>
      </Container>
    </S.HeaderWrap>
  );
};

export default Header;
