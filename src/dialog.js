const dialog = document.getElementById("resultDialog");
const titleEl = document.getElementById("dialogTitle");
const messageEl = document.getElementById("dialogMessage");
const closeBtn = document.getElementById("dialogClose");

function openDialog({ title, message }) {
    titleEl.textContent = title;
    messageEl.textContent = message;

    dialog.classList.remove("hidden");
    dialog.classList.add("flex");
}

function closeDialog() {
    dialog.classList.add("hidden");
    dialog.classList.remove("flex");
}

closeBtn.addEventListener("click", closeDialog);

// بستن با کلیک خارج
dialog.addEventListener("click", (e) => {
    if (e.target === dialog) closeDialog();
});

export { openDialog, closeDialog };
