import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { Fonts } from "@/styles/Fonts";
import { AuthProvider } from '../lib/auth';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo-config';



const theme = extendTheme({
  fonts: {
    heading: "Patua One",
    body: "Roboto"
  }
});

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Fonts />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp;
