export const findItemByPath = (routers, pathname) => {
  for (let i = 0; i < routers.length; i++) {
    const item = routers[i];
    if (!item.name) continue;
    if (item.children) {
      findItemByPath(item.children, pathname);
    }
    if (pathname === item.path) {
      return item;
    }
  }
  return null;
};
export const findOpenKeys = (routers, pathname) => {
  const find = (routers, openKey, selectedKeys, key) => {
    for (let i = 0; i < routers.length; i++) {
      const item = routers[i];
      if (!item.name) continue;
      let _key = key ? key + "." + item.name : item.name;

      if (item.children) {
        find(item.children, openKey, selectedKeys, _key);
      }
      if (pathname === item.path) {
        openKey[_key] = _key;
        selectedKeys.push(item.name);
        break;
      }
    }
    return {
      openKeys:
        Object.keys(openKey).length > 0
          ? Object.keys(openKey)[0].split(".")
          : "",
      selectedKeys,
    };
  };
  return find(routers, {}, [], "");
};
