'use client';

import { Grid, Container } from '@mui/material';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {products.map((product, idx) => (
          <Grid key={idx} size={{ xs:12, sm: 6, md: 4}} >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}