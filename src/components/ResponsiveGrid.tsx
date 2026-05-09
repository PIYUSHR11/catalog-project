"use client";

import { Grid, Box } from "@mui/material";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ResponsiveGridProps {
  products: Product[];
}

export default function ResponsiveGrid({ products }: ResponsiveGridProps) {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((product, idx) => (
          <Grid
            key={idx}
size={{
            xs:12,
            sm: 6,
            md: 4,
            lg: 3,
  }}          
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
