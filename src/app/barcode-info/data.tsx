export interface FirmType {
  id: number;
  barcodeNumber?: number;
  producer?: string;
  manufacturedCountry?: string;
  origin?: string;
  productDesc?: string;
  isBoycott?: boolean;
  isForeign?: boolean;
}

export const Database: Array<FirmType> = [
  {
    id: 1,
    barcodeNumber: 8682530,
    producer: "Kellog’s Company",
    manufacturedCountry: "Türkiye",
    origin: "A.B.D",
    productDesc:
      "A.B.D menşeili Kellogg's Company şirketi İsrail'e verdiği destekten ve yerli olmadığından tam boykot kategorisindedir.",
    isBoycott: true,
    isForeign: true,
  },
  {
    id: 2,
    barcodeNumber: 5449000,
    producer: "Coca-Cola",
    manufacturedCountry: "Türkiye",
    origin: "A.B.D",
    productDesc:
      "A.B.D menşeili Coca-Cola Company şirketi İsrail'e verdiği destekten ve yerli olmadığından tam boykot kategorisindedir.",
    isBoycott: true,
    isForeign: true,
  },
  {
    id: 3,
    barcodeNumber: 8690574,
    producer: "Pepsi Co.",
    manufacturedCountry: "Türkiye",
    origin: "A.B.D",
    productDesc:
      "A.B.D menşeili Pepsi Co. şirketi İsrail'e verdiği destekten ve yerli olmadığından tam boykot kategorisindedir.",
    isBoycott: true,
    isForeign: true,
  },
];
