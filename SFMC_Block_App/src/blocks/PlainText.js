export const generatePlainText = (data) => {
  const {
    bgColor = '#ffffff',
    copy = 'This is a beautifully aligned plain text block.',
    copyColor = '#212121',
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:#ffffff; background-color:${bgColor}; width:768px; font-family:Helvetica, Arial, sans-serif;" align="center">
  <tr>
    <td class="padlr30 padb20 fs14 lh22" style="padding:20px 40px 20px; font-size:16px; line-height:24px; font-weight:400;" align="left">
      <span class="c-dark2" style="color:#212121; color:${copyColor};">${copy}</span>
    </td>
  </tr>
</table>
`.trim();
};
