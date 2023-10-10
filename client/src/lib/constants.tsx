import { BarChart3, Filter, HeartPulse, MousePointerClick } from "lucide-react";
import { INavItem } from "./types";

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
        label: "Boruta",
        path: "/omics/feature-selection/boruta",
      },
      {
        label: "Glmnet - Lasso",
        path: "/omics/feature-selection/glmnet-lasso",
      },
      {
        label: "Xg Boost",
        path: "/omics/feature-selection/xgboost",
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
