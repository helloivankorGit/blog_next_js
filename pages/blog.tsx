'use client';

// SummaryPage.tsx

import React, { useMemo } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { BlogPost } from '../components/types/blog';
import { Container, Title, SelectContainer, Select, Ul, Li, Img, PostTitle } from '../components/Blog';
import ThemeSwitcher from '../src/app/ThemeSwitcher';

// This function would be outside your component
export async function getStaticProps() {
  try {
    const apiUrl = 'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30';
    const response = await axios.get(apiUrl);
    return { props: { initialBlogPosts: response.data.blogs } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}

// Adjust your component to accept these props
const SummaryPage: React.FC<{ initialBlogPosts: BlogPost[], error?: string }> = ({ initialBlogPosts, error }) => {
  const [sortOption, setSortOption] = useState('alphabetical');
  const [filterOption, setFilterOption] = useState('all');

  // Memoize the sorting and filtering
  const filteredAndSortedPosts = useMemo(() => {
    return initialBlogPosts
      .filter((post) => filterOption === 'all' || post.category === filterOption)
      .sort((a, b) => {
        if (sortOption === 'date') {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        } else if (sortOption === 'category') {
          return a.category.localeCompare(b.category);
        } else {
          return a.title.localeCompare(b.title);
        }
      });
  }, [initialBlogPosts, sortOption, filterOption]);

  // Handle select changes
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value);
  };

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Container>
      <ThemeSwitcher />
      <Title>Blog</Title>

      <SelectContainer>
        <Select onChange={handleSortChange}>
          <option value="alphabetical">Alphabetical</option>
          <option value="date">Date</option>
          <option value="category">Category</option>
        </Select>

        <Select onChange={handleFilterChange}>
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
              <a> {/* Ensure the anchor tag for accessibility */}
                <Img src={post.photo_url} alt={post.title} />
                <PostTitle>{post.title}</PostTitle>
              </a>
            </Link>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default SummaryPage;

