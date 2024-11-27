import { BlogCard } from "@/components/BlogCard";

const posts = [
  {
    title: "Making wearable medical devices more patient-friendly",
    excerpt:
      "Learn about the latest innovations in wearable medical technology and how they are improving patient care.",
    slug: "wearable-medical-devices",
    coverImage: "/images/wearable.png",
    author: "Dr. Sarah Khan",
    date: "Oct 24, 2024",
  },
  {
    title: "Revolutionizing $26M Series D support growth of e-commerce",
    excerpt:
      "Discover how the latest funding round is transforming the e-commerce financial landscape.",
    slug: "revolutionizing-ecommerce",
    coverImage: "/images/revolution.png",
    author: "Miraal Fatima",
    date: "Oct 23, 2024",
  },
  {
    title: "The future of AI in healthcare",
    excerpt:
      "Explore how artificial intelligence is reshaping the healthcare industry and improving patient outcomes.",
    slug: "ai-in-healthcare",
    coverImage: "/images/ai.png",
    author: "Dr. Ali Ahmed",
    date: "Oct 22, 2024",
  },
  {
    title: "Sustainable tech: Building a greener future",
    excerpt:
      "Discover how technology companies are leading the charge in environmental sustainability.",
    slug: "sustainable-tech",
    coverImage: "/images/sustainable.png",
    author: "Arham Khan",
    date: "Oct 21, 2024",
  },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8 animate-slide-up">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div
            key={post.slug}
            className={`animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <BlogCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}
