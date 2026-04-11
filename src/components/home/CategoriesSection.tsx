import Link from 'next/link';
import { cities } from '@/lib/data/cities';
import { 
  Building2, 
  Home, 
  Building, 
  Castle, 
  TreeDeciduous,
  Warehouse,
  ArrowRight 
} from 'lucide-react';

const propertyCategories = [
  {
    name: 'Houses',
    icon: Home,
    count: 2845,
    href: '/grid-default?type=house',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Apartments',
    icon: Building2,
    count: 1567,
    href: '/grid-default?type=apartment',
    color: 'bg-green-50 text-green-600',
  },
  {
    name: 'Condos',
    icon: Building,
    count: 892,
    href: '/grid-default?type=condo',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Villas',
    icon: Castle,
    count: 234,
    href: '/grid-default?type=villa',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Land',
    icon: TreeDeciduous,
    count: 456,
    href: '/grid-default?type=land',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    name: 'Commercial',
    icon: Warehouse,
    count: 378,
    href: '/grid-default?type=commercial',
    color: 'bg-red-50 text-red-600',
  },
];

interface CategoriesSectionProps {
  showCities?: boolean;
  showPropertyTypes?: boolean;
  title?: string;
  subtitle?: string;
}

export default function CategoriesSection({
  showCities = true,
  showPropertyTypes = true,
  title = 'Browse by Category',
  subtitle = 'Explore properties by type or location',
}: CategoriesSectionProps) {
  const featuredCities = cities.filter(c => c.featured).slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-homez">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Property Types Grid */}
        {showPropertyTypes && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {propertyCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group bg-white rounded-xl p-6 text-center shadow-sm border hover:shadow-lg hover:border-homez-primary/20 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count.toLocaleString()} Properties</p>
                </Link>
              );
            })}
          </div>
        )}

        {/* Cities Section */}
        {showCities && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Popular Cities</h3>
              <Link 
                href="/grid-default" 
                className="text-homez-primary hover:underline flex items-center gap-1 text-sm font-medium"
              >
                View All Cities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCities.map((city) => (
                <Link
                  key={city.id}
                  href={`/grid-default?city=${city.slug}`}
                  className="group relative rounded-xl overflow-hidden h-64"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gray-300">
                    <img
                      src={city.image || '/images/cities/placeholder.jpg'}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <h4 className="text-xl font-bold mb-1">{city.name}</h4>
                    <p className="text-sm text-white/80 mb-2">{city.state}</p>
                    <p className="text-sm">
                      <span className="font-semibold">{city.totalProperties}</span> Properties
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
