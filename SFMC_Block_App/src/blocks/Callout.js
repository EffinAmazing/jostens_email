export const generateCallout = (data) => {
  const {
    bgColor = '#E7F1F6',
    textColor = '#0079B2',
    headline = 'EXPERTISE FOR ADVISERS',
    subcopy = 'WEEKLY TIPS + INSPIRATION',
    subcopyColor = '#222222',
    logoUrlDark = 'https://cdn.jostens.com/apps/shop/images/email/2024/Common/Logo/jostenslogo_black_outlined.png',
    logoUrlLight = 'https://cdn.jostens.com/apps/shop/images/email/2024/Common/Logo/jostenslogo_white.png',
    hideLogo = false
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark3 header" style="background-color:#ffffff; background-color:${bgColor}; width:768px; color:${textColor};" align="center">
  <tr>
    <td valign="middle" align="center" class="padt20 padb20 padlr20" style="padding:20px 25px 20px 30px;">
      <table role="presentation" style="width:100%;direction: rtl" dir="rtl">
        <tr>
          ${hideLogo ? '' : `
          <td class="db w100 tc" style="width:76px;direction:ltr">
            <a href="https://www.jostens.com" alias="Sec0_Header_JostensLogo" title="Go to Jostens home page" style="text-decoration:none;">
              <img src="${logoUrlDark}" class="logo dn-dark" alt="Jostens" width="76" style="border:none;" />
              <!--[if !mso]><!--><img src="${logoUrlLight}" class="logo di-dark" style="display:none;" alt="Jostens" width="76" /><!--<![endif]-->
            </a>
          </td>`}
          <td class="db w100 tc" style="${hideLogo ? 'width:718px;' : 'width:637px;'} direction:ltr">
            <table align="left" role="presentation" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;text-transform: uppercase;direction:ltr;text-align:left;" dir="ltr">
              <tr>
                <td class="fs28 lh32 tc padt5" style="font-size:32px; line-height:34px; font-weight:700; mso-color-alt: ${textColor};">
                  ${headline}
                </td>
              </tr>
              ${subcopy ? `
              <tr>
                <td class="fs18 lh32 tc padt5" style="font-size:20px; line-height:24px; font-weight:300; letter-spacing: .05em; color:${subcopyColor}; padding-top:5px">
                  ${subcopy}
                </td>
              </tr>` : ''}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`.trim();
};
