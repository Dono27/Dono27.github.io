import { AbsoluteFill, Img, staticFile, useCurrentFrame, useCurrentScale } from "remotion";
import { config } from "./config";
import { useMemo } from "react";
import { constants } from "./constants";

export const LandingPageVideo = () => {
    const frame = useCurrentFrame();
    const scale = useCurrentScale();

    const {
      currentPlayerWidth,
      currentPlayerHeight,
      currentTrainWidth,
    } = useMemo(() => ({
      currentPlayerWidth: config.PLAYER_WIDTH * scale,
      currentPlayerHeight: config.PLAYER_HEIGHT * scale,
      currentTrainWidth: constants.TRAIN_WIDTH * scale,
    }), [scale]);

    const trainTranslateInPx = useMemo(() => {
      const currentFrameLength = (currentPlayerWidth + 2 * currentTrainWidth) / config.VIDEO_DURATION_IN_FRAMES;
      if (frame <= (config.VIDEO_DURATION_IN_FRAMES / 2)) {
        return -currentTrainWidth + (currentFrameLength * 2 * frame);
      }

      return currentPlayerWidth + 2 * currentTrainWidth - (currentFrameLength * frame);
    }, [frame]);

    return (
      <AbsoluteFill
      >
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'end',
            padding: 30
          }}
        >
          {Array(10).fill(0).map((_, index) => <Img key={`building-${index}`} src={staticFile(`assets/landing-page-background/building_${index}.png`)} />)}
          <Img
            src={staticFile("assets/landing-page-background/subway.png")}
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '-40px',
              transform: `translateX(${trainTranslateInPx}px)`
            }}
          />
        </AbsoluteFill>
      </AbsoluteFill>);
};