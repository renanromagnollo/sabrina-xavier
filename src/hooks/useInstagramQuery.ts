import { Env } from '@/config/environments';
import { getFakeData } from '@/utils/fakeServer';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = Env.INSTAGRAM_API_MEDIA_URL;
const TESTER_TOKEN = Env.INSTAGRAM_TESTER_TOKEN;

async function fetchInstagramMediaData() {
  const fields = 'timestamp, caption, media_url,thumbnail_url, media_type,permalink, id';
  const url = `${BASE_URL}/me/media?access_token=${TESTER_TOKEN}&fields=${fields}`;

  const response = await axios.get(url);

  return response?.data.data;
}

export function useInstagramQuery() {
  const query = useQuery({
    queryKey: ['query-instagram'],
    queryFn: () => getFakeData('instagramPosts'),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  return query;
}
