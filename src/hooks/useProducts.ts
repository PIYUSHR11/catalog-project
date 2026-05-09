'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import productsData from '@/data/data.json';

export const useProducts = (initialProducts :Product[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    //const cats = Array.from(new Set(productsData.map(p => p.category)));
	 // const cats = Array.from(new Set(initialProducts.map(p => p.category)));
	  const cats = ["All", ...new Set(initialProducts.map(p => p.category))];
    //return ['All', ...cats];
	return cats;
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return initialProducts;
    return initialProducts.filter(p => p.category === selectedCategory);
  }, [initialProducts,selectedCategory]);

  return { categories, filteredProducts, selectedCategory, setSelectedCategory };
};