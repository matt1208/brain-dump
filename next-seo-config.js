const title =
    'BrainDUMP';
const description = 'A place to quickly store your random thoughts, ideas, and more. Sign in and write down your thoughts so you can remember them later.';

const SEO = {
    title,
    description,
    canonical: 'https://feedback-course.vercel.app/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://feedback-course.vercel.app/',
        title,
        description,
        images: [
            {
                url: 'https://feedback-course.vercel.app/brand.png',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    }
};

export default SEO;