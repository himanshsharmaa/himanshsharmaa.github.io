const blackHoleFragmentShader = /* glsl */ `
uniform float uTime;
uniform vec3 uCameraPosition;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vLocalPosition;

float hash31(vec3 p) {
  p = fract(p * 0.1031);

  p += dot(
    p,
    p.yzx + 33.33
  );

  return fract(
    (p.x + p.y) * p.z
  );
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);

  f =
    f *
    f *
    (3.0 - 2.0 * f);

  float n000 =
    hash31(
      i +
      vec3(0.0, 0.0, 0.0)
    );

  float n100 =
    hash31(
      i +
      vec3(1.0, 0.0, 0.0)
    );

  float n010 =
    hash31(
      i +
      vec3(0.0, 1.0, 0.0)
    );

  float n110 =
    hash31(
      i +
      vec3(1.0, 1.0, 0.0)
    );

  float n001 =
    hash31(
      i +
      vec3(0.0, 0.0, 1.0)
    );

  float n101 =
    hash31(
      i +
      vec3(1.0, 0.0, 1.0)
    );

  float n011 =
    hash31(
      i +
      vec3(0.0, 1.0, 1.0)
    );

  float n111 =
    hash31(
      i +
      vec3(1.0, 1.0, 1.0)
    );

  float x00 =
    mix(
      n000,
      n100,
      f.x
    );

  float x10 =
    mix(
      n010,
      n110,
      f.x
    );

  float x01 =
    mix(
      n001,
      n101,
      f.x
    );

  float x11 =
    mix(
      n011,
      n111,
      f.x
    );

  float y0 =
    mix(
      x00,
      x10,
      f.y
    );

  float y1 =
    mix(
      x01,
      x11,
      f.y
    );

  return mix(
    y0,
    y1,
    f.z
  );
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;

  for (
    int i = 0;
    i < 4;
    i++
  ) {
    value +=
      noise3(p) *
      amplitude;

    p *= 2.02;
    amplitude *= 0.5;
  }

  return value;
}

void main() {
  vec3 normal =
    normalize(vNormal);

  vec3 viewDirection =
    normalize(
      uCameraPosition -
      vWorldPosition
    );

  float facing =
    max(
      dot(
        normal,
        viewDirection
      ),
      0.0
    );

  float fresnel =
    pow(
      1.0 - facing,
      5.0
    );

  vec3 noisePosition =
    vLocalPosition *
    2.6;

  noisePosition +=
    vec3(
      uTime * 0.028,
      -uTime * 0.018,
      uTime * 0.024
    );

  float largeNoise =
    fbm(
      noisePosition
    );

  float detailNoise =
    noise3(
      noisePosition *
      2.75 +
      11.7
    );

  float surfaceNoise =
    mix(
      largeNoise,
      detailNoise,
      0.32
    );

  vec3 coreColor =
    vec3(
      0.001,
      0.002,
      0.004
    );

  vec3 edgeColor =
    vec3(
      0.012,
      0.055,
      0.075
    );

  vec3 cyanColor =
    vec3(
      0.035,
      0.22,
      0.32
    );

  vec3 surfaceColor =
    mix(
      coreColor,
      edgeColor,
      surfaceNoise *
      0.18
    );

  surfaceColor +=
    cyanColor *
    fresnel *
    fresnel *
    0.18;

  surfaceColor +=
    cyanColor *
    smoothstep(
      0.48,
      0.9,
      surfaceNoise
    ) *
    fresnel *
    0.055;

  surfaceColor *=
    mix(
      0.68,
      1.0,
      fresnel
    );

  gl_FragColor =
    vec4(
      surfaceColor,
      0.985
    );
}
`;

export default blackHoleFragmentShader;