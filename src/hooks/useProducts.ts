'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import productsData from '@/data/products.json';

export const useProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(productsData.map(p => p.category)));
    return ['All', ...cats];
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return productsData;
    return productsData.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return { categories, filteredProducts, selectedCategory, setSelectedCategory };
};