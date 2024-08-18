"use strict";
import React from "react";

import TextBox from "@/components/TextBox";
import { H2, P } from "@/components/Typography";
import Button from "@/components/Button";
import { Feedback } from "@mui/icons-material";
import { Grid } from "@mui/material";

import * as S from "./styled";

const NotFound: React.FC = ({}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextBox mt>
          <S.NotFoundWrap>
            <H2>Üzgünüz :(</H2>
            <P>
              Bu barkodla ilgili herhangi bir bilgi bulunamamıştır.
              <br />
              <br />
              Veritabanımızı genişletmek için mevcut barkodla ilgili bilgi
              verebiliyorsanız lütfen geribildirim gönder seçeneğine tıklayınız.
            </P>
          </S.NotFoundWrap>
        </TextBox>
      </Grid>
      <Grid item spacing={2} xs={12} sx={{ display: "flex" }}>
        <Button variant="blue" fullWidth>
          <Feedback />
          Geribildirim Gönder
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
