export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold text-indigo-900 mb-6 animate-slide-up">
        About Us
      </h1>
      <div className="prose dark:prose-invert max-w-none space-y-6 animate-slide-up">
        <p className="text-lg text-indigo-700">
          Welcome to our modern blog platform! We are passionate about sharing
          knowledge and insights on various topics, including technology,
          design, business, and marketing.
        </p>
        <p className="text-lg text-indigo-700">
          Our team of expert writers and contributors work tirelessly to bring
          you the latest trends, in-depth analyses, and practical tips to help
          you stay ahead in your field.
        </p>
        <p className="text-lg text-indigo-700">
          Whether you're a seasoned professional or just starting your journey,
          we aim to provide valuable content that inspires, educates, and
          empowers you to achieve your goals.
        </p>
      </div>
    </div>
  );
}
