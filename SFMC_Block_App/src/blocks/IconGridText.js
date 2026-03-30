export const generateIconGridText = (data) => {
  const {
    bgColor = '#ffffff',
    gridBgColor = '#ffffff',
    icon1Url = 'https://placehold.co/100x100',
    title1 = 'FEATURE ONE',
    copy1 = 'Description for feature one goes here...',
    icon2Url = 'https://placehold.co/100x100',
    title2 = 'FEATURE TWO',
    copy2 = 'Description for feature two goes here...',
    textColor = '#212121',
    titleColor = '#212121'
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:${bgColor}; width:768px; font-family:Helvetica, Arial, sans-serif;" align="center">
  <tr>
    <td align="center" style="padding: 20px 40px;">
      <table role="presentation" style="width:100%;">
        <tr>
          <!-- Column 1 -->
          <td class="vw100 db ha" style="width:50%; vertical-align:top; background-color:${gridBgColor}; padding:20px;">
            <table role="presentation" style="width:100%;">
              <tr>
                <td align="center" style="padding-bottom:15px;">
                  <img src="${icon1Url}" alt="" width="80" style="display:block; border:none; max-width:100%;">
                </td>
              </tr>
              <tr>
                <td align="center" class="fs18 lh24" style="font-size:18px; line-height:24px; font-weight:bold; color:${titleColor}; padding-bottom:10px;">
                  ${title1}
                </td>
              </tr>
              <tr>
                <td align="center" class="fs14 lh22" style="font-size:14px; line-height:22px; color:${textColor};">
                  ${copy1}
                </td>
              </tr>
            </table>
          </td>

          <!-- Spacer on Desktop, Hidden on Mobile -->
          <td class="dn" style="width:4%; padding:0;"></td>

          <!-- Column 2 -->
          <td class="vw100 db ha" style="width:50%; vertical-align:top; background-color:${gridBgColor}; padding:20px;">
            <table role="presentation" style="width:100%;">
              <tr>
                <td align="center" style="padding-bottom:15px;">
                  <img src="${icon2Url}" alt="" width="80" style="display:block; border:none; max-width:100%;">
                </td>
              </tr>
              <tr>
                <td align="center" class="fs18 lh24" style="font-size:18px; line-height:24px; font-weight:bold; color:${titleColor}; padding-bottom:10px;">
                  ${title2}
                </td>
              </tr>
              <tr>
                <td align="center" class="fs14 lh22" style="font-size:14px; line-height:22px; color:${textColor};">
                  ${copy2}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`.trim();
};
