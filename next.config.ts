/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.sanity.io',                   // Allow images from Sanity.io
      'via.placeholder.com',             // Allow images from Placeholder.com
      '678fd35e49875e5a1a93828c.mockapi.io', // Allow images from MockAPI
      'img.hisupplier.com',              // Allow images from hisupplier.com
      'images.unsplash.com',            // Allow images from Unsplash
      'agrolife.com.pk',                // Allow images from agrolife.com.pk
      'growtech.pk',                    // Allow images from growtech.pk
      'ecogrowers.com.pk',              // Allow images from ecogrowers.com.pk
      'naturescare.pk',                 // Allow images from naturescare.pk
      'optilab.com.pk',                 // Allow images from optilab.com.pk
      'soilguard.com',                  // Allow images from soilguard.com
      'edgegrow.com',                   // Allow images from edgegrow.com
      'labtools.pk',                    // Allow images from labtools.pk
      'techlab.com',                    // Allow images from techlab.com
      'oceangreen.com.pk',              // Allow images from oceangreen.com.pk
      'agrico.com',                     // Allow images from agrico.com
      'ecoroots.pk',                    // Allow images from ecoroots.pk
      'greenpulse.com',                 // Allow images from greenpulse.com
      'soilrichorganics.com',           // Allow images from soilrichorganics.com
      'oceanrich.com' , 
      'www.bing.com', 
      'th.bing.com',
      'biovante.com',
      "naturesplusonline.com", 
                     // Allow images from oceanrich.com
    ],
  },
};

module.exports = nextConfig;
