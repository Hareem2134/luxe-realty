export interface PropertyType {
    id: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
    tags: ('Featured' | 'New')[]; // More specific tags
    isNew: boolean;
    isFavorited: boolean;
}

export interface NeighborhoodType {
    id: string;
    name: string;
    city: string;
    image: string;
    rating: number;
    reviews: number;
}

export interface TestimonialType {
    id: string;
    text: string;
    author: string;
    title: string;
    image: string;
    rating: number;
}

export interface LeadershipMemberType {
    id: string;
    name: string;
    title: string;
    description: string;
    image: string;
}

export const featuredProperties: PropertyType[] = [
    {
        id: '1',
        title: 'Hilltop Modern Villa',
        location: 'Beverly Hills, CA',
        price: '$3,200,000',
        beds: 5,
        baths: 4.5,
        sqft: 4200,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tags: ['Featured'],
        isNew: false,
        isFavorited: false,
    },
    {
        id: '2',
        title: 'Oceanfront Penthouse',
        location: 'Miami Beach, FL',
        price: '$4,750,000',
        beds: 4,
        baths: 3,
        sqft: 3800,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tags: ['New'],
        isNew: true,
        isFavorited: false,
    },
    {
        id: '3',
        title: 'Historic Townhouse',
        location: 'Greenwich Village, NY',
        price: '$2,900,000',
        beds: 3,
        baths: 2.5,
        sqft: 3200,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tags: [],
        isNew: false,
        isFavorited: false,
    },
];

export const dummyNeighborhoods: NeighborhoodType[] = [
    {
        id: 'bh',
        name: 'Beverly Hills',
        city: 'Los Angeles, CA',
        image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        rating: 4.7,
        reviews: 128
    },
    {
        id: 'tr',
        name: 'Tribeca',
        city: 'New York, NY',
        image: '/newyork.webp',
        rating: 4.9,
        reviews: 95
    },
    {
        id: 'pb',
        name: 'Palm Beach',
        city: 'Miami, FL',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        rating: 4.2,
        reviews: 67
    },
    {
        id: 'ph',
        name: 'Pacific Heights',
        city: 'San Francisco, CA',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        rating: 4.6,
        reviews: 112
    }
];

export const dummyTestimonials: TestimonialType[] = [
    {
        id: 't1',
        text: "Working with LUXE Realty was an exceptional experience. Their attention to detail and understanding of luxury properties in Beverly Hills was unparalleled. We found our dream home faster than we imagined.",
        author: 'Sarah Johnson',
        title: 'Tech Executive',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 5
    },
    {
        id: 't2',
        text: "The LUXE team's market knowledge and network gave us access to properties we wouldn't have found otherwise. Their technology platform made the entire process seamless, from first search to closing.",
        author: 'Michael Chen',
        title: 'Investment Banker',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5
    },
    {
        id: 't3',
        text: "As international buyers, we needed help navigating the US luxury market. LUXE's agents were knowledgeable, patient, and connected us with exactly what we were looking for in Miami. The map search tool was incredibly useful.",
        author: 'Elena Petrov',
        title: 'International Buyer',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4.5
    }
];

export const dummyLeadership: LeadershipMemberType[] = [
    {
        id: 'l1',
        name: 'Robert Chen',
        title: 'Founder & CEO',
        description: 'Real estate innovator with 25+ years transforming luxury markets',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
        id: 'l2',
        name: 'Sarah Williams',
        title: 'VP of Operations',
        description: 'Oversees our global network of top-tier agents and offices',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
    },
    {
        id: 'l3',
        name: 'Michael Patel',
        title: 'Chief Technology Officer',
        description: 'Leads our digital transformation and platform innovation',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
];