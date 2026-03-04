export default function Blog() {
  return (
    <main className="flex-1 py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8">Interior Design Blog</h1>
        <p className="text-xl text-gray-500 max-w-3xl mb-12">
          Read our latest articles on interior design trends, tips, and inspiration to elevate your space.
        </p>

        <div className="space-y-16">
          {[1, 2, 3].map((i) => (
            <article key={i} className="flex flex-col lg:flex-row gap-8 items-center bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="lg:w-1/2 aspect-video w-full rounded-2xl overflow-hidden bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-xl">
                  Blog Featured Image {i}
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <time dateTime="2023-10-10">October 10, 2023</time>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Tips & Tricks</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition">
                  <a href={`/blog/post-${i}`}>10 Ways to Maximize Space in a Small Apartment</a>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Discover clever furniture arrangements and storage solutions to make your compact living space feel larger and more inviting without sacrificing style or comfort.
                </p>
                <a href={`/blog/post-${i}`} className="text-blue-600 font-semibold hover:text-blue-800 transition text-lg inline-flex items-center">
                  Read Article
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
