const model = {
  namespace: "__test1__",
  state: {
    testValue1: 1,
  },
  reducers: {
    changeTestValue(state, { testValue }) {
      return { ...state, testValue };
    },
  },
  effects: {
    *init({ isServer, keyword, searchType, cookies }, { put }) {
      yield put.resolve({ type: "setKeyword", keyword });
      yield put.resolve({ type: "setSearchType", searchType });
      yield put.resolve({ type: "search", isServer, cookies });
    },
  },
};

export default model;
