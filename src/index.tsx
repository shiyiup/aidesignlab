import { registerRoot, Composition } from "remotion";
import { HeroBg } from "./HeroBg";

const Root: React.FC = () => {
  return (
    <Composition
      id="HeroBackground"
      component={HeroBg}
      durationInFrames={1080}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(Root);
