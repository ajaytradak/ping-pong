import React from "react";
import Home from "@src/modules/home/components";
import Dashboard from "@src/modules/dashboard/components";

type Category = "Home" | "Dashboard";

interface Route<T> {
  title?: T;
  path: string;
  url?: string;
  exact?: boolean;
  main: any;
  routes?: Route<string>[];
}

type MainRoute = Route<Category>;

export const homeRoute = "/home";
export const dashboardRoute = "/dashboard";

export const routes: MainRoute[] = [
  {
    title: "Home",
    path: homeRoute,
    url: homeRoute,
    main: Home,
    exact: true
  },
  {
    title: "Dashboard",
    path: dashboardRoute,
    url: dashboardRoute,
    main: Dashboard
  }
];
