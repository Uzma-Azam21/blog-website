"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

const blogPosts = [
  {
    slug: "wearable-medical-devices",
    title: "Making wearable medical devices more patient-friendly",
    content:
      "Wearable medical devices are revolutionizing healthcare by providing continuous monitoring and data collection. However, to be truly effective, these devices need to be comfortable and easy to use. This article explores the latest innovations in wearable medical technology and how they're improving patient care and compliance.",
    author: "Dr. Sarah Khan",
    date: "Oct 24, 2024",
    image: "/images/wearable.png",
  },
  {
    slug: "revolutionizing-ecommerce",
    title: "Revolutionizing $26M Series D support growth of e-commerce",
    content:
      "The e-commerce industry is experiencing unprecedented growth, fueled by innovative technologies and changing consumer behaviors. This article delves into how a recent $26 million Series D funding round is set to transform the e-commerce landscape, enabling businesses to scale operations and enhance customer experiences.",
    author: "Miraal Fatima",
    date: "Oct 23, 2024",
    image: "/images/revolution.png",
  },
  {
    slug: "ai-in-healthcare",
    title: "The future of AI in healthcare",
    content:
      "Artificial Intelligence is poised to revolutionize healthcare, from improving diagnostic accuracy to personalizing treatment plans. This article explores the current applications of AI in healthcare and the potential future developments that could transform patient care and medical research.",
    author: "Dr. Ali Ahmed",
    date: "Oct 22, 2024",
    image: "/images/ai.png",
  },
  {
    slug: "sustainable-tech",
    title: "Sustainable tech: Building a greener future",
    content:
      "As the world grapples with climate change, the tech industry is stepping up to the challenge. This article examines how technology companies are leading the charge in environmental sustainability, from developing eco-friendly products to implementing green practices in their operations.",
    author: "Arham Khan",
    date: "Oct 21, 2024",
    image: "/images/sustainable.png",
  },
];

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Umair Azam",
      content: "Great article!",
      date: "Oct 24, 2024",
    },
    {
      id: 2,
      author: "Rubab Azam",
      content: "Very informative, thanks!",
      date: "Oct 24, 2024",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !name.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const comment: Comment = {
      id: comments.length + 1,
      author: name,
      content: newComment,
      date: formattedDate,
    };

    setComments([...comments, comment]);
    setNewComment("");
    setName("");
  };

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-indigo-900 mb-4">{post.title}</h1>
      <div className="mb-4 text-indigo-600">
        <span>{post.author}</span> • <time>{post.date}</time>
      </div>
      <div className="w-full mb-8">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments</h2>
        <form onSubmit={handleSubmitComment} className="mb-8 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Comment
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{comment.author}</span>
                <time className="text-sm text-gray-500">{comment.date}</time>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
