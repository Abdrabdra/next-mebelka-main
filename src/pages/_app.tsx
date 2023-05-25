import { persistor, store } from "@store/index";
import ThemeProvider from "@utils/theme";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@assets/fonts/stylesheet.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@components/screens/Home/Banner/BannerSlider/BannerSlider.style.scss";
import "@components/screens/Announcements/OneAnnounce/AnnounceImage/ImageSlider/ImageSlider.style.scss";
import { useEffect } from "react";
import { refresh } from "@store/reducers/auth/auth.action";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    store.dispatch(refresh());
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
