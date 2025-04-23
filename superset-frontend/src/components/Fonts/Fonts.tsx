import React from 'react';
import { Global, css } from '@emotion/react';

import VTBGroupUIMediumWoff2 from './fonts/VTBGroupUI-Medium.woff2';
import VTBGroupUIMediumWoff from './fonts/VTBGroupUI-Medium.woff';
import VTBGroupUIMediumTtf from './fonts/VTBGroupUI-Medium.ttf';
import VTBGroupUIBoldWoff from './fonts/VTBGroupUI-Bold.woff';
import VTBGroupUIBoldWoff2 from './fonts/VTBGroupUI-Bold.woff2';
import VTBGroupUIBoldTtf from './fonts/VTBGroupUI-Bold.ttf';
import VTBGroupUIDemiBoldWoff2 from './fonts/VTBGroupUI-DemiBold.woff2';
import VTBGroupUIDemiBoldWoff from './fonts/VTBGroupUI-DemiBold.woff';
import VTBGroupUIDemiBoldTtf from './fonts/VTBGroupUI-DemiBold.ttf';
import VTBGroupUISemiBoldWoff2 from './fonts/VTBGroupUI-SemiBold.woff2';
import VTBGroupUISemiBoldWoff from './fonts/VTBGroupUI-SemiBold.woff';
import VTBGroupUISemiBoldTtf from './fonts/VTBGroupUI-SemiBold.ttf';
import VTBGroupUIRegularWoff2 from './fonts/VTBGroupUI-Regular.woff2';
import VTBGroupUIRegularWoff from './fonts/VTBGroupUI-Regular.woff';
import VTBGroupUIRegularTtf from './fonts/VTBGroupUI-Regular.ttf';
import VTBGroupUILightWoff2 from './fonts/VTBGroupUI-Light.woff2';
import VTBGroupUILightWoff from './fonts/VTBGroupUI-Light.woff';
import VTBGroupUILightTtf from './fonts/VTBGroupUI-Light.ttf';

export const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-weight: 700;
        font-family: 'VTBGroupUI';
        font-style: normal;
        font-display: swap;
        src:
          url(${VTBGroupUIBoldWoff2}) format('woff2'),
          url(${VTBGroupUIBoldWoff}) format('woff'),
          url(${VTBGroupUIBoldTtf}) format('truetype');
      }

      @font-face {
        font-weight: 600;
        font-family: 'VTBGroupUI';
        font-style: normal;
        font-display: swap;
        src:
          url(${VTBGroupUIDemiBoldWoff2}) format('woff2'),
          url(${VTBGroupUIDemiBoldWoff}) format('woff'),
          url(${VTBGroupUIDemiBoldTtf}) format('truetype');
      }

      @font-face {
        font-weight: 550;
        font-family: 'VTBGroupUI';
        font-style: normal;
        font-display: swap;
        src:
          url(${VTBGroupUISemiBoldWoff2}) format('woff2'),
          url(${VTBGroupUISemiBoldWoff}) format('woff'),
          url(${VTBGroupUISemiBoldTtf}) format('truetype');
      }

      @font-face {
        font-weight: 500;
        font-family: 'VTBGroupUI';
        font-style: normal;
        font-display: swap;
        src:
          url(${VTBGroupUIMediumWoff2}) format('woff2'),
          url(${VTBGroupUIMediumWoff}) format('woff'),
          url(${VTBGroupUIMediumTtf}) format('truetype');
      }

      @font-face {
        font-weight: 400;
        font-family: 'VTBGroupUI';
        font-style: normal;
        font-display: swap;
        src:
          url(${VTBGroupUIRegularWoff2}) format('woff2'),
          url(${VTBGroupUIRegularWoff}) format('woff'),
          url(${VTBGroupUIRegularTtf}) format('truetype');
      }

      @font-face {
        font-weight: 300;
        font-family: 'VTBGroupUI';
        font-style: normal;
        font-display: swap;
        src:
          url(${VTBGroupUILightWoff2}) format('woff2'),
          url(${VTBGroupUILightWoff}) format('woff'),
          url(${VTBGroupUILightTtf}) format('truetype');
      }

      html,
      body {
        font-family: 'VTBGroupUI', sans-serif;
      }
    `}
  />
);
