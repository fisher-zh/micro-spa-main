import formattingRoutes from '../utils/formatting-routes';

import SubApp1 from '../view/sub-app1';
import SubApp2 from '../view/sub-app2';
import testSubApp from '../view/test-sub-app';
/* insert route file */

const subAppRouter = [
  {
    path: '/sub-app-1',
    name: 'SubApp1',
    component: SubApp1,
    meta: {
      isAuth: true, // 鉴权参数
      keepAlive: false,
      isSubApp: true
    }
  }, {
    path: '/sub-app-2',
    name: 'SubApp2All',
    component: SubApp2,
    meta: {
      isAuth: true, // 鉴权参数
      keepAlive: false,
      isSubApp: true
    }
  }, {
    path: '/test-sub-app',
    name: 'testSubAppAll',
    component: testSubApp,
    meta: {
      isAuth: true,
      keepAlive: false,
      isSubApp: true
    }
  }/* insert route object */
]

formattingRoutes(subAppRouter)

export default subAppRouter
