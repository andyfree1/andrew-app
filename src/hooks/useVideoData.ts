import { useState, useEffect, useCallback } from 'react';

interface VideoData {
  thumbnail_large: string;
  [key: string]: any;
}

export function useVideoData(videoId: string) {
  const [data, setData] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Use a proxy or your backend API to avoid CORS issues
      const response = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`,
        {
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to load video data (${response.status})`);
      }

      const videoData = await response.json();
      setData({
        thumbnail_large: videoData.thumbnail_url,
        ...videoData
      });
    } catch (err) {
      console.error('Error fetching video data:', err);
      setError('Unable to load video preview. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [videoId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry };
}