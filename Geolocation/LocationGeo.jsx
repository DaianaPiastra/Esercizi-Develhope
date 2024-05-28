import { useCurrentLocation } from "./useCurrentLocation";

export function LocationGeo() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
};