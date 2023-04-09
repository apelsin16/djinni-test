(function() {

    const url = "https://picsum.photos/v2/list?page=1&limit=9";
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores aut consectetur consequatur cupiditate debitis doloremque dolores, ea eaque earum eius eligendi eos error est ex fuga fugiat illo iste laborum libero, mollitia nemo non nostrum odio optio placeat qui quibusdam quidem quis quisquam repellat saepe sequi sunt, tempora tempore temporibus. Aliquam asperiores ex, fugiat illo in iste maiores nemo odit ratione rem. Amet commodi deleniti dolorum eaque earum eos ex excepturi incidunt inventore necessitatibus nobis omnis quo ratione, saepe vero voluptate voluptates! Animi aspernatur blanditiis enim, expedita porro soluta. Amet at aut consectetur, consequatur distinctio doloremque esse est eveniet facilis ipsam labore maiores numquam officia pariatur quas qui, rerum sapiente similique! Aliquam autem dignissimos, distinctio enim eos labore minima nihil provident quaerat quis vel veniam voluptas, voluptate.";
    let cardText = "";
    const cards = document.getElementById("cards");
    function toggleShowText() {
        const text = this.previousElementSibling;
        if(text.classList.contains("custom-text")) {
            text.classList.remove("custom-text");
            this.innerHTML = "Hide";
        } else {
            text.classList.add("custom-text");
            this.innerHTML = "Show more...";
        }
    }

    function create(tag, cls, content ) {
        const element = document.createElement(tag);
        cls.split(" ").forEach(el =>  element.classList.add(el));
        if(content) element.innerHTML = content;
        return element
    }

    function createCard(text, author, url) {

        const cardWrapper = create("div", "col-12 col-md-6");
        const card = create("div", "card");

        const canvas = create("canvas", "card-img-top");

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = url;
        img.onload = function () {
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.getContext("2d").drawImage(this, 0, 0);
        }

        const cardBody = create("div", "card-body");
        const cardTitle = create("h5", "card-title ms-3", author);
        const cardText = create("p", "card-text custom-text ms-3", text);
        const cardFooter = create("div", "card-footer p-4");
        const buttonSave = create("button", "btn btn-success mx-1", "Save to collection");
        const buttonShare = create("button", "btn btn-outline-secondary", "Share");

        cardBody.append(cardTitle);
        cardBody.append(cardText);

        cardFooter.append(buttonSave);
        cardFooter.append(buttonShare);

        card.append(canvas);
        card.append(cardBody);
        card.append(cardFooter);

        cardWrapper.append(card);

        return cardWrapper
    }

    document.addEventListener("DOMContentLoaded", () => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.map(el => {
                    cardText = lorem.slice(0, lorem.length * Math.random()/5);
                    const card = createCard(cardText, el.author, el.url);
                    console.log(card);
                    cards.append(card);
                    // let card = `<div class="col-12 col-md-6">
                    //                 <div class="card"><img class="card-img-top" src="${el.url}" >
                    //                   <div class="card-body">
                    //                     <h5 class="card-title ms-3">${el.author}</h5>
                    //                     <p class="card-text custom-text ms-3">${cardText}</p>
                    //                   </div>
                    //                   <div class="card-footer p-4">
                    //                     <button class="btn btn-success">Save to collection</button>
                    //                     <button class="btn btn-outline-secondary">Share</button>
                    //                   </div>
                    //                 </div>
                    //               </div>`;
                    // cards.innerHTML += card;
                });
            }).then(() => {
                const cardTexts = document.querySelectorAll(".card-text");
                cardTexts.forEach(el => {
                    if(el.innerText.length > 60) {
                        // el.setAttribute("class", "text-truncate");
                        let button = document.createElement("button");
                        button.className = "btn";
                        button.innerHTML = "Show more...";
                        button.addEventListener("click", toggleShowText);
                        el.after(button);
                    } else {
                        el.style.marginBottom = "54px";
                    }
                });
            });
    });
})();