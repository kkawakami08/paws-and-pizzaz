import React from "react";
import StoreQualityPointTile from "./StoreQualityPointTile";

const StoreQualityPoints = () => {
  return (
    <div className="flex flex-col gap-10">
      <StoreQualityPointTile />
      <StoreQualityPointTile />
      <StoreQualityPointTile />
    </div>
  );
};

export default StoreQualityPoints;
