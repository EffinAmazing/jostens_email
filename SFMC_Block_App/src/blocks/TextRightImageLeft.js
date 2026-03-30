export const generateTextRightImageLeft = (data) => {
  const {
    bgColor = '#ffffff',
    imgUrl = 'https://placehold.co/256x256',
    imgAlt = '',
    headline = 'HEADLINE RIGHT',
    headlineColor = '#212121',
    copy = 'This is a description appearing on the right side of the image block, wrapping nicely on mobile.',
    copyColor = '#212121',
    btnText = 'LEARN MORE',
    btnLink = '#',
    btnColor = '#ED8123',
    btnTextColor = '#ffffff',
    direction = 'ltr',
    hideButton = false
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:${bgColor}; width:768px; direction:${direction};" dir="${direction}">
  <tr>
    <!--== Left Half ==-->
    <td class="vw100 ha db" style="width:256px;" valign="middle">
      <table role="presentation" width="100%" dir="ltr" style="direction:ltr;">
        <tr>
          <td align="center">
            <a href="${btnLink}" style="text-decoration:none;">
              <img src="${imgUrl}" class="vw70 ha ac" style="border:none; display:block;" width="256" alt="${imgAlt}">
            </a>
          </td>
        </tr>
      </table>
    </td>

    <!-- Spacer -->
    <td class="db pad0 padb10">
      <table role="presentation" style="width:20px; height:20px;">
        <tr>
          <td style="padding:0 20px 20px 0;"></td>
        </tr>
      </table>
    </td>

    <!--== Right Half ==-->
    <td class="vw100 ha db" style="width:492px;" valign="middle">
      <table role="presentation" class="vw60 ma" width="100%" dir="ltr" style="direction:ltr;font-family:Helvetica, Arial, sans-serif;">
        <!-- Headline -->
        <tr>
          <td class="padlr20 padb10 fs18 lh24" style="padding:0 40px 10px 20px; font-size:18px; line-height:24px; font-weight:bold;text-transform: uppercase;">
            <a href="${btnLink}" style="text-decoration:none;"><span class="c-dark2" style="color:${headlineColor};">${headline}</span></a>
          </td>
        </tr>

        <!-- Subcopy -->
        <tr>
          <td class="padlr20 padb20 fs14 lh22" style="padding:0 40px 20px 20px; font-size:14px; line-height:22px;">
            <span class="c-dark2" style="color:${copyColor};">${copy}</span>
          </td>
        </tr>

        <!-- Button -->
        ${hideButton ? '' : `
        <tr>
          <td class="padb50 button tc" style="padding:0 20px 0;">
            <table role="presentation" class="vw60 ac" style="width:220px;">
              <tr>
                <td align="center">
                  <!--[if !mso]><!--><div style="display:none;"><!--<![endif]-->
                  <a href="${btnLink}" style="text-decoration:none;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                      <tr>
                        <td align="center" style="border-radius:24px; background-color:${btnColor};">
                          <a href="${btnLink}" style="display:inline-block; font-family:Helvetica, Arial, sans-serif, Roboto; font-size:14px; font-weight:bold; color:${btnTextColor}; mso-color-alt:auto; text-decoration:none; padding:12px 24px; letter-spacing: .02em; border-radius:24px; text-transform: uppercase;">
                            <span class="mso-keepwhite fs14 lh18">${btnText}</span>
                          </a>
                        </td>
                      </tr>
                    </table>
                  <!--[if !mso]><!--></a></div><!--<![endif]-->
                  <!--[if mso]>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${btnLink}" style="height:40px;v-text-anchor:middle;width:220px;" arcsize="50%" stroke="f" fillcolor="${btnColor}">
                    <w:anchorlock/>
                    <center style="color:${btnTextColor};font-family:Helvetica, Arial, sans-serif, Roboto;font-size:14px;font-weight:bold;letter-spacing: .02em;text-transform: uppercase;">${btnText}</center>
                  </v:roundrect>
                  <![endif]-->
                </td>
              </tr>
            </table>
          </td>
        </tr>`}
      </table>
    </td>
  </tr>
</table>
`.trim();
};
