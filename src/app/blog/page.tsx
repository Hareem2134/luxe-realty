import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Blog | LUXE Realty',
  description: 'Insights, market trends, and luxury lifestyle articles from LUXE Realty.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of Smart Home Technology in Luxury Properties',
      date: 'October 26, 2023',
      excerpt: 'Explore how smart home features are transforming high-end residences.',
      image: 'https://images.unsplash.com/photo-1558000780-e3498b8c2538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 2,
      title: 'Top 5 Emerging Luxury Neighborhoods for 2024',
      date: 'October 15, 2023',
      excerpt: 'Our experts forecast the next hot spots for luxury real estate investment.',
      image: 'https://images.unsplash.com/photo-1549514782-b7d4135d5622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 3,
      title: 'Sustainable Luxury: Eco-Friendly Homes on the Rise',
      date: 'September 28, 2023',
      excerpt: 'Discover the growing trend of environmentally conscious luxury properties.',
      image: 'https://images.unsplash.com/photo-1627915598858-a53b7c8f74e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientSectionHeader
          title="Our Latest"
          highlightWord="Insights"
          subtitle="Stay informed with our expert articles on luxury real estate and lifestyle."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                width={600}
                height={350}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                  Read More <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}