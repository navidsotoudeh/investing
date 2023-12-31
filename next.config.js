/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		minimumCacheTTL: 0,
		domains: [
			'dgland.com',
			'cms.dg.land',
			'www.digikala.com',
			'learning.emofid.com',
			'www.emofid.com',
			'rahavard365.com',
			'cdn.arzdigital.com',
			'biz-cdn.varzesh3.com',
			'investing-nta8.onrender.com',
		],
	},
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
//
// module.exports = {
//   reactStrictMode: true,
//   output: "standalone",
//   images: {
//     minimumCacheTTL: 0,
//     domains: [
//       "dgland.com",
//       "cms.dg.land",
//       "www.digikala.com",
//       "www.learning.emofid.com",
//       "https://rahavard365.com/",
//     ],
//   },
// };
