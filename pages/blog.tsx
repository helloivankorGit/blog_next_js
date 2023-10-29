'use client';

import React, { useEffect, useState } from 'react';
import ThemeSwitcher from '../src/app/ThemeSwitcher';
import axios from 'axios';
import Link from 'next/link';
import { BlogPost } from '../components/types/blog';

import {
  Container,
  Title,
  SelectContainer,
  Select,
  Ul,
  Li,
  Img,
  PostTitle
} from '../components/Blog';

const apiUrl = 'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30';

const SummaryPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [sortOption, setSortOption] = useState('alphabetical');
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        setBlogPosts(response.data.blogs);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("An error occurred"));
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className='loader'></div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  const filteredAndSortedPosts = blogPosts
    .filter((post) => filterOption === 'all' || post.category === filterOption)
    .sort((a, b) => {
      if (sortOption === 'date') {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return dateB - dateA;
      } else if (sortOption === 'category') {
        return a.category.localeCompare(b.category);
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <Container>
      <ThemeSwitcher />
      <Title>Blog</Title>

      <SelectContainer>
        <Select onChange={(e) => setSortOption(e.target.value)}>
          <option value="alphabetical">Alphabetical</option>
          <option value="date">Date</option>
          <option value="category">Category</option>
        </Select>

        <Select onChange={(e) => setFilterOption(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="love">Love</option>
          <option value="math">Math</option>
          <option value="gaming">Gaming</option>
        </Select>
      </SelectContainer>

      <Ul>
        {filteredAndSortedPosts.map((post) => (
          <Li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <Img src={post.photo_url} alt={post.title} />
              <PostTitle>{post.title}</PostTitle>
            </Link>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default SummaryPage;
