import { getFonts } from '../../api/fonts';

export const loadFonts = async ({ setGridRequest }) => {
  setGridRequest(prevState => ({
    ...prevState,
    isLoading: true,
  }));
  try {
    const { data } = await getFonts();

    console.log(data.items);
    setGridRequest({
      isLoading: false,
      items: data.items,
    });
  } catch (error) {
    console.log(error);
  }

};
