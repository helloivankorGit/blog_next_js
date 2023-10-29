// pages/blog/[id].tsx

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ThemeSwitcher from '../../src/app/ThemeSwitcher';
import axios from 'axios';
import { BlogPost } from '../types/blog';

import {
  Container,
  Title,
  Description,
  Image,
  Content
} from '../../components/BlogDetail';

const PostDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id) {
      const apiUrl = `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`;
      axios.get(apiUrl)
        .then((response) => {
          console.log(response)
          setPost(response.data.blog);
        })
        .catch((error) => {
          console.error('Error fetching post data:', error);
        });
    }
  }, [id]);

  if (!post) {
    return <div className='loader'></div>;
  }

  return (
    <Container>
      <ThemeSwitcher />
      <Title>{post.title}</Title>
      <Description>{post.description}</Description>
      <Image src={post.photo_url} alt={post.title} />
      <Content dangerouslySetInnerHTML={{ __html: post.content_html }} />
    </Container>
  );
};

export default PostDetailPage;
