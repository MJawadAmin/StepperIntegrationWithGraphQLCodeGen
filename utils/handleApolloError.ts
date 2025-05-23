export const handleApolloError = (error: any, router: any) => {
    console.error("Apollo Error:", error);
    if (
      error.networkError?.statusCode === 401 || 
      error.message.includes("Unauthorized") ||
      error.message.includes("Authentication required") ||
      error.message.includes("Not authenticated.")
    ) {
      localStorage.removeItem("NECCA_AUTH_TOKEN");
      router.push("/auth/sign-in");
    }
  };