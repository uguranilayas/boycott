"use client";
import React from "react";

import Layout from "@/components/Layout";
import TextBox from "@/components/TextBox";
import TextField from "@/components/TextField";

import { Container } from "@mui/material";
import { ButtonLink } from "@/components/Button";
import { H1, H4, H4Bold, P, P2 } from "@/components/Typography";
import { publicImages } from "@/static";
import { routes } from "@/constants/routes";
import { Circle } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useMask } from "@react-input/mask";

import * as S from "./styled";

export default function Home() {
  const router = useRouter();

  const inputRef = useMask({
    mask: "_ _____ _____ _______",
    replacement: { _: /\d/ },
    showMask: false,
  });

  return (
    <Layout isHome>
      <Container maxWidth="sm">
        <S.InteractionWrap>
          <H1>BOYKOTLA</H1>
          <ButtonLink href={routes.barcodeInfo} variant="blue" fullWidth>
            <img src={publicImages.barcodeButtonIcon} alt="" />
            BARKODU OKUT
          </ButtonLink>
          <Formik
            initialValues={{ barcode: "" }}
            onSubmit={(values) => {
              router.push(
                `${routes.barcodeInfo}?barcode=${values.barcode.replace(
                  /\s/g,
                  ""
                )}&`
              );
            }}
          >
            <Form>
              <S.TextfieldWrap>
                <TextField
                  name="barcode"
                  placeholder="Barkodu Girin"
                  startAdornment={
                    <img src={publicImages.barcodeInputIcon} alt="" />
                  }
                  inputRef={inputRef}
                />
                <S.SubmitButton type="submit">
                  <img src={publicImages.submitVector} alt="" />
                </S.SubmitButton>
              </S.TextfieldWrap>
            </Form>
          </Formik>
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
