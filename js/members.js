import { data } from "../data/data.js";

const membersSection = document.querySelector(".members-gallery-item");

data.forEach((item, index) => {
  let member = document.createElement("li");
  let htmlData = `<div class="members-photo">
<img
  src="${item.image}"
  alt="${index}"
/>
</div>
<p class="members-name">${item.name}</p>`;
    member.insertAdjacentHTML("afterbegin",htmlData);
    membersSection.append(member);
});
