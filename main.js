const navListEl = document.querySelectorAll("nav a, .hader-scroll-down a");
for (const element of navListEl) {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const targetID = this.getAttribute("href");
        const targetEl = document.querySelector(targetID);
        if (targetEl) {
            targetEl.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
}

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = array1.filter((el) => el % 2 == 0);
// const array3 = array1.filter((el) => el % 2 !== 0);

// console.log(array2);
// console.log(array3);
// //
// const logger = (kind) => {
//     const colors = {
//         warning: "\x1b[1;33m",
//         error: "\x1b[0;31m",
//         info: "\x1b[1;37m",
//     };
//     const color = colors[kind] || colors.info;
//     return (s) => {
//         const date = new Date().toISOString();
//         console.log(color + date + "\t" + s);
//     };
// };
// logger(info);
