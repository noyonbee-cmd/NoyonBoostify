'use client';
import { useEffect, useState } from 'react';

export default function useScrollPast(offset) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setPast(window.scrollY > offset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return past;
}
