import data from "./data.js";

const template = document.querySelector(".job__template");
const ul = document.querySelector(".job__list");

data.forEach((job) => {
  const { company, location, position, postedAt, logo, contract } = job;
  const li = template.content.cloneNode(true);

  const image = li.querySelector(".job__img");
  const time = li.querySelector(".job__time");
  const title = li.querySelector(".job__title");
  const Company = li.querySelector(".job__company");
  const place = li.querySelector(".job__place");

  image.src = logo;
  time.textContent = `${postedAt} | ${contract}`;
  title.textContent = position;
  Company.textContent = company;
  place.textContent = location;

  ul.appendChild(li);
});
