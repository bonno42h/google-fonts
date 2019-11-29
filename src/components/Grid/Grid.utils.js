import { getFonts } from '../../api/fonts';

export const loadFonts = async ({ setGridRequest }) => {
  setGridRequest(prevState => ({
    ...prevState,
    isLoading: true,
  }));
  try {
    const { data } = await getFonts();

    setGridRequest({
      isLoading: false,
      items: data.items,
    });
  } catch (error) {
    throw error;
  }

};
