export function useGithubUser(username) {
   const { data, error, mutate } = useSWR(
     username ? `https://api.github.com/users/${username}` : null,
     fetcher
   );
 
   const refetch = () => {
     mutate();
   };
 
   return {
     user: data,
     error,
     loading: !data && !error,
     refetch,
   };
 }