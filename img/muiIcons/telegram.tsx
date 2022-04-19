import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';
import pure from 'recompose/pure';

const Telegram = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 30 25">
    <path d="M11.5517 15.9121L11.0647 22.5659C11.7615 22.5659 12.0632 22.2751 12.4251 21.926L15.6917 18.8934L22.4604 23.7086C23.7018 24.3806 24.5764 24.0267 24.9113 22.5992L29.3543 2.37568L29.3555 2.37449C29.7493 0.591878 28.6919 -0.105198 27.4824 0.332113L1.36672 10.0447C-0.415621 10.7168 -0.388635 11.6819 1.06374 12.1193L7.74047 14.1366L23.2492 4.70999C23.9791 4.24051 24.6427 4.50027 24.0968 4.96975L11.5517 15.9121Z" />
  </SvgIcon>
);
const telegramIcon = pure(Telegram);
telegramIcon.displayName = 'Telegram';
telegramIcon['muiName'] = 'SvgIcon';

export default telegramIcon;
