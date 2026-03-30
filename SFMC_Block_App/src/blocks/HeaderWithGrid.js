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
    
    gridContainerBgColor = '#ffffff',
    gridBgColor = '#ffffff',
    icon1Url = 'https://placehold.co/100x100',
    title1 = 'FEATURE ONE',
    copy1 = 'Description for feature one goes here...',
    icon2Url = 'https://placehold.co/100x100',
    title2 = 'FEATURE TWO',
    copy2 = 'Description for feature two goes here...',
    gridTextColor = '#212121',
    gridTitleColor = '#212121'
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
    bgColor: gridContainerBgColor,
    gridBgColor,
    icon1Url,
    title1,
    copy1,
    icon2Url,
    title2,
    copy2,
    textColor: gridTextColor,
    titleColor: gridTitleColor
  };

  return `
    ${generateCallout(calloutObj)}
    ${generateIconGridText(gridObj)}
  `.trim();
};
