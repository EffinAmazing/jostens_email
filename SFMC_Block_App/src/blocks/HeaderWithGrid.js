import { generateIconGridText } from './IconGridText.js';
import { generateCallout } from './Callout.js';

export const generateHeaderWithGrid = (data) => {
  const {
    headerBgColor = '#E7F1F6',
    headerTextColor = '#0079B2',
    headline = 'EXPERTISE FOR ADVISERS',
    subcopy = 'WEEKLY TIPS + INSPIRATION',
    subcopyColor = '#222222',
    hideLogo = false,
    
    gridBgColor = '#ffffff', // This will now be passed to IconGridText as bgColor
    icon1Url = 'https://cdn.jostens.com/apps/shop/images/email/2026/Yearbook/B2B/Aircover/Icon/Book.png',
    copy1 = 'Real‑time visibility into coverage',
    icon2Url = 'https://cdn.jostens.com/apps/shop/images/email/2026/Yearbook/B2B/Aircover/Icon/Clock.png',
    copy2 = 'Flexible, adviser‑friendly deadlines',
    gridTextColor = '#212121'
  } = data || {};

  const calloutObj = {
    bgColor: headerBgColor,
    textColor: headerTextColor,
    headline,
    subcopy,
    subcopyColor,
    hideLogo
  };

  const gridObj = {
    bgColor: gridBgColor,
    icon1Url,
    copy1,
    icon2Url,
    copy2,
    textColor: gridTextColor
  };

  return `
    ${generateCallout(calloutObj)}
    ${generateIconGridText(gridObj)}
  `.trim();
};
