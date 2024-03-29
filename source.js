[am, ar, av] = process.argv.slice(2);
G = [
  [12, 8, 400, 1000],
  [18, 7, 1600, 300],
  [5, 12, 2000, 500],
  [30, 15, 3423, 167],
  [20, 5, 1000, 800],
];
C = "\x1b[2J";
g = 0;
M = Math;
pi = parseInt;
F = M.floor;
R = M.round;
o = process.stdout;
v = 0.1 + (parseFloat(av) % 11 || 0) * 0.35;
r = ((parseFloat(ar) % 360) * M.PI) / 180;
f = v / 99;
[dw, dh, pb, ph] = G[pi(am)];
w = 70 + dw;
h = 20 + dh;

sx = pb % w;
sy = F(pb / w);
x = sx;
y = sy;
rx = R(x);
ry = R(y);
hx = ph % w;
hy = F(ph / w);

gt = (x, y) =>
  M.sin(M.sqrt((x - (w - 1) / 2) ** 2 + (y - (h - 1) / 2) ** 2) / (dh / 2)) > 0;

const L = () => {
  let a = C;
  for (let y = 0; y <= h; y++) {
    for (let x = 0; x <= w; x++) {
      ch =
        x == hx && y == hy
          ? "@"
          : x == rx && y == ry
          ? "●"
          : x == sx && y == sy
          ? "ɵ"
          : gt(x, y)
          ? ";"
          : "·";
      a += `\x1b[${y + 1};${x}H${ch}`;
    }
  }
  o.write(a);
};

I = setInterval(() => {
  if (g > 50) {
    o.write(C);
    clearInterval(I);
  } else if (g > 2) {
    g++;
  } else if (g) {
    o.write(
      `\x1b[${F(h / 2 - 1)};${F(w / 2 - 3)}H${g === 1 ? "Oh no!" : "Yeah!"}`
    );
    g = 3;
  } else {
    v = M.max(0, v - f * (gt(rx, ry) ? 2 : 1));
    x += v * M.cos(r);
    y -= v * M.sin(r);

    if (x >= w) {
      x = w;
      r *= -1;
      r += M.PI;
    }

    if (x <= 0) {
      x = 0;
      r *= -1;
      r += M.PI;
    }

    if (y >= h) {
      y = h;
      r *= -1;
    }

    if (y <= 0) {
      y = 0;
      r *= -1;
    }

    rx = R(x);
    ry = R(y);

    if (rx == hx && ry == hy && v < 0.5) g = 2;
    else if (v < 0.1) g = 1;
    L();
  }
}, 50);
