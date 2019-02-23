var module = (function () {
    const URL_ROOT = "https://reduxblog.herokuapp.com";
    const endpoint = "api/posts";
    const API_KEY = "16191843973563976326843876";
    const form = document.getElementsByTagName("form")[0];
    const listParent = document.getElementsByClassName("posts")[0];

    function init() {
        getArticles();
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const body = formBodyforArticle();
            createArticle(body);
        });
    }

    function getArticles() {
        fetch(`${URL_ROOT}/${endpoint}?key=${API_KEY}`)
            .then(res => {
                return res.json();
            })
            .then(resJson => {
                // if(listParent.hasChildNodes()){
                //     for(let i=0; i< listParent.childNodes.length; i++){
                //         listParent.removeChild(listParent.childNodes[i]);
                //     }
                // }
                if (listParent.hasChildNodes()) {
                    while (listParent.firstChild) {
                        listParent.removeChild(listParent.firstChild);
                    }
                }

                renderPostsArray(resJson);
            });
    }

    function createArticle(body) {
        fetch(`${URL_ROOT}/${endpoint}?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                getArticles();
                resetForm();
                return response;
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    function formBodyforArticle() {
        const title = document.getElementsByTagName("input")[0].value;
        const categories = document.getElementsByTagName("input")[1].value;
        const content = document.getElementsByTagName("textarea")[0].value;

        return {
            title: title,
            categories: categories,
            content: content
        };
    }

    function resetForm() {
        form.reset();
    }


    function renderPostsArray(data) {
        for (let i = 0; i < data.length; i++) {
            renderPostTitle(data[i].title);
        }
    }

    function renderPostTitle(title) {
        const divNode = document.createElement("div");
        const h3Node = document.createElement("h3");
        const titleNode = divNode.appendChild(h3Node);
        const text = document.createTextNode(title);
        titleNode.appendChild(text);
        divNode.appendChild(titleNode);
        listParent.appendChild(divNode);
    }

    init();
})();