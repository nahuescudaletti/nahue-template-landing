/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'; // Aquí debes usar === en lugar de =
const nextConfig = {
    basePath: isProd ? '/nahue-template-landing' : '',
    output: 'export',
    distDir:'dist',
    images:{
        unoptimized: true,
    }
}
module.exports = nextConfig
