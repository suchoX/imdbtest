import {TrendingPageData} from './ResponseData';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmE2ODYwMWExNWIwNDcwMDFiZDA3NjE2NTIzMDQ5ZiIsIm5iZiI6MTcyNzE1NTg3Ni42NzEzNSwic3ViIjoiNWE3MWEyZGVjM2EzNjg2MDk3MDA1Njk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6BsWd6HaVkSVXUmhWJybvNx5qm9d-sD0l9XthKaxaxI';
const TRENDING_API = 'https://api.themoviedb.org/3/trending/movie/day';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query=';

export const fetchTrendingMovies = async (): Promise<TrendingPageData> => {
  const response = await fetch(TRENDING_API, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      accept: 'application/json',
    },
  });
  return response.json() as unknown as TrendingPageData;
};

export const fetchSearchResults = async (query: string) => {
  const response = await fetch(SEARCH_API + query, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      accept: 'application/json',
    },
  });
  return response.json() as unknown as TrendingPageData;
};
