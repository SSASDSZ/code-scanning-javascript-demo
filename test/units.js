import axios from 'axios';

export const getUnits = async ({ page, size, query }) => {
  const { data } = await axios('/units', {
    params: { page, size, query },
  });

  return data;
};
