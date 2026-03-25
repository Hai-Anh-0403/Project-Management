//Button status
const buttonsStatust = document.querySelectorAll("[button-status]");
if (buttonsStatust.length > 0) {
    let url = new URL(window.location.href);
    buttonsStatust.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");

            }
            window.location.href = url.href;
        });
    })
}
// form search
const formSearch = document.querySelector("form-search");
if (formSearch) {
    formSearch.addEventListener("submit", (e) => {
        let url = new URL(window.location.href);
        const keyword = e.target.elements.keyword.value;
        e.preventDefault();
        if (keyword) {
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");

        }
        window.location.href = url.href;
    });
}