'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

import {
  Container,
  Title,
  CTAButton
} from '../../components/Home';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div className='loader'></div>;
  }

  return (
    <Container>
      <ThemeSwitcher />
      <Title>Blog API</Title>
      <Link href="/blog">
        <CTAButton>Go to posts</CTAButton>
      </Link>
    </Container>
  );
};

export default HomePage;
