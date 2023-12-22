import CreateGroup from '@pages/CreateGroup';
import GroupDetail from '@pages/GroupDetail';
import Main from '@pages/Main';
import NotFound from '@pages/NotFound';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack: MainStack, useFlow: useMainFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    historySyncPlugin({
      routes: {
        Main: '/',
        CreateGroup: '/create-group',
        GroupDetail: '/group-detail',
        NotFound: '/error',
      },
      fallbackActivity: () => 'NotFound',
      useHash: false,
    }),
  ],
  activities: {
    Main,
    CreateGroup,
    GroupDetail,
    NotFound,
  },
  initialActivity: () => 'Main',
});
