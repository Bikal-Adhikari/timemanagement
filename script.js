const taskList = [];
const entryElm = document.getElementById("entryList");
const tWHr = 7 * 24;
const handleOnSubmit = (form) => {
  const newForm = new FormData(form);

  const task = newForm.get("task");
  const hr = +newForm.get("hr");
  const obj = {
    task,
    hr,
  };

  // check if you have enough hr left to fit this incomung task

  const previousTtl = total();
  if (previousTtl + hr > tWHr) {
    return alert("Sorry boss not enough time left!");
  }
  taskList.push(obj);
  display();
  total();
};

const display = () => {
  let str = ``;

  taskList.forEach((item, i) => {
    str += `
    <tr>
    <th>${i + 1}</th>
    <td>${item.task}</td>
    <td>${item.hr}hrs</td>
    <td class="text-end">
      <button class="btn btn-danger btn-sm">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btn-success btn-sm">
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </td>
  </tr>`;
  });

  entryElm.innerHTML = str;
};

const total = () => {
  //   let ttl = 0;
  //   taskList.forEach((item) => (ttl += eval(item.hr)));

  const ttl = taskList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  document.getElementById("ttlHrs").innerText = ttl;
  return ttl;
};
