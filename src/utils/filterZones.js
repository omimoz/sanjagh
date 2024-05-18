"use client"
export function updateView(filterzoneList) {
    function handleCitySelect({ name, id, e }) {
        e.preventDefault(); // Prevent the default behavior of anchor tag
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('zoneName', name);
        urlParams.set('zoneId', id);
        const newUrl = `${window.location.origin}/?${urlParams.toString()}`;
        history.pushState({}, '', newUrl);
    }

    const listContainer = document.getElementById("zoneListContainer");

    if (listContainer) {
        listContainer.innerHTML = ""; // Clear the existing content

        filterzoneList?.forEach(({ id, name }) => {
            const item = document.createElement("div");
            item.classList.add("border-b", "border-b-gray-100", "text-gray-500", "py-3", "px-2", "cursor-pointer", "hover:bg-[#E5F1FF]");
            item.addEventListener("click", (e) => handleCitySelect({ id, name, e }));
            item.setAttribute("id", "city");
            item.innerHTML = `<a href=?zoneName=${name}&&>${name}</a>`;
            listContainer.appendChild(item);
        });
    }
}