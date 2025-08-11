import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';
import Image from 'next/image';
import { LeadershipMemberType, dummyLeadership } from '../../data/properties';

export const metadata: Metadata = {
  title: 'Our Agents | LUXE Realty',
  description: 'Meet our elite network of luxury real estate agents.',
};

export default function AgentsPage() {
  const agents: LeadershipMemberType[] = dummyLeadership; // Re-using leadership for agents example

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientSectionHeader
          title="Meet Our"
          highlightWord="Agents"
          subtitle="Our dedicated team of luxury real estate professionals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
              <Image
                src={agent.image}
                alt={agent.name}
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
              <p className="text-indigo-600 mb-2">{agent.title}</p>
              <p className="text-gray-600">{agent.description}</p>
              <button className="mt-4 px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}