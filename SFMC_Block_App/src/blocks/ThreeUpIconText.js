export const generateThreeUpIconText = (data) => {
  const {
    headerBgColor = '#212121',
    headerTextColor = '#ffffff',
    headline = 'THE FIRST PLACE THEY LOOK IN THE BOOK',
    copy = 'The index is the reference tool that guides readers to find people, sports, clubs, and topics in the book.',
    copyColor = '#ffffff',
    gridBgColor = '#E7F1F6',
    img1Url = 'https://placehold.co/240x240',
    img2Url = 'https://placehold.co/240x240',
    img3Url = 'https://placehold.co/240x240',
    btnText = 'CREATE YOUR INDEX TEMPLATE',
    btnLink = '%%=RedirectTo(@href)=%%',
    btnColor = '#ED8123',
    btnTextColor = '#ffffff',
    hideButton = false,
    linkAlias = 'Sec3_Gallery'
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:#ffffff; width:768px;font-family:Helvetica, Arial, sans-serif;">
  ${headline ? `
  <!-- Headline gallery -->
  <tr>
    <td class="padlr20 padt30 padb10 fs24 lh30" style="padding:30px 20px 10px; font-size:24px; line-height:32px; font-weight:500; text-transform:uppercase; background-color:#212121; background-color:${headerBgColor};" align="center">
      <span class="mso-keepwhite" style="color:#fffffe; color:${headerTextColor};">${headline}</span>
    </td>
  </tr>` : ''}

  ${copy ? `
  <!-- Subcopy gallery -->
  <tr>
    <td class="pad0 padlr30 padb30 fs16 lh24" style="padding:0px 40px 30px; font-size:16px; line-height:24px; font-weight:400; background-color:#212121; background-color:${headerBgColor};" align="center">
      <span class="mso-keepwhite" style="color:#fffffe; color:${copyColor};">${copy}</span>
    </td>
  </tr>` : ''}

  <tr>
    <td align="center" class="padt10 padb10 bg-dark3" style="padding:10px 0; background-color:${gridBgColor};">
      <!-- Images gallery -->
      <table role="presentation" style="width:100%;" dir="ltr">
        <tr>
          <td class="db w100 padb20" align="center">
            <a href="${btnLink}" alias="${linkAlias}_Image1" style="text-decoration:none;"><img src="${img1Url}" class="vw60 ha" style="border:none; display:block;margin:0 auto;" width="240" alt=""></a>
          </td>
          <td class="db w100 padb20" align="center">
            <a href="${btnLink}" alias="${linkAlias}_Image2" style="text-decoration:none;"><img src="${img2Url}" class="vw60 ha" style="border:none; display:block;margin:0 auto;" width="240" alt=""></a>
          </td>
          <td class="db w100 padb20" align="center">
            <a href="${btnLink}" alias="${linkAlias}_Image3" style="text-decoration:none;"><img src="${img3Url}" class="vw60 ha" style="border:none; display:block;margin:0 auto;" width="240" alt=""></a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  ${!hideButton ? `
  <!-- Button gallery -->
  <tr>
    <td class="padt20 padb40 button bg-dark3" style="padding:20px 20px 30px; background-color:${gridBgColor};" align="center">
      <table role="presentation" class="vw80" style="width:310px;">
        <tr>
          <td align="center">
            <!--[if !mso]><!--><div style="display:none;"><!--<![endif]-->
            <a <a:roundrect href="${btnLink}" alias="${linkAlias}_Button" style="width:310px; height:40px; v-text-anchor:middle;" arcsize="50%" stroke="f" strokecolor="#ffffff" fillcolor="${btnColor}">
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
  </tr>` : ''}
</table>
`.trim();
};
