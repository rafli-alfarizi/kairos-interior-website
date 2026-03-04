import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white min-h-[80vh] flex flex-col justify-center items-center p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl font-light">
            {t('subtitle')}
          </p>
          <div className="flex gap-4">
            <a href="/projects" className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Projects
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
              {t('contactSales')}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">Discover some of our best interior design work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder Project Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <div className="aspect-[4/3] w-full bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Image {i}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Minimalist Villa {i}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">A beautiful modern villa with minimalist touches and natural lighting.</p>
                  <a href={`/projects/project-${i}`} className="text-blue-600 font-medium hover:text-blue-800 transition">View Details &rarr;</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/projects" className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Placeholder Testimonials */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">{"★".repeat(5)}</div>
                <p className="text-gray-700 italic mb-6">"The team at InteriorPro transformed our outdated living room into a modern masterpiece. Highly recommended!"</p>
                <div className="font-semibold text-gray-900">- Sarah Johnson</div>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">{"★".repeat(5)}</div>
                <p className="text-gray-700 italic mb-6">"Professional, on-time, and within budget. Their 3D visualization helped us see exactly what we were getting."</p>
                <div className="font-semibold text-gray-900">- Michael Chen</div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
