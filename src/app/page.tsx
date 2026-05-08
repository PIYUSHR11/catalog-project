//import Image from "next/image";
//'use client';
import { Container, Box, Typography } from '@mui/material';
import { useProducts } from '@/hooks/useProducts';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import {Metadata} from 'next';
import CatalogClient from "@/components/CatalogClient";


export const metadata: Metadata = {
  title: "Product Catalog",
  description: "Multicategory product catalog",
};

async function getProducts(): Promise<Product[]> {
  try {
    // ✅ Load from local JSON file (no URL issues)
    const products = await import("@/data/data.json").then(m => m.default);
    return products;
  } catch (error) {
    console.error("Failed to load products:", error);
    return [];
  }
}


export default async function Home() {
  //const { categories, filteredProducts, selectedCategory, setSelectedCategory } = useProducts();
	const products = await getProducts();
/*  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Product Catalog
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Browse our categories
        </Typography>
      </Box>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

     // <ProductGrid products={filteredProducts} />
		<CatalogClient initialProducts={products} />;
	</Container>
  );
*/
return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Product Catalog
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Browse our categories
        </Typography>
      </Box>
      <CatalogClient initialProducts={products} />
    </Container>
  );
}