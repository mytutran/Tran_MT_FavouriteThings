import { fetchData, postData } from "./modules/DataMiner.js";
(() => {
    let itemBox = document.querySelector(".itemInfo"),
        itemTitle = document.querySelector(".itemInfo h3"),
        closeButton = document.querySelector(".closeButton"),
        itemDesc = document.querySelector(".itemInfo p");

    function handleIt(data) {
        console.log(data);
        let theName = data[0].name,
            theDesc = data[0].description;
        itemTitle.textContent = theName;
        itemDesc.textContent = theDesc;
        itemBox.classList.add("expanded");
        document.body.classList.add("expanded");
    }

    function closeBox() {
        itemBox.classList.remove("expanded");
        document.body.classList.remove("expanded");
    }

    closeButton.addEventListener("click", closeBox);

    function retrieveItems(event) {
        let currentID = event.target.id;
        if (!currentID) {
            return
        }
        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => handleIt(data)).catch(err => console.log(err));
    }

    // closeButton.addEventListener("click", closeIt);

    function renderThumbnails(thumbs) {
        let itemSection = document.querySelector('#itemsSection'),
            itemTemplate = document.querySelector('#itemsContainer').content;

        for (let item in thumbs) {
            let currentItem = itemTemplate.cloneNode(true),
                currentContent = currentItem.querySelector('.item').children;
            currentContent[0].src = `images/${thumbs[item].image}`;
            currentContent[0].id = thumbs[item].id;
            // let itemName = currentContent[1].querySelector('h3'),
            //     itemDesc = currentContent[1].querySelector('p');
            // itemName.textContent = `${thumbs[item].name}`;
            // itemDesc.textContent = `${thumbs[item].description}`;

            itemSection.appendChild(currentItem);
        }
        itemSection.addEventListener("click", retrieveItems);
    }

    fetchData("./includes/index.php").then(data => renderThumbnails(data)).catch(err => console.log(err));


})();