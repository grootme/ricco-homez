'use client';

import { AddPropertyForm } from '@/components/dashboard/AddPropertyForm';
import { useRouter } from 'next/navigation';

export default function DashboardAddProperty() {
  const router = useRouter();

  const handleSuccess = () => {
    // Redirect to my properties after successful submission
    router.push('/dashboard-my-properties');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <AddPropertyForm onSuccess={handleSuccess} />
    </div>
  );
}
