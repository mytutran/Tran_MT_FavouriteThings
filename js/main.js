import { fetchData, postData } from "./modules/DataMiner.js";
(() => {

    function retrieveItems(event) {
        if (!event.target.id) {
            return
        }
        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderThumbnails(thumbs) {
        let itemSection = document.querySelector('.itemsSection'),
            itemTemplate = document.querySelector('#itemsContainer').content;

        for (let item in thumbs) {
            let currentItem = itemTemplate.cloneNode(true),
                currentImage = currentItem.querySelector('.item').children;
            currentImage[0].src = `images/${thumbs[item].image}`;
            currentImage[0].id = thumbs[item].id;

            itemSection.appendChild(currentItem);
        }
        itemSection.addEventListener("click", retrieveItems);
    }

    fetchData("./includes/index.php").then(data => renderThumbnails(data)).catch(err => console.log(err));

})();