import {
  BarChart3,
  Filter,
  HeartPulse,
  Home,
  MousePointerClick,
} from "lucide-react";
import { INavItem, ITeam } from "./types";
import pfp from "../assets/team/pfp.jpeg";

export const NAV_ITEMS: INavItem[] = [
  {
    label: "Preprocessing",
    path: "/omics/preprocessing",
    icon: <Filter size={16} />,
    children: [
      {
        label: "NA remove",
        path: "/omics/preprocessing/na-remove",
      },
      {
        label: "KNN imputation",
        path: "/omics/preprocessing/knn-imputation",
      },
    ],
  },
  {
    label: "Feature Selection",
    path: "/omics/feature-selection",
    icon: <MousePointerClick size={16} />,
    children: [
      {
        label: "ANOVA",
        path: "/omics/feature-selection/anova",
      },
      {
        label: "Fire",
        path: "/omics/feature-selection/fire",
      },
      {
        label: "Pso",
        path: "/omics/feature-selection/pso",
      },
    ],
  },
  {
    label: "Disease Prediction",
    path: "/omics/disease-prediction",
    icon: <HeartPulse size={16} />,
    children: [
      {
        label: "Deep Neural Network",
        path: "/omics/disease-prediction/dnn",
      },
      {
        label: "Random Forest",
        path: "/omics/disease-prediction/random-forest",
      },
      {
        label: "Stacked Ensemble",
        path: "/omics/disease-prediction/stacked-ensemble",
      },
    ],
  },
  {
    label: "Survival Analysis",
    path: "/omics/survival-analysis",
    icon: <BarChart3 size={16} />,
  },
];

export const TEAM: ITeam[] = [
  {
    name: "Dr. Ashima Singh",
    subtitle: "Associate Professor, TIET",
    image: pfp,
  },
  {
    name: "Ms. Arwin Kaur",
    subtitle: "Research Scholar, TIET",
    image: pfp,
  },
  {
    name: "Ms. Parampreet Kaur",
    subtitle: "Research Scholar, TIET",
    image: pfp,
  },
  {
    name: "Yashvardhan Arora",
    subtitle: "Undergraduate, TIET",
    image: pfp,
    linkedin: "https://www.linkedin.com/in/yashvardhan-arora/",
    github: "https://github.com/yash22arora",
  },
  {
    name: "Sidharth Bahl",
    subtitle: "Undergraduate, TIET",
    image: pfp,
    linkedin: "https://www.linkedin.com/in/sidharthbahl/",
    github: "https://github.com/sidB67",
  },
];
