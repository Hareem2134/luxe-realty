import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader'; // Adjust path
import PropertyCard from '../../components/PropertyCard'; // Adjust path
import ListContainerWrapper from '../../components/ListContainerWrapper'; // Adjust path
import { featuredProperties, PropertyType } from '../../data/properties'; // Adjust path

export const metadata: Metadata = {
  title: 'Buy Property | LUXE Realty',
  description: 'Explore premium properties for sale.',
};

export default async function BuyPage() {
  // In a real application, you would fetch properties based on search parameters
  // passed via URL (searchParams prop available to Server Components) or from a database.
  // Example: const properties = await fetchPropertiesFromIDXApi(searchParams);
  const properties: PropertyType[] = featuredProperties; // Using dummy data for now

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientSectionHeader
          title="Properties"
          highlightWord="For Sale"
          subtitle="Browse our exclusive listings for sale."
        />

        {/* Search/Filter form would go here, possibly a client component */}
        {/* <PropertySearchFilterForm /> */}

        {properties.length > 0 ? (
          <ListContainerWrapper>
            {properties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </ListContainerWrapper>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-8">No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}