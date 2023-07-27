import { useGetNewAccessTokenQuery } from "@/redux/services/auth/authApi";
import jwtDecode from "jwt-decode"; // Assuming you have installed and imported the jwt-decode library

const useTokenVerification = (accessToken: any) => {
  // const { data, isLoading } = useGetNewAccessTokenQuery();
  const { exp } = jwtDecode(accessToken);
  const { data: newAccessToken } = useGetNewAccessTokenQuery(accessToken, {
    skip: Date.parse(exp) >= Date.now(), // Skip the API call if exp is greater than or equal to the current time
    refetchOnMountOrArgChange: true, // Enable automatic refetching when the component mounts or when the query argument changes
  });
  let checkAccessToken;
  if (!accessToken) {
    // Access token is missing
    checkAccessToken = false;
  }
  if (newAccessToken) {
    checkAccessToken = true;
  }
  // try {
  //   const { exp } = jwtDecode(accessToken);
  //
  //   if (exp < Date.now() / 1000) {
  //     // Access token has expired
  //     refresh();
  //     // Perform any additional actions after token refresh, e.g., updating user state
  //   }
  // } catch (error) {
  //   console.error("Error decoding token:", error);
  // }

  // You can return any additional data or actions that you need
  return { checkAccessTokenResult: checkAccessToken };
};

export default useTokenVerification;
