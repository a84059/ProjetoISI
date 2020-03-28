    var info;
    window.onload(newsAPI());

    function newsAPI() {
        var url =
            "http://newsapi.org/v2/everything?" +
            "q=Environment&" +
            "from=2020-02-20&" +
            "pageSize=20&" +
            "sortBy=popularity&" +
            "apiKey=1602c707c35b423f946e6f8c60b76dde";

        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                articles = data;
            });

        function data() {
            if (articles == undefined) {
                console.log("Parsing data.");
            } else {
                console.log(articles);
                clearInterval(loadData);
                generateData(articles);
                setCardData();
            }
        }

        const loadData = setInterval(data, 1000);

        function generateData(articles) {
            let newData = articles.articles;
            this.info = newData;
            console.log(newData);
        }

        function setCardData() {
            var results = document.getElementById("news");
                for (var obj in info) {
                    //Loop through the object to get each objects data
                    results.innerHTML +=
                        "<div class='col-lg-3'>" +
                        "<div class='card'>" +
                        "<img class='card-img-top' src='" + info[obj].urlToImage + "' alt='" + info[obj].title + "'>" +
                        "<ul class='list-group list-group-flush'>" +
                        "<li class='list-group-item'><b>" + info[obj].author + "</b></li>" +
                        "<li class='list-group-item'>" + new Date(info[obj].publishedAt).toLocaleString() + "</li>" +
                        "</ul>" +
                        "<div class='card-body'>" +
                        "<h3 class='card-title mb-3'>" + info[obj].title + "</h3>" +
                        "<p class='card-text mb-4'>" + info[obj].description + "</p>" +
                        " <a href='" + info[obj].url + "'class='btn btn-primary'>Ver notícia</a>" +
                        "</div></div></div>"
                
            }
        }
    }