"use client";

import TextBox from "@/components/TextBox";
import { H1, P, P2 } from "@/components/Typography";
import React, { PropsWithChildren } from "react";

import * as S from "./styled";

type Props = PropsWithChildren<{
  barcodeNumber: string | undefined | null;
  producer?: string;
  manufacturedCountry?: string;
  origin?: string;
  productDesc?: string;
  isBoycott?: boolean;
  isForeign?: boolean;
}>;

const CompanyInfo: React.FC<Props> = ({
  barcodeNumber,
  producer,
  manufacturedCountry,
  origin,
  productDesc,
  isBoycott,
  isForeign,
}) => {
  return (
    <>
      <TextBox mt>
        <S.InfosTable>
          <div>
            <span>
              <P>Barkod</P>
            </span>
            <P>{barcodeNumber}</P>
          </div>
          <div>
            <span>
              <P>Üretici</P>
            </span>
            <P>{producer}</P>
          </div>
          <div>
            <span>
              <P>Üretim Yeri</P>
            </span>
            <P>{manufacturedCountry}</P>
          </div>
          <div>
            <span>
              <P>Menşei</P>
            </span>
            <P>{origin}</P>
          </div>
        </S.InfosTable>
        <S.MainInfoLabel isBoycott={isBoycott} isForeign={isForeign}>
          <H1>
            {isBoycott ? "Boykot" : isForeign ? "Yabancı Şİrket" : "100% Yerli"}{" "}
          </H1>
        </S.MainInfoLabel>
      </TextBox>
      <TextBox mt>
        <S.ProductDesc>
          <S.DescTabs>
            <S.DescTabItemBlue isBoycott={isBoycott}>
              <P2>İsrail Destekçisi</P2>
            </S.DescTabItemBlue>
            <S.DescTabItemYellow isForeign={isForeign}>
              <P2>Yabancı Şirket</P2>
            </S.DescTabItemYellow>
          </S.DescTabs>
          <P>{productDesc}</P>
        </S.ProductDesc>
      </TextBox>
    </>
  );
};

export default CompanyInfo;
