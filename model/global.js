import { topMenuMaps, commonRouters } from "../src/router/routers";
const GlobalModel = {
  namespace: "global",
  state: {
    collapsed: false,
    openKeys: [],
    routers: [],
    topMenuMaps: topMenuMaps,
    topMenuSelectedKey: "",
    commonRouters,
  },
  effects: {
    *changeTopMenuSelectedKey({ topMenuSelectedKey }, { call, put, select }) {
      const { topMenuMaps = [], commonRouters = [] } = yield select(
        ({ global }) => global
      );
      const curRouters = topMenuMaps.find((item) => {
        return topMenuSelectedKey === item.key;
      });
      yield put({
        type: "changeRouters",
        routers: [...(curRouters?.leftRouters ?? []), ...commonRouters],
      });
    },
    *changeRoutersByPath({ pathname }, { call, put, select }) {
      const { topMenuMaps = [], commonRouters = [] } = yield select(
        ({ global }) => global
      );
      const curRouters = topMenuMaps.find((item) => {
        return pathname.indexOf(item.path) > -1;
      });
      yield put({
        type: "changeRouters",
        routers: [...(curRouters?.leftRouters ?? []), ...commonRouters],
      });
    },
  },
  reducers: {
    changeLayoutCollapsed(state, { collapsed }) {
      return { ...state, collapsed };
    },
    changeOpenKeys(state, { openKeys }) {
      return {
        ...state,
        openKeys,
      };
    },
    changeRouters(state, { routers }) {
      return {
        ...state,
        routers,
      };
    },
    changeTopMenuSelectedKey(state, { topMenuSelectedKey }) {
      return {
        ...state,
        topMenuSelectedKey,
      };
    },
  },
};
export default GlobalModel;
