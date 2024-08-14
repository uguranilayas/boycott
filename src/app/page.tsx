"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";
import ButtonLink from "@/components/Button";

import { H1, H4, H4Bold, P, P2 } from "@/components/Typography";
import { publicImages } from "@/static";
import { routes } from "@/constants/routes";

import * as S from "./styled";
import TextBox from "@/components/TextBox";
import { Circle } from "@mui/icons-material";

export default function Home() {
  return (
    <Layout isHome>
      <Container maxWidth="sm">
        <S.InteractionWrap>
          <H1>BOYKOTLA</H1>
          <ButtonLink href={routes.barcodeInfo} variant="blue" fullWidth>
            <img src={publicImages.barcodeButtonIcon} alt="" />
            BARKODU OKUT
          </ButtonLink>
          <img src={publicImages.barcodeInputExample} alt="" />
        </S.InteractionWrap>
        <TextBox mt>
          <S.UsageWrap>
            <H4Bold>Kullanım</H4Bold>
            <P2>
              Ürünün arkasında yer alan 13 haneli barkodu telefon kameranızı
              kullanarak veya elinizle girerek üretim bilgilerini öğrenin.
            </P2>
            <S.UsageCircles>
              <div>
                <Circle />
                <P>100% yerli</P>
              </div>
              <div>
                <Circle />
                <P>Yabancı Şirket</P>
              </div>
              <div>
                <Circle />
                <P>Tam Boykot</P>
              </div>
            </S.UsageCircles>
          </S.UsageWrap>
        </TextBox>
      </Container>
    </Layout>
  );
}
