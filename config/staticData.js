import React from "react";
import {
  DashboardIcon,
  MatchesIcon,
  RatingIcon,
  SettingsIcon,
  StatsIcon,
} from "@components/UI/Icons";
import Images from "@config/images";

export const roles = [
  {
    id: 1,
    name: "keeper",
    icon: Images.roleKeeper,
  },
  {
    id: 2,
    name: "defender",
    icon: Images.roleDefender,
  },
  {
    id: 3,
    name: "midfielder",
    icon: Images.roleMidFielder,
  },
  {
    id: 4,
    name: "striker",
    icon: Images.roleStriker,
  },
];

export const navMenus = [
  {
    id: 1,
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    name: "Stats",
    icon: <StatsIcon />,
  },
  {
    id: 3,
    name: "Rates",
    icon: <RatingIcon />,
  },
  {
    id: 4,
    name: "Settings",
    icon: <SettingsIcon />,
  },
  {
    id: 5,
    name: "Matches",
    icon: <MatchesIcon />,
  },
];
