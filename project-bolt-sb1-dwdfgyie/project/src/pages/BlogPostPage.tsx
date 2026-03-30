import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Post not found</h1>
          <Link to="/blog" className="text-sm uppercase tracking-wider underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-sm uppercase tracking-wider mb-12 hover:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
          {post.date}
        </p>

        <h1
          className="text-4xl md:text-5xl font-serif mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {post.title}
        </h1>

        <div
          className="aspect-video mb-12"
          style={{
            background: post.image,
          }}
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">{post.content}</p>
        </div>
      </article>
    </div>
  );
}
