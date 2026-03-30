import { useState, useEffect, useCallback } from 'react';
import SDK from 'blocksdk';
import * as blocks from './blocks';
import './App.css';

const sdk = new SDK();

const ALL_BLOCKS = [
  { id: 'PlainText', label: 'Plain Text' },
  { id: 'Callout', label: 'Callout (Title Bar)' },
  { id: 'HeaderBannerImage', label: 'Hero/Banner Image' },
  { id: 'TextAndCta', label: 'Text and CTA Button' },
  { id: 'TextRightImageLeft', label: 'Text Right / Image Left (Halves)' },
  { id: 'ThreeUpIconText', label: 'Three-Up Icon Gallery' },
  { id: 'IconGridText', label: 'Icon Grid with Text' },
  { id: 'HeaderWithGrid', label: 'Header with Icon Grid' }
];

function App() {
  const [data, setData] = useState({
    blockType: 'TextAndCta',
    bgColor: '#ffffff',
    textColor: '#212121',
    headline: 'YOUR HEADLINE HERE',
    headlineColor: '#222222',
    copy: 'Add your paragraph text here.',
    copyColor: '#212121',
    subcopy: '',
    subcopyColor: '#222222',
    btnText: 'CLICK HERE',
    btnLink: '#',
    btnColor: '#ED8123',
    btnTextColor: '#ffffff',
    imgUrl: 'https://placehold.co/768x400',
    imgAlt: '',
    linkAlias: '',
    headerBgColor: '#E7F1F6',
    headerTextColor: '#0079B2',
    gridBgColor: '#ffffff',
    gridContainerBgColor: '#ffffff',
    icon1Url: 'https://placehold.co/100x100',
    title1: 'FEATURE ONE',
    copy1: 'Description for feature one',
    icon2Url: 'https://placehold.co/100x100',
    title2: 'FEATURE TWO',
    copy2: 'Description for feature two',
    img1Url: 'https://placehold.co/240x240',
    img2Url: 'https://placehold.co/240x240',
    img3Url: 'https://placehold.co/240x240',
    hideLogo: false,
    hideButton: false,
    direction: 'ltr'
  });

  const [initialized, setInitialized] = useState(false);

  // Initialize SDK data
  useEffect(() => {
    sdk.getData((sdkData) => {
      if (sdkData && Object.keys(sdkData).length > 0) {
        setData((prev) => ({ ...prev, ...sdkData }));
      }
      setInitialized(true);
    });
  }, []);

  // Sync with SFMC when data changes
  const updateBlock = useCallback(() => {
    if (!initialized) return;

    let html = '';
    switch (data.blockType) {
      case 'PlainText':
        html = blocks.generatePlainText(data);
        break;
      case 'Callout':
        html = blocks.generateCallout(data);
        break;
      case 'HeaderBannerImage':
        html = blocks.generateHeaderBannerImage(data);
        break;
      case 'TextAndCta':
        html = blocks.generateTextAndCta(data);
        break;
      case 'TextRightImageLeft':
        html = blocks.generateTextRightImageLeft(data);
        break;
      case 'ThreeUpIconText':
        html = blocks.generateThreeUpIconText(data);
        break;
      case 'IconGridText':
        html = blocks.generateIconGridText(data);
        break;
      case 'HeaderWithGrid':
        html = blocks.generateHeaderWithGrid(data);
        break;
      default:
        html = blocks.generateTextAndCta(data);
    }

    sdk.setData(data);
    sdk.setContent(html);
  }, [data, initialized]);

  useEffect(() => {
    updateBlock();
  }, [data, updateBlock]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const renderField = (name, label, type = 'text', hidden = false) => {
    if (hidden) return null;
    return (
      <div className="form-group">
        <label>{label}</label>
        {type === 'checkbox' ? (
          <input type="checkbox" name={name} checked={data[name]} onChange={handleChange} />
        ) : (
          <input type={type} name={name} value={data[name] || ''} onChange={handleChange} />
        )}
      </div>
    );
  };

  if (!initialized) return <div>Loading...</div>;

  const currentType = data.blockType;

  return (
    <div className="app-container">
      <h2>Jostens Email Block Configuration</h2>
      
      <div className="form-group main-select">
        <label>Block Type</label>
        <select name="blockType" value={data.blockType} onChange={handleChange}>
          {ALL_BLOCKS.map(block => (
            <option key={block.id} value={block.id}>{block.label}</option>
          ))}
        </select>
      </div>

      <div className="fields-container">
        
        {/* COMMON BACKGROUNDS */}
        {renderField('bgColor', 'Background Color', 'color', !['PlainText', 'Callout', 'HeaderBannerImage', 'TextAndCta', 'TextRightImageLeft', 'IconGridText'].includes(currentType))}
        
        {/* TEXT BLOCKS */}
        {renderField('headline', 'Headline Text', 'text', !['TextAndCta', 'Callout', 'TextRightImageLeft', 'ThreeUpIconText', 'HeaderWithGrid'].includes(currentType))}
        {renderField('headlineColor', 'Headline Color', 'color', !['TextAndCta', 'Callout', 'TextRightImageLeft'].includes(currentType))}
        
        {renderField('copy', 'Body Copy', 'text', !['PlainText', 'TextAndCta', 'TextRightImageLeft', 'ThreeUpIconText'].includes(currentType))}
        {renderField('copyColor', 'Body Color', 'color', !['PlainText', 'TextAndCta', 'TextRightImageLeft', 'ThreeUpIconText'].includes(currentType))}
        
        {/* CALLOUT SPECIFIC */}
        {renderField('subcopy', 'Sub Copy', 'text', !['Callout', 'HeaderWithGrid'].includes(currentType))}
        {renderField('subcopyColor', 'Sub Copy Color', 'color', !['Callout', 'HeaderWithGrid'].includes(currentType))}
        {renderField('headerBgColor', 'Header Bg Color', 'color', !['Callout', 'HeaderWithGrid', 'ThreeUpIconText'].includes(currentType))}
        {renderField('headerTextColor', 'Header Text Color', 'color', !['Callout', 'HeaderWithGrid', 'ThreeUpIconText'].includes(currentType))}
        {renderField('hideLogo', 'Hide Jostens Logo', 'checkbox', !['Callout', 'HeaderWithGrid'].includes(currentType))}

        {/* BUTTON PARAMETERS */}
        {renderField('hideButton', 'Hide Button', 'checkbox', !['TextRightImageLeft', 'ThreeUpIconText'].includes(currentType))}
        {renderField('btnText', 'Button Text', 'text', (!['TextAndCta', 'TextRightImageLeft', 'ThreeUpIconText'].includes(currentType)) || data.hideButton)}
        {renderField('btnLink', 'Button / Image Link URL', 'text', !['TextAndCta', 'TextRightImageLeft', 'ThreeUpIconText', 'HeaderBannerImage'].includes(currentType))}
        {renderField('btnColor', 'Button Background Color', 'color', (!['TextAndCta', 'TextRightImageLeft', 'ThreeUpIconText'].includes(currentType)) || data.hideButton)}
        {renderField('btnTextColor', 'Button Text Color', 'color', (!['TextAndCta', 'TextRightImageLeft', 'ThreeUpIconText'].includes(currentType)) || data.hideButton)}

        {/* SINGLE IMAGE / BANNER PARAMETERS */}
        {renderField('imgUrl', 'Image URL', 'text', !['HeaderBannerImage', 'TextRightImageLeft'].includes(currentType))}
        {renderField('imgAlt', 'Image Alt Text', 'text', !['HeaderBannerImage', 'TextRightImageLeft'].includes(currentType))}
        
        {/* HALVES SPECIFICS */}
        {renderField('direction', 'Image Alignment', 'text', !['TextRightImageLeft'].includes(currentType))} {/* ltr or rtl */}

        {/* THREE UP CONSTANTS */}
        {renderField('img1Url', 'Image 1 URL', 'text', !['ThreeUpIconText'].includes(currentType))}
        {renderField('img2Url', 'Image 2 URL', 'text', !['ThreeUpIconText'].includes(currentType))}
        {renderField('img3Url', 'Image 3 URL', 'text', !['ThreeUpIconText'].includes(currentType))}

        {/* ICON GRID PARAMETERS */}
        {renderField('gridBgColor', 'Grid Tile Background', 'color', !['IconGridText', 'HeaderWithGrid', 'ThreeUpIconText'].includes(currentType))}
        {renderField('gridContainerBgColor', 'Grid Wrapper Background', 'color', !['HeaderWithGrid'].includes(currentType))}
        
        {renderField('icon1Url', 'Feature 1 Icon URL', 'text', !['IconGridText', 'HeaderWithGrid'].includes(currentType))}
        {renderField('title1', 'Feature 1 Title', 'text', !['IconGridText', 'HeaderWithGrid'].includes(currentType))}
        {renderField('copy1', 'Feature 1 Copy', 'text', !['IconGridText', 'HeaderWithGrid'].includes(currentType))}
        
        {renderField('icon2Url', 'Feature 2 Icon URL', 'text', !['IconGridText', 'HeaderWithGrid'].includes(currentType))}
        {renderField('title2', 'Feature 2 Title', 'text', !['IconGridText', 'HeaderWithGrid'].includes(currentType))}
        {renderField('copy2', 'Feature 2 Copy', 'text', !['IconGridText', 'HeaderWithGrid'].includes(currentType))}
        
      </div>
    </div>
  );
}

export default App;
