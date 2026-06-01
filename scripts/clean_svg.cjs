const fs = require('fs');
const path = 'images/undraw/undraw_software_engineer_lvl5.svg';
let s = fs.readFileSync(path, 'utf8');
const before = s;
// Replace the specific ground ellipse fill; also remove any standalone ellipse element if present
s = s.replace(/<ellipse[^>]*fill="#f2f2f2"[^>]*\/>/g, '');
// fallback: replace attribute only
s = s.replace(/fill="#f2f2f2"/g, 'fill="none"');
if (s === before) {
  console.log('No change needed');
} else {
  fs.writeFileSync(path, s, 'utf8');
  console.log('SVG cleaned');
}
