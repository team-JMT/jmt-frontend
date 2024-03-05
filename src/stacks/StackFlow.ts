import GroupImage from '@pages/CreateGroup/GroupImage.tsx';
import GroupName from '@pages/CreateGroup/GroupName.tsx';
import IntroduceGroup from '@pages/CreateGroup/IntroduceGroup';
import GroupDetail from '@pages/GroupDetail';
import GroupList from '@pages/GroupList';
import GroupListEdit from '@pages/GroupListEdit';
import GroupSetting from '@pages/GroupSetting';
import GroupShare from '@pages/GroupShare';
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
        GroupName: '/group-create/name',
        GroupImage: '/group-create/image',
        IntroduceGroup: '/group-create/introduce',
        GroupDetail: '/group-detail/:groupId',
        GroupShare: '/group-share/:groupId',
        GroupSetting: '/group-setting',
        GroupList: '/group-list',
        GroupListEdit: '/gruop-list-edit',
        NotFound: '/error',
      },
      fallbackActivity: () => 'NotFound',
      useHash: false,
    }),
  ],
  activities: {
    Main,
    GroupName,
    GroupImage,
    IntroduceGroup,
    GroupDetail,
    GroupShare,
    GroupSetting,
    GroupList,
    GroupListEdit,
    NotFound,
  },
  initialActivity: () => 'Main',
});
