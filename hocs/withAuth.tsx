'use client';

import { useAuth } from '@/hooks/useAuth';
import { ComponentType, PropsWithChildren } from 'react';

export function withAuth<P>(
  WrappedComponent: ComponentType<P>,
  options?: {
    redirectAuthenticated?: string;
    redirectUnauthenticated?: string;
    allowUnauthenticatedRoutes?: string[];
  }
) {
  return function WithAuthWrapper(props: PropsWithChildren<P>) {
    useAuth(
      options?.redirectAuthenticated ?? '/dashboard',
      options?.redirectUnauthenticated ?? '/login',
      options?.allowUnauthenticatedRoutes ?? ['/register', '/forgot-password']
    );

    return <WrappedComponent {...props} />;
  };
}
