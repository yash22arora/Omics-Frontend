import { BarChart3, Filter, HeartPulse, TextSelect } from "lucide-react";
import { INavItem } from "./types";

export const NAV_ITEMS: INavItem[] = [
  {
    label: "Preprocessing",
    path: "/preprocessing",
    icon: <Filter size={16} />,
    children: [
      {
        label: "NA remove",
        path: "/preprocessing/na-remove",
      },
      {
        label: "KNN imputation",
        path: "/preprocessing/knn-imputation",
      },
    ],
  },
  {
    label: "Feature Selection",
    path: "/feature-selection",
    icon: <TextSelect size={16} />,
    children: [
      {
        label: "Boruta",
        path: "/feature-selection/boruta",
      },
      {
        label: "Glmnet - Lasso",
        path: "/feature-selection/glmnet-lasso",
      },
      {
        label: "Xg Boost",
        path: "/feature-selection/xgboost",
      },
    ],
  },
  {
    label: "Disease Prediction",
    path: "/disease-prediction",
    icon: <HeartPulse size={16} />,
    children: [
      {
        label: "Deep Neural Network",
        path: "/disease-prediction/dnn",
      },
      {
        label: "Random Forest",
        path: "/disease-prediction/random-forest",
      },
      {
        label: "Stacked Ensemble",
        path: "/disease-prediction/stacked-ensemble",
      },
    ],
  },
  {
    label: "Survival Analysis",
    path: "/survival-analysis",
    icon: <BarChart3 size={16} />,
  },
];
