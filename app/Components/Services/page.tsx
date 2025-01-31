import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Ourservices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600">Specialized courses for biologists and bioinformaticians.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
          {/* Python for Biologists Card */}
          <div className="bg-white border border-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <Image
                src="/Image/IMG1.jpg" // Add a relevant image
                alt="Python for Biologists"
                className="w-full h-56 object-contain"
                width={500} // Add appropriate width
                height={250} // Add appropriate height
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg">Popular</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Python for Biologists</h3>
              <p className="text-lg text-gray-700 mb-4">
                Learn Python programming with a focus on biological data analysis. Suitable for beginners and biologists looking to enhance their research skills.
              </p>
              <Link
                href="/python-for-biologists"
                passHref
              >
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Bioinformatics Courses Card */}
          <div className="bg-white border border-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <Image
                src="/Image/IMG2.jpg" // Add a relevant image
                alt="Bioinformatics Courses"
                className="w-full h-56 object-contain"
                width={500} // Add appropriate width
                height={250} // Add appropriate height
              />
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-lg">Popular</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Bioinformatics Courses</h3>
              <p className="text-lg text-gray-700 mb-4">
                Dive deep into bioinformatics, focusing on data analysis, genomic sequences, and computational tools used in biological research.
              </p>
              <Link
                href="/bioinformatics-courses"
                passHref
              >
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                  Explore Courses
                </button>
              </Link>
            </div>
          </div>

          {/* Data Analysis for Biologists Card */}
          <div className="bg-white border border-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <Image
                src="/Image/IMG3.jpg" // Add a relevant image
                alt="Data Analysis for Biologists"
                className="w-full h-56 object-cover"
                width={500} // Add appropriate width
                height={250} // Add appropriate height
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg">New</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Data Analysis for Biologists</h3>
              <p className="text-lg text-gray-700 mb-4">
                Master statistical techniques and tools for analyzing biological data, making informed conclusions, and visualizing your findings.
              </p>
              <Link
                href="/data-analysis-for-biologists"
                passHref
              >
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Computational Biology Card */}
          <div className="bg-white border border-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <Image
                src="/Image/IMG4.jpg" // Add a relevant image
                alt="Computational Biology"
                className="w-full h-56 object-contain"
                width={500} // Add appropriate width
                height={250} // Add appropriate height
              />
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-lg">Advanced</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Computational Biology</h3>
              <p className="text-lg text-gray-700 mb-4">
                Explore how computational models and simulations are used to study complex biological systems, including molecular interactions and evolution.
              </p>
              <Link
                href="/computational-biology"
                passHref
              >
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                  Explore Course
                </button>
              </Link>
            </div>
          </div>

          {/* Machine Learning in Bioinformatics Card */}
          <div className="bg-white border border-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <Image
                src="/Image/IMG5.jpg" // Add a relevant image
                alt="Machine Learning in Bioinformatics"
                className="w-full h-56 object-contain"
                width={500} // Add appropriate width
                height={250} // Add appropriate height
              />
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-lg">Advanced</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Machine Learning in Bioinformatics</h3>
              <p className="text-lg text-gray-700 mb-4">
                Learn how to apply machine learning algorithms to analyze biological datasets, such as gene expression data and protein structures.
              </p>
              <Link
                href="/machine-learning-in-bioinformatics"
                passHref
              >
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Bioinformatics Programming Card */}
          <div className="bg-white border border-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <Image
                src="/Image/IMG6.jpg" // Add a relevant image
                alt="Bioinformatics Programming"
                className="w-full h-56 object-cover"
                width={500} // Add appropriate width
                height={250} // Add appropriate height
              />
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-lg">Advanced</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Bioinformatics Programming</h3>
              <p className="text-lg text-gray-700 mb-4">
                This course focuses on programming languages like Python and R, specifically for bioinformatics tasks such as sequence alignment and data analysis.
              </p>
              <Link
                href="/bioinformatics-programming"
                passHref
              >
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
