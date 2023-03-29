const infoBtn = [...document.querySelectorAll(".info_btn")];

infoBtn.forEach((element) => {
  element.addEventListener("click", () => {
    const id = element.id;

    fetch(`/books`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    }).then((response) => {
      console.log(response);
    });
  });
});
