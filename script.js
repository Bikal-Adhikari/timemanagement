const taskList = [];

const handleOnSubmit = (form) => {
  const newForm = new FormData(form);

  const task = newForm.get("task");
  const hr = newForm.get("hr");
  const obj = {
    task,
    hr,
  };
  taskList.push(obj);
};
