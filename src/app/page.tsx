import React from 'react';
// Data types and dummy data
import {
  PropertyType,
  NeighborhoodType,
  TestimonialType,
  featuredProperties,
  dummyNeighborhoods,
  dummyTestimonials,
  dummyLeadership
} from '@/data/properties';
import HeroSection from '@/components/HeroSection';
import SearchForm from '@/components/SearchForm';
import SectionHeader from '@/components/SectionHeader';
import ListContainerWrapper from '@/components/ListContainerWrapper';
import PropertyCard from '@/components/PropertyCard';
import ViewAllButton from '@/components/ViewAllButton';
import LeadershipSection from '@/components/LeadershipSection';
import JoinTeamCTA from '@/components/JoinTeamCTA';
import MapSection from '@/components/MapSection';
import FinalCTA from '@/components/FinalCTA';
import NeighborhoodsSection from '@/components/NeighborhoodsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

// Re-export SectionHeader as ClientSectionHeader for consistent naming in JSX
const ClientSectionHeader = SectionHeader;

export default async function Home() {
  // Data fetching in App Router Server Components
  const properties: PropertyType[] = featuredProperties;
  const neighborhoods: NeighborhoodType[] = dummyNeighborhoods;
  const testimonials: TestimonialType[] = dummyTestimonials;
  const leadership = dummyLeadership; // Directly use dummyLeadership here, already typed

  return (
    <>
      {/* Client Components for Hero Section and Search Form */}
      <HeroSection />
      <SearchForm />

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientSectionHeader
            title="Featured"
            highlightWord="Properties"
            subtitle="Handpicked selection of premium homes in exclusive neighborhoods"
          />

          <ListContainerWrapper>
            {properties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </ListContainerWrapper>

          <ViewAllButton text="View All Properties" link="/buy" delay={0.4} />
        </div>
      </section>

      {/* Join Our Team CTA (Client Component) */}
      <JoinTeamCTA />

      {/* Leadership Team (Client Component) */}
      <LeadershipSection leadership={leadership} />

      {/* Map Section (Client Component) */}
      <MapSection />

      {/* Luxury Neighborhoods (Client Component) */}
      <NeighborhoodsSection neighborhoods={neighborhoods} />

      {/* Testimonials (Client Component) */}
      <TestimonialsSection testimonials={testimonials} />

      <FinalCTA /> {/* Client Component */}
    </>
  );
}