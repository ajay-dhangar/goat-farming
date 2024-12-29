import { useState, useEffect } from 'react';
import { Product } from '../types';
import { searchProducts } from '../utils/productUtils';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchProducts(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return { searchQuery, setSearchQuery, searchResults };
}