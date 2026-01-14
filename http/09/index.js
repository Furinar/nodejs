let td = document.querySelectorAll("td");

td.forEach((item) => {
  //1 addEventListener
  const color = item.style.background;
  item.addEventListener("mouseenter", () => {
    item.style.background = "yellow";
  });

  item.addEventListener("mouseleave", () => {
    item.style.background = color;
  });
  //2 onclick
  // item.onclick=()=>{
  //     item.style.background="yellow";
  // }
});

// 3 事件委托 - 在 table 上只绑定一次

//   const table = document.querySelector("table");
//   table.addEventListener("click", (e) => {
//     const td = e.target.closest("td");
//     if (td) {
//       td.style.background = "yellow";
//     }
//   });

//伪类选择器
