export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold text-indigo-900 mb-6 animate-slide-up">
        Contact Us
      </h1>
      <form className="space-y-6 animate-slide-up">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-indigo-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-indigo-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-indigo-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition-colors"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors transform hover:scale-105 shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
