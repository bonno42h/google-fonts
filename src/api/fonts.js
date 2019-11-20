import axios from 'axios';

const FONTS_URL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAdu7jxwz79Tss9swUI1CvlP7m-oGvW9Uo';

export function getFonts() {
  return axios.get(`${FONTS_URL}`);
}
