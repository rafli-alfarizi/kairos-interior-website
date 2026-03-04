export default function Projects() {
  return (
    <main className="flex-1 py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8">Our Projects</h1>
        <p className="text-xl text-gray-500 max-w-3xl mb-12">
          Explore our portfolio of interior design projects. From cozy apartments to luxurious villas, we bring your vision to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
              <div className="aspect-[4/3] w-full bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  Project Image {i}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Residential</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Modern Minimalist Villa {i}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  A beautiful modern villa with minimalist touches and natural lighting.
                </p>
                <a href={`/projects/project-${i}`} className="text-blue-600 font-medium hover:text-blue-800 transition inline-flex items-center">
                  View Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
