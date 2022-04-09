import React, { ReactNode } from "react";
import { Navigate } from "react-router";
import { Client } from "../models/Client";

type Props = {
  user: Client | undefined;
};

const ProtectedRoute: React.FC<Props> = ({ user, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
