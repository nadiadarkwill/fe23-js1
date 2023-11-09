// FIRST
for (i = 0; i < 5; i++) {
  const h2 = document.createElement("h2");
  document.body.appendChild(h2);

  const textCenter = "center";

  h2.style.textAlign = textCenter;

  const hue = 120 + i * 25;
  h2.style.backgroundColor = `hsl(${hue}, 80%, 85%)`;

  h2.innerText = `Rad ${i + 1}`;
  h2.style.color = "hotpink";
}

const allh2 = document.querySelectorAll("h2");
for (let i = 0; i < allh2.length; i++) {
  allh2[i].style.fontSize = `${(i + 1) * 10}px`;
}

// SECOND
const div = document.createElement("div");
document.body.appendChild(div);
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.border = "2px solid black";
div.style.justifyContent = "space-around";

let svenskaTal = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

let alignment = ["left", "center", "right"];

let unique = [4, 1, 5];

for (let i = 0; i < 3; i++) {
  const ol = document.createElement("ul");
  div.appendChild(ol);
  ol.style.backgroundColor = "hsl(240, 50%, 80%)";
  ol.style.listStyle = "none";
  ol.style.padding = "12px 12px 12px 12px";
  ol.style.display = "flex";

  if (i % 2) {
    ol.style.flexDirection = "column-reverse";
  } else {
    ol.style.flexDirection = "column";
  }

  for (let l = 0; l < 10; l++) {
    const li = document.createElement("li");
    ol.appendChild(li);
    if (l === unique[i]) {
      li.style.backgroundColor = `hsl(240, 50%, 80%)`;
    } else {
      li.style.backgroundColor = `hsl(240, 0%, ${(l % 2) * 100}%)`;
    }
    li.style.color = `hsl(240, 0%, ${((l + 1) % 2) * 100}%)`;
    li.style.width = "64px";
    li.style.padding = "4px";
    li.style.textAlign = alignment[i];
    li.innerText = i === 2 ? svenskaTal[l] : l;
  }
}
