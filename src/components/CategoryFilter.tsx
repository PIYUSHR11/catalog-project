'use client';

import { Box, Button } from '@mui/material';

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelect }: Props) {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
      {categories.map(cat => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? 'contained' : 'outlined'}
          onClick={() => onSelect(cat)}
          sx={{ borderRadius: '20px' }}
        >
          {cat}
        </Button>
      ))}
    </Box>
  );
}