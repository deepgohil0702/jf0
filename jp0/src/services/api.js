const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev';

export const submitBill = async (formData) => {
  try {
    const response = await fetch(`₹{API_BASE_URL}/api/submit-bill`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
      headers: {
        // Don't set Content-Type header when sending FormData
        // The browser will set it automatically with the correct boundary
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ₹{response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getBills = async () => {
  try {
    const response = await fetch(`₹{API_BASE_URL}/api/bills`, {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ₹{response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};