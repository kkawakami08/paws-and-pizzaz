import React from "react";
import StoreQualityPointTile from "./StoreQualityPointTile";

const StoreQualityPoints = () => {
  return (
    <div className="flex flex-col  divide-y">
      <StoreQualityPointTile />
      <StoreQualityPointTile />
      <StoreQualityPointTile />
    </div>
  );
};

export default StoreQualityPoints;
