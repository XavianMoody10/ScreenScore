import React from "react";
import { MediaCatalog } from "../../components/MediaCatalog/MediaCatalog";
import { Header } from "../../layouts/Header/Header";
import { CatalogFilter } from "../../components/CatalogFilter/CatalogFilter";

export const Catalog = () => {
  return (
    <>
      <Header />

      <main>
        <section className=" space-y-2">
          <CatalogFilter />
          <MediaCatalog />
        </section>
      </main>
    </>
  );
};
