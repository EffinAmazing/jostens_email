export const generateTextAndCta = (data) => {
  const {
    bgColor = '#ffffff',
    headline = 'YOUR HEADLINE HERE',
    headlineColor = '#222222',
    copy = 'Add your paragraph text here.',
    copyColor = '#212121',
    btnText = 'CLICK HERE',
    btnLink = '#',
    btnColor = '#ED8123',
    btnTextColor = '#ffffff',
    linkAlias = 'Hero_Button'
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:${bgColor}; width:768px;font-family:Helvetica, Arial, sans-serif;">
  <!-- Headline -->
  <tr>
    <td class="padlr20 padt30 padb20 fs32 lh38" style="padding:30px 20px 20px; font-size:40px; line-height:56px; font-weight:500;text-transform:uppercase;" align="center">
      <div style="text-decoration:none;">
        <span class="c-dark2" style="color:${headlineColor};">${headline}</span>
      </div>
    </td>
  </tr>
  <!-- Copy -->
  <tr>
    <td class="padlr30 padb20 fs14 lh22" style="padding:0 40px 20px; font-size:16px; line-height:24px; font-weight:400;" align="center">
      <span class="c-dark2" style="color:${copyColor};">${copy}</span>
    </td>
  </tr>
  <!-- Button CTA -->
  <tr>
    <td class="pad0 padb30 button" style="padding:0 20px 20px;" align="center">
      <table role="presentation" class="vw80" style="width:270px;">
        <tr>
          <td align="center">
            <!--[if !mso]><!--><div style="display:none;"><!--<![endif]-->
            <a href="${btnLink}" alias="${linkAlias}" style="text-decoration:none;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td align="center" style="border-radius:24px; background-color:${btnColor};">
                    <a href="${btnLink}" alias="${linkAlias}" style="display:inline-block; font-family:Helvetica, Arial, sans-serif, Roboto; font-size:14px; font-weight:bold; color:${btnTextColor}; mso-color-alt:auto; text-decoration:none; padding:12px 24px; letter-spacing: .03em; border-radius:24px;">
                      <span class="mso-keepwhite fs14 lh18">${btnText}</span>
                    </a>
                  </td>
                </tr>
              </table>
            <!--[if !mso]><!--></a></div><!--<![endif]-->
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${btnLink}" style="height:40px;v-text-anchor:middle;width:270px;" arcsize="50%" stroke="f" fillcolor="${btnColor}">
              <w:anchorlock/>
              <center style="color:${btnTextColor};font-family:Helvetica, Arial, sans-serif, Roboto;font-size:14px;font-weight:bold;">${btnText}</center>
            </v:roundrect>
            <![endif]-->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`.trim();
};
