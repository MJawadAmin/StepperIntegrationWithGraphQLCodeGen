// utils/handleApolloError.ts

import { ApolloError } from '@apollo/client';
// This import statement is the one causing the "Cannot find module" error
// because the path is not resolving in your project setup.
import { AppRouterInstance } from '@/types/next-router'; 

// Define a type guard for network errors that have a statusCode property
interface HasStatusCode {
  statusCode?: number;
}

function hasStatusCode(error: unknown): error is HasStatusCode {
  return typeof error === 'object' && error !== null && 'statusCode' in error;
}

export const handleApolloError = (error: unknown, router: AppRouterInstance) => {
  console.error("Apollo Error:", error);

  if (error instanceof ApolloError) {
    // Check for network errors with status 401
    // Use the type guard here
    if (hasStatusCode(error.networkError) && error.networkError.statusCode === 401) {
      localStorage.removeItem("NECCA_AUTH_TOKEN");
      router.push("/auth/sign-in");
      return;
    }

    const graphQLErrors = error.graphQLErrors;
    if (graphQLErrors && graphQLErrors.length > 0) {
      const authError = graphQLErrors.some(gqlError =>
        gqlError.message.includes("Unauthorized") ||
        gqlError.message.includes("Authentication required") ||
        gqlError.message.includes("Not authenticated.") ||
        gqlError.extensions?.code === 'UNAUTHENTICATED'
      );

      if (authError) {
        localStorage.removeItem("NECCA_AUTH_TOKEN");
        router.push("/auth/sign-in");
        return;
      }
    }
  } else if (error instanceof Error) {
      console.error("Standard Error:", error.message);
  }
};