import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  author: string;
  date: string;
}

export function BlogCard({
  title,
  excerpt,
  slug,
  coverImage,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 sm:h-56">
          <Image
            src={coverImage}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-indigo-900 mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-indigo-700 mb-4 line-clamp-2 text-sm">{excerpt}</p>
          <div className="flex items-center text-sm text-indigo-600">
            <span className="font-medium">{author}</span>
            <span className="mx-2">•</span>
            <time>{date}</time>
          </div>
        </div>
      </Link>
    </div>
  );
}
