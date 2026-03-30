export const generateTextAndCta = (data) => {
  const {
    bgColor = '#ffffff',
    headline = 'YOUR HEADLINE HERE',
    headlineColor = '#222222',
    copy = 'Add your paragraph text here.',
    copyColor = '#212121',
    btnText = 'CLICK HERE',
    btnLink = '%%=RedirectTo(@href)=%%',
    btnColor = '#ED8123',
    btnTextColor = '#ffffff',
    linkAlias = 'Sec1_Hero'
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:#ffffff; background-color:${bgColor}; width:768px;font-family:Helvetica, Arial, sans-serif;" align="center">
  <!-- Headline -->
  <tr>
    <td class="padlr20 padt30 padb20 fs32 lh38" style="padding:30px 20px 20px; font-size:40px; line-height:56px; font-weight:500;text-transform:uppercase;" align="center">
      <a href="${btnLink}" alias="${linkAlias}_Copy" style="text-decoration:none;">
        <span class="c-dark2" style="color:#222222; color:${headlineColor};">${headline}</span>
      </a>
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
            <!--[if !mso]><!-->
            <div style="display:none;"><!--<![endif]-->
              <a <a:roundrect href="${btnLink}" alias="${linkAlias}_Button" style="width:270px; height:40px; v-text-anchor:middle;" arcsize="50%" stroke="f" strokecolor="#ffffff" fillcolor="${btnColor}">
                <w:anchorlock />
                <center>
                <!--[if !mso]><!-->
              </a>
            </div><!--<![endif]-->
            <a href="${btnLink}" alias="${linkAlias}_Button" style="text-decoration:none; display:block; letter-spacing: .03em; background-color:#212121; background-color:${btnColor}; mso-shading:transparent; padding:12px 24px; border:none; border-radius:24px; mso-padding-alt:0;">
              <span class="mso-keepwhite fs14 lh18" style="font-family:Helvetica, Arial, sans-serif, Roboto; font-size:14px; line-height:18px; font-weight:bold; color:${btnTextColor}; mso-color-alt:auto;">${btnText}</span>
            </a>
            <!--[if mso]></center></a:roundrect><![endif]-->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`.trim();
};
