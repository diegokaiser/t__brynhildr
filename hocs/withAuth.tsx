'use client';

import { useAuth } from '@/hooks/useAuth';
import { ComponentType, PropsWithChildren } from 'react';
import { LoadingScreen } from '@/components/atoms';

export function withAuth<P>(
  WrappedComponent: ComponentType<P>,
  options?: {
    redirectAuthenticated?: string;
    redirectUnauthenticated?: string;
    allowUnauthenticatedRoutes?: string[];
  }
) {
  return function WithAuthWrapper(props: PropsWithChildren<P>) {
    const { loading } = useAuth(
      options?.redirectAuthenticated ?? '/dashboard',
      options?.redirectUnauthenticated ?? '/login',
      options?.allowUnauthenticatedRoutes ?? ['/register', '/forgot-password']
    );

    if (loading) {
      return <LoadingScreen />;
    }

    return <WrappedComponent {...props} />;
  };
}
