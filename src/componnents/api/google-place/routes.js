import { json } from 'next';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const GOOGLE_MAP_API_KEY = 'AIzaSyA3upiukUN6BVejRSvw0ULJUTBtNMD5Wbk';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const radius = searchParams.get('radius');
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const res = await fetch(
    `${BASE_URL}/textsearch/json?query=${category}&location=${lat},${lng}&radius=${radius}&key=${GOOGLE_MAP_API_KEY}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const product = await res.json();

  return json({ product });
}
