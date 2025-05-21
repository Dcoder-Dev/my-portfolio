import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadAll } from "@tsparticles/all";
import particleConfig from "./particles.json";

const ParticlesBackground = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return <Particles id={props.id} init={particlesLoaded} options={particleConfig} />;
};

export default ParticlesBackground;
