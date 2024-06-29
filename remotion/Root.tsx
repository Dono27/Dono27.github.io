import React from "react";
import { Composition } from "remotion";
import { LandingPageVideo } from "./LandingPageVideo";
import { config } from "../config";
 
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Empty"
        component={LandingPageVideo}
        durationInFrames={config.VIDEO_DURATION_IN_FRAMES}
        fps={config.FPS}
        width={config.PLAYER_WIDTH}
        height={config.PLAYER_HEIGHT}
      />
    </>
  );
};