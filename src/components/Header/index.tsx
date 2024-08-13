import React from "react";

import * as S from "./styled";
import { ArrowBack } from "@mui/icons-material";
import { H4 } from "../Typography";
import Link from "next/link";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <S.HeaderWrap>
      <Link href="">
        <ArrowBack />
      </Link>
      aa
      <H4>Ürün Bilgisi</H4>
      <div></div>
    </S.HeaderWrap>
  );
};

export default Header;
