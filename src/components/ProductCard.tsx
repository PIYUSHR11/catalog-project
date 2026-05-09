'use client';

import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { Product } from '@/types/product';
import styles from '@/styles/ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="250"
        image={product.image}
        alt={product.itemname}
        className={styles.image}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.itemname}
        </Typography>
        <Chip label={product.category} size="small" sx={{ mb: 2 }} />
        <Box className={styles.properties}>
          {product.itemprops.map((prop, idx) => (
            <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="textSecondary">
                {prop.label}:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight:"bold"}} component="span">
                {prop.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}