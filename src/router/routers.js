import React from "react";
import Layout from "components/layout";
import Index from "../pages/Test1";
import Index1 from "../pages/index1";
import Bus from "../pages/Test2";
import Error from "../pages/_error";
import LoginLayout from "../components/layout/LoginLayout";
import { RadarChartOutlined, AppleOutlined } from "@ant-design/icons";

export const router0 = [
  {
    path: "/path1",
    name: "index",
    icon: <AppleOutlined />,
    component: Layout,
    redirect: "/path1/pa1/pb1",
    children: [
      {
        path: "/path1/pa1",
        component: Index,
        icon: <RadarChartOutlined />,
        name: "pa1",
        children: [
          {
            path: "/path1/pa1/pb1",
            component: Bus,
            name: "pb1",
            icon: <RadarChartOutlined />,
          },
          {
            path: "/path1/pa1/pb2",
            component: Bus,
            name: "pb33333",
            icon: <RadarChartOutlined />,
          },
        ],
      },
      {
        path: "/path1/pbfewg",
        component: Bus,
        name: "pbfewg",
        icon: <RadarChartOutlined />,
      },
      {
        path: "/path1/pa2",
        name: "pa2",
        component: Index1,
        icon: <AppleOutlined />,
      },
    ],
  },
  {
    path: "/path2",
    name: "index111",
    icon: <AppleOutlined />,
    component: Layout,
  },
  {
    path: "*",
    component: Error,
  },
];

export const router1 = [
  {
    path: "/path2",
    name: "index222",
    icon: <AppleOutlined />,
    component: Layout,
    redirect: "/path2/hahahhaha1",
    children: [
      {
        path: "/path2/hahahhaha1",
        component: Bus,
        name: "weferfr",
        icon: <RadarChartOutlined />,
      },
      {
        path: "/path2/pa2",
        name: "pa2",
        component: Index1,
        icon: <AppleOutlined />,
      },
    ],
  },
  {
    path: "*",
    component: Error,
  },
];

export const topMenuMaps = [
  {
    path: "/path1",
    key: "1",
    name: "nav 1",
    leftRouters: router0,
  },
  {
    path: "/path2",
    key: "2",
    name: "nav 2",
    leftRouters: router1,
  },
];

export const commonRouters = [
  {
    path: "/",
    key: "login",
    name: "loginlogin",
    component: LoginLayout,
    redirect: "/login",
    children: [
      {
        path: "/login",
        component: Bus,
        name: "loginlogin",
        hidden: true,
        icon: <RadarChartOutlined />,
      },
    ],
  },
];
