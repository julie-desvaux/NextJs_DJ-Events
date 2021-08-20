module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "https://jd-dj-events-frontend.vercel.app/api/:path*",
			},
		];
	},
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};
