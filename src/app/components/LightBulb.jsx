import React from "react";

function LightBulb(props) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereGeometry args={[1, 30, 10]} />
      <meshPhongMaterial emissive={"white"} />
    </mesh>
  );
}

export default LightBulb;
