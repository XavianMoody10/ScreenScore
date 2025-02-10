import React from "react";
import { MediaCatalog } from "../../components/MediaCatalog/MediaCatalog";
import { CatalogFilter } from "../../components/CatalogFilter/CatalogFilter";

export const Catalog = () => {
  return (
    <>
      <main>
        <section className=" space-y-2">
          <CatalogFilter />
          <MediaCatalog />
        </section>
      </main>
    </>
  );
};
