export async function getAddress() {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

export async function getLocation() {
  try {
    const addressData = await getAddress();
    console.log(addressData);
    // Use the addressData to access the latitude, longitude, city, country, etc.
  } catch (error) {
    console.error(error);
  }
}
getLocation();
