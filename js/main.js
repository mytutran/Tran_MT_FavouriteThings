import { fetchData, postData } from "./modules/DataMiner.js";
(() => {


    function retrieveItems(event) {
        let currentID = event.target.id,
            currentPick = event.target.parentNode,
            itemInfo = currentPick.childNodes[3],
            infoExpanded = false;
        if (!currentID) {
            return
        }
        if (!infoExpanded) {
            itemInfo.classList.add("expanded");
            itemInfo.classList.remove("unExpanded");
            infoExpanded = true;
        } else {
            infoExpanded = false;
            itemInfo.classList.remove("expanded");
            itemInfo.classList.add("unExpanded");
        }
        debugger;
        // fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderThumbnails(thumbs) {
        let itemSection = document.querySelector('#itemsSection'),
            itemTemplate = document.querySelector('#itemsContainer').content;

        for (let item in thumbs) {
            let currentItem = itemTemplate.cloneNode(true),
                currentContent = currentItem.querySelector('.item').children;
            currentContent[0].src = `images/${thumbs[item].image}`;
            currentContent[0].id = thumbs[item].id;
            let itemName = currentContent[1].querySelector('h3'),
                itemDesc = currentContent[1].querySelector('p');
            itemName.textContent = `${thumbs[item].name}`;
            itemDesc.textContent = `${thumbs[item].description}`;

            itemSection.appendChild(currentItem);
        }
        itemSection.addEventListener("click", retrieveItems);
    }

    fetchData("./includes/index.php").then(data => renderThumbnails(data)).catch(err => console.log(err));

})();