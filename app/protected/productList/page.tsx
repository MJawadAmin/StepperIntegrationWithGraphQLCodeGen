"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import { gql, useQuery, useApolloClient, ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { checkProductStatus } from "@/services/stepperService";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface UserProfile {
  clientGetProfile: {
    user: {
      id: string;
      name: string;
      phone: string;
      email: string;
      status: string;
    };
  };
}

const GET_USER_PROFILE = gql`
  query User {
    clientGetProfile {
      user {
        id
        name
        phone
        email
      }
    }
  }
`;

const GET_PRODUCTS_QUERY = gql`
  query ClientGetProducts {
    clientGetProducts {
      id
      name
      description
      image
    }
  }
`;

const ProductsDashboard = () => {
  const router = useRouter();
  const { user_name, jwt, setJwt, setUserName, setUserEmail, setUserPhone } = useUserStore();
  const client = useApolloClient() as ApolloClient<NormalizedCacheObject>;

  // Authentication handling
  useEffect(() => {
    const verifyAuth = () => {
      const storedToken = localStorage.getItem("NECCA_AUTH_TOKEN");
      if (!storedToken) {
        router.push("/auth/sign-in");
        return;
      }
      if (!jwt) setJwt(storedToken);
    };
    verifyAuth();
  }, [jwt, setJwt, router]);

  // User profile query
  const { loading: userLoading, error: userError, data: userData } = useQuery<UserProfile>(GET_USER_PROFILE, {
    context: {
      headers: {
        Authorization: jwt,
      },
    },
    skip: !jwt,
    onError: (error) => {
      console.error('Profile Error:', error);
      if (error.message.includes("Unauthorized")) {
        localStorage.removeItem("NECCA_AUTH_TOKEN");
        router.push("/auth/sign-in");
      }
    }
  });

  // Products query
  const { loading: productsLoading, error: productsError, data: productsData } = useQuery<{ clientGetProducts: Product[] }>(GET_PRODUCTS_QUERY, {
    context: {
      headers: {
        Authorization: jwt,
      },
    },
    skip: !jwt
  });

  // Set user data
  useEffect(() => {
    if (userData?.clientGetProfile?.user) {
      const { name, email, phone } = userData.clientGetProfile.user;
      setUserName(name);
      setUserEmail(email);
      setUserPhone(phone);
    }
  }, [userData, setUserName, setUserEmail, setUserPhone]);

  const handleLogout = () => {
    localStorage.removeItem("NECCA_AUTH_TOKEN");
    setJwt("");
    router.push("/auth/sign-in");
  };
const handleOnClick = async (productId: string) => {
  try {
    await checkProductStatus(
      client,       // This should now be ApolloClient<NormalizedCacheObject>
      productId,
      router        // <--- Pass the router object directly, not a partial object
    );
  } catch (error) {
    console.error("Error checking product status:", error);
  } finally {
    router.push(`/protected/${productId}/stepper?step=1`);
  }
};

  if (!jwt) return <div className="w-full text-center p-8">Redirecting to login...</div>;
  if (userLoading || productsLoading) return <div className="w-full text-center mt-8">Loading...</div>;
  if (userError) return <div className="w-full text-center mt-8 text-red-500">Error: {userError.message}</div>;
  if (productsError) return <div className="w-full text-center mt-8 text-red-500">Error: {productsError.message}</div>;

  return (
    <div className="w-full flex justify-center bg-white h-full relative">
      <div className="w-full bg-white min-h-screen max-w-[1362px] py-2">
        {/* Header */}
        <div className="w-full sticky top-0 z-10 flex justify-between px-4 md:px-16 bg-white py-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10">
              <Image
                src="/defaultProfile.webp"
                alt="User profile"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-black">Hello {user_name}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-[#F76300] text-[12px] w-[80px] h-[29px] rounded-[3px] text-white hover:bg-[#e55b00] transition-colors"
          >
            Log Out
          </button>
        </div>

        {/* Products Container */}
        <div className="w-11/12 mx-auto px-4 sm:px-8 md:px-6 lg:px-8 xl:px-10 mt-4 bg-white rounded-[10px] py-7 shadow-2xl">
          <div className="h-[500px] overflow-auto pb-5 rounded-md scrollbar-hide">
            {productsData?.clientGetProducts?.map((product, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-300 rounded-md my-4 group"
                onClick={() => handleOnClick(product.id)}
              >
                <div className="bg-white rounded-md relative flex w-full">
                  {/* Product Image */}
                  <div className="lg:w-[635.46px] xl:w-[720px] h-[149px] rounded-[11px] md:w-[500px] sm:w-[360px] w-full pl-8">
                    <Image
                      src="/fan.webp"
                      alt="Product Image"
                      width={720}
                      height={149}
                      className="object-cover w-full h-full rounded-[11px]"
                      priority
                    />
                  </div>

                  {/* Description Panel */}
                  <div
                    className="absolute shadow-md cursor-pointer lg:w-[445px] h-[151px] bg-[#e8e6e6] right-0 md:right-[35px] rounded-bl-[16px] rounded-r-[11px]"
                    style={{ clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0 99%)" }}
                  >
                    <div className="w-full flex flex-col items-center p-4">
                      <h1 className="font-poppins font-semibold mt-4 text-[#F76300] text-sm md:text-xl">
                        {product.name}
                      </h1>
                      <p className="text-center text-xs md:text-sm mt-2 w-full max-w-[362px] leading-5 font-poppins font-normal">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;