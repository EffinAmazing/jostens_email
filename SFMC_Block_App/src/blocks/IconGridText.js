export const generateIconGridText = (data) => {
  const {
    bgColor = '#00acd8',
    icon1Url = 'https://cdn.jostens.com/apps/shop/images/email/2026/Yearbook/B2B/Aircover/Icon/Book.png',
    copy1 = 'Real‑time visibility into coverage',
    icon2Url = 'https://cdn.jostens.com/apps/shop/images/email/2026/Yearbook/B2B/Aircover/Icon/Clock.png',
    copy2 = 'Flexible, adviser‑friendly deadlines',
    textColor = '#212121',
    linkAlias = 'Sec4_Grid'
  } = data || {};

  return `
<table role="presentation" class="vw100" style="background-color:${bgColor}; width:96%; direction:ltr;margin: 0 auto" dir="ltr">
  <tr>
    <!--== Left Half ==-->
    <td class="vw100 ha db" style="background-color:${bgColor}; width:50%;" valign="middle">
      <table role="presentation" width="100%" dir="ltr" style="direction:ltr;">
        <tr>
          <td align="center">
            <table role="presentation" class="vw100" style="width:100%;">
              <tr>
                <td align="center" valign="top" class="pad0 padl50" style="padding:10px;">
                  <table role="presentation" class="vw30" style="width:164px;">
                    <tr>
                      <td class="padb10" style="padding:0 0 10px;" align="center">
                        <img src="${icon1Url}" alt="" width="40" class="vw10 ha" style="border:none; display:block;margin: 0 auto;" />
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="top" class="ha">
                        <table role="presentation" class="ha" style="width:100%;">
                          <tr>
                            <td class="pad0 padb20 fs12 lh16" style="padding:0; font-family:Helvetica, Arial, sans-serif; font-size:16px; line-height:20px;" align="center" valign="top">
                              <span style="color:${textColor};">${copy1}</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>

    <!--== Right Half ==-->
    <td class="vw100 ha db" style="background-color:${bgColor}; width:50%;" valign="middle">
      <table role="presentation" width="100%" dir="ltr" style="direction:ltr;">
        <tr>
          <td align="center">
            <table role="presentation" class="vw100" style="width:100%;">
              <tr>
                <td align="center" valign="top" class="pad0 padr50" style="padding:10px;">
                  <table role="presentation" class="vw30" style="width:164px;">
                    <tr>
                      <td class="padb10" style="padding:0 0 10px;" align="center">
                        <img src="${icon2Url}" alt="" width="40" class="vw10 ha" style="border:none; display:block;margin: 0 auto;" />
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="top" class="ha">
                        <table role="presentation" class="ha" style="width:100%;">
                          <tr>
                            <td class="pad0 padb20 fs12 lh16" style="padding:0; font-family:Helvetica, Arial, sans-serif; font-size:16px; line-height:20px;" align="center" valign="top">
                              <span style="color:${textColor};">${copy2}</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
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
