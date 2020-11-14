import { fetchData, postData } from "./modules/DataMiner.js";
(() => {
    let itemBox = document.querySelector(".itemInfo"),
        itemTitle = document.querySelector(".itemInfo h3"),
        closeButton = document.querySelector(".closeButton"),
        itemDesc = document.querySelector(".itemInfo p");


    // Pop that error boi
    function errorMsg() {
        alert("Mission failed! Can't connect. Better luck next time.");
    }

    // Handle the data and render the stuff 

    function handleIt(data) {
        let theName = data[0].name,
            theDesc = data[0].description;
        itemTitle.textContent = theName;
        itemDesc.textContent = theDesc;
        itemBox.classList.add("expanded");
        document.body.classList.add("expanded");
    }

    // This function closes the box so users can scroll again :P

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

    function renderThumbnails(thumbs) {
        let itemSection = document.querySelector('#itemsSection'),
            itemTemplate = document.querySelector('#itemsContainer').content;

        for (let item in thumbs) {
            let currentItem = itemTemplate.cloneNode(true),
                currentContent = currentItem.querySelector('.item').children;
            currentContent[0].src = `images/${thumbs[item].image}`;
            currentContent[0].id = thumbs[item].id;
            // I found another approach to render the data out so imma go with that one instead.

            // let itemName = currentContent[1].querySelector('h3'),
            //     itemDesc = currentContent[1].querySelector('p');
            // itemName.textContent = `${thumbs[item].name}`;
            // itemDesc.textContent = `${thumbs[item].description}`;

            itemSection.appendChild(currentItem);
        }
        itemSection.addEventListener("click", retrieveItems);
    }

    fetchData("./includes/index.php").then(data => renderThumbnails(data)).catch(err => errorMsg(err));


})();