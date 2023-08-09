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
import { ReactElement, ReactNode, useEffect } from "react";
import { refresh } from "@store/reducers/auth/auth.action";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    store.dispatch(refresh());
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
