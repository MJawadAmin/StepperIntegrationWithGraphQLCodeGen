"use client";
import { useState, useEffect } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  useEffect(() => {
    // Update the GraphQL endpoint URL
    const httpLink = new HttpLink({
      uri: "https://dev-server.neers.com.pk/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      // Get token from localStorage
      const token = localStorage.getItem("NECCA_AUTH_TOKEN");

      return {
        headers: {
          ...headers,
          // Properly format the authorization header with Bearer prefix if token exists
          authorization: token ? `${token}` : "",
        },
      };
    });

    const newClient = new ApolloClient({
      link: from([authLink, httpLink]),
      cache: new InMemoryCache(),
    });

    setClient(newClient);
  }, []);

  if (!client) {
    return null; // or a loading spinner
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
