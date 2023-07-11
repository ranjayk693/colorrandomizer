const getcolor = () => {
  const c = document.getElementById("colorDisplay");
  const random = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + random.toString(16);
  document.body.style.backgroundColor = randomCode;
  c.innerText = randomCode;
};

getcolor();
document.getElementById("colorGenerator").addEventListener("click", getcolor);
