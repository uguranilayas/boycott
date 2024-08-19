"use client";

import React, { PropsWithChildren, Suspense } from "react";

import Layout from "@/components/Layout";
import { Box, Container } from "@mui/material";
import Button from "@/components/Button";
import { publicImages } from "@/static";
import { useSearchParams } from "next/navigation";
import CompanyInfo from "@/components/Containers/CompanyInfo/page";
import { Database } from "./data";
import NotFound from "@/components/Containers/NotFound/page";

const SearchBarcode = (passedBarcode: string | undefined | null) => {
  console.log("-------------------REFRESHED-------------------");

  // Create a database barcodes array
  let allDatabaseBarcodes: (number | undefined)[] = [];
  Database.map(({ barcodeNumber }) => {
    allDatabaseBarcodes.push(barcodeNumber);
  });

  const passedBarcodeToDigits = Array.from(String(passedBarcode), Number); // Turn barcode into digits array

  let leftDatabaseBarcodes = allDatabaseBarcodes; // First leftDatabaseBarcodes contains all db, it will decrease in the loop and will have a final value either one or zero
  for (
    let firstIndex = 2;
    firstIndex < passedBarcodeToDigits.length;
    firstIndex++
  ) {
    // Destructuring passed barcode
    let currentPassedBarcode = passedBarcodeToDigits.slice(0, firstIndex + 1); // Slice array for every index
    const currentPassedNumber = Number(currentPassedBarcode.join("")); // Turn sliced array into an integar

    if (leftDatabaseBarcodes.length > 1) {
      let willSplicedValues = []; // these values will be spliced on every loop end

      console.log(leftDatabaseBarcodes, "started with this array");
      for (
        let secondIndex = 0;
        secondIndex < leftDatabaseBarcodes.length;
        secondIndex++
      ) {
        const secondElement = leftDatabaseBarcodes[secondIndex];

        // Destructring database Barcode
        const dbBarcodeToDigits = Array.from(String(secondElement), Number); // Turn Database barcode into digits array
        let currentSlicedDbBarcode = dbBarcodeToDigits.slice(0, firstIndex + 1); // Slice Database Barcode array for every index
        const currentDatabaseNumber = Number(currentSlicedDbBarcode.join("")); // Turn sliced array into an integar

        if (currentDatabaseNumber != currentPassedNumber) {
          willSplicedValues.push(secondElement);
          // console.log(willSplicedValues, "pushed to splice");
        }
      }

      // splicing the values on every loop end
      willSplicedValues.map((willRemoved) => {
        for (let index = 0; index < leftDatabaseBarcodes.length; index++) {
          const left = leftDatabaseBarcodes[index];
          if (left == willRemoved) {
            leftDatabaseBarcodes.splice(index, 1);
            console.log(willRemoved, "is spliced");
          }
        }
      });
      console.log("loop end");

      if (leftDatabaseBarcodes.length === 1) {
        console.log(leftDatabaseBarcodes[0], "found");
        return leftDatabaseBarcodes[0];
        break;
      } else if (leftDatabaseBarcodes.length === 0) {
        console.log("not found");
        return null;
        break;
      }
    }
  }
  console.log(leftDatabaseBarcodes, "end result");
};

export default function BarcodeInfo() {
  const getFirmObject = (Result: number | undefined | null) => {
    if (Result) {
      const ObjectFound = Database.find(
        ({ barcodeNumber }) => barcodeNumber === Result
      );
      console.log(ObjectFound, "this is the object");
      return ObjectFound;
    } else {
      console.log("couldn't find");
      return null;
    }
  };

  const searchParams = useSearchParams();
  const barcodeUrl = searchParams.get("barcode");

  const Result = SearchBarcode(barcodeUrl);
  const FirmObject = getFirmObject(Result);

  return (
    <Suspense>
      <Layout title="Ürün Bilgisi">
        <Container maxWidth="sm">
          {FirmObject ? (
            <>
              <CompanyInfo
                barcodeNumber={barcodeUrl}
                producer={FirmObject?.producer}
                manufacturedCountry={FirmObject?.manufacturedCountry}
                origin={FirmObject?.origin}
                isForeign={FirmObject?.isForeign}
                isBoycott={FirmObject?.isBoycott}
                productDesc={FirmObject?.productDesc}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "16px",
                }}
              >
                <Button variant="blue">
                  <img src={publicImages.barcodeButtonIcon} alt="" />
                  BAŞKA ÜRÜN OKUT
                </Button>
                <img src={publicImages.barcodeInputExample} alt="" />
              </Box>
            </>
          ) : (
            <NotFound />
          )}
        </Container>
      </Layout>
    </Suspense>
  );
}
