"use client";
import { useState, useMemo } from "react";
import { Box, Container } from "@mui/material";
import { Product } from "@/types/product";
import CategoryFilter from "./CategoryFilter";
import ResponsiveGrid from "./ResponsiveGrid";

interface CatalogClientProps {
  initialProducts: Product[];
}

export default function CatalogClient({ initialProducts }: CatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
    // Attach a deterministic ID without touching the JSON source
  const productsWithId = useMemo(() => 
    initialProducts.map((p, i) => ({
      ...p,
      _id: p.slug || p.name || `product-${i}`,
    })),
    [initialProducts]
  );


  // Extract unique categories
  const categories = useMemo(() => {
   // const cats = ["all", ...new Set(initialProducts.map(p => p.category))];
    const cats = ["All", ...new Set(productsWithId.map(p=>p.category))];
	return cats;
  }, [productsWithId]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return productsWithId;
    return productsWithId.filter(p => p.category === selectedCategory);
  }, [productsWithId, selectedCategory]);

  return (
    //<Container maxWidth="lg" sx={{ py: 4 }}>
	<Box sx={{ py: 4 }}>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ResponsiveGrid products={filteredProducts} />
    </Box>
	//</Container>
  );
}
