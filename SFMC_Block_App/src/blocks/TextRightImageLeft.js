export const generateTextRightImageLeft = (data) => {
  const {
    bgColor = '#ffffff',
    imgUrl = 'https://placehold.co/256x256',
    imgAlt = '',
    headline = 'HEADLINE RIGHT',
    headlineColor = '#212121',
    copy = 'This is a description appearing on the right side of the image block, wrapping nicely on mobile.',
    copyColor = '#212121',
    btnText = 'GET FEB. PLAYBOOK',
    btnLink = '%%=RedirectTo(@href)=%%',
    btnColor = '#ED8123',
    btnTextColor = '#ffffff',
    direction = 'ltr',
    hideButton = false,
    linkAlias = 'Sec2_Row1'
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:#ffffff; background-color:${bgColor}; width:768px; direction:${direction};" dir="${direction}">
  <tr>
    <!--== Left Half ==-->
    <td class="vw100 ha db" style="width:256px;" valign="middle">
      <table role="presentation" width="100%" dir="ltr" style="direction:ltr;">
        <tr>
          <td align="center">
            <a href="${btnLink}" alias="${linkAlias}_Image" style="text-decoration:none;">
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
          <td class="padlr20 padb10 fs18 lh24" style="padding:0 40px 10px 20px; font-size:18px; line-height:24px; font-weight:bold;text-transform: uppercase; letter-spacing: .04em; font-family: Helvetica, Arial, sans-serif, 'Roboto'">
            <a href="${btnLink}" alias="${linkAlias}_Copy" style="text-decoration:none;"><span class="c-dark2" style="color:#212121; color:${headlineColor};">${headline}</span></a>
          </td>
        </tr>

        <!-- Subcopy -->
        <tr>
          <td class="padlr20 padb20 fs14 lh22" style="padding:0 40px 20px 20px; font-size:14px; line-height:22px;">
            <span class="c-dark2" style="color:#212121; color:${copyColor};">${copy}</span>
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
                  <a <a:roundrect href="${btnLink}" alias="${linkAlias}_Button" style="width:220px; height:40px; v-text-anchor:middle;" arcsize="50%" stroke="f" strokecolor="#ffffff" fillcolor="${btnColor}">
                    <w:anchorlock />
                    <center>
                    <!--[if !mso]><!-->
                  </a>
                  </div><!--<![endif]-->
                  <a href="${btnLink}" alias="${linkAlias}_Button" style="text-decoration:none; display:block; background-color:#212121; background-color:${btnColor}; mso-shading:transparent; padding:12px 24px; border:none; letter-spacing: .02em; text-transform: uppercase; border-radius:24px; mso-padding-alt:0;">
                    <span class="mso-keepwhite fs14 lh18" style="font-family:Helvetica, Arial, sans-serif, Roboto; font-size:14px; line-height:18px; font-weight:bold; color:${btnTextColor}; mso-color-alt:auto;">${btnText}</span>
                  </a>
                  <!--[if mso]></center></a:roundrect><![endif]-->
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
