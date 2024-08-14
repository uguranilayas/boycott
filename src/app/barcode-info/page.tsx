"use client";

import Layout from "@/components/Layout";
import { routes } from "@/constants/routes";
import React from "react";

const CompanyInfo: React.FC = () => {
  return (
    <Layout title="Ürün Bilgisi" backRoute={routes.index}>
      barcode
    </Layout>
  );
};

export default CompanyInfo;
