export const generateHeaderBannerImage = (data) => {
  const {
    bgColor = '#ffffff',
    imgUrl = 'https://placehold.co/768x400',
    linkUrl = '%%=RedirectTo(@href)=%%',
    imgAlt = '',
    linkAlias = 'Sec1_Hero_Image'
  } = data || {};

  return `
<table role="presentation" class="vw100 bg-dark" style="background-color:#ffffff; background-color:${bgColor}; width:768px;font-family:Helvetica, Arial, sans-serif;">
  <tr>
    <td align="center">
      <a href="${linkUrl}" alias="${linkAlias}" style="text-decoration:none;">
        <img src="${imgUrl}" class="vw100 ha" style="border:none;display:block;width:768px;" width="768" alt="${imgAlt}">
      </a>
    </td>
  </tr>
</table>
`.trim();
};
