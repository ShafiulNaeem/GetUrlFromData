function getURL() {
    var url = document.getElementById("geturl").value;

    if (url == '' || url == null) {
        alert('Please Insert Your URL.')
    } else {
        let checkJsonExtension = url.includes(".json")
        console.log(checkJsonExtension)
        if (checkJsonExtension == false){
            url = url + '.json'
        }
        console.log(url)

        let html = '';
        // const url = 'https://www.cotonly.com/products/sprout-girls-long-sleeve-t-shirt.json';

        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                let getData = data.product.variants;
                console.log('All Product Data');
                console.log(getData);
                getData.forEach((sizeData,index) => {
                    console.log(sizeData.option2)
                    let htmlSegment = `<l1 class="username">
                            <h4 style="color: white">${index + 1}. ${sizeData.option2} </h4>
                        </l1>`;

                    html += htmlSegment;
                });

                let container = document.querySelector('.container');
                container.innerHTML = html;

            })
            .catch(function (error) {
                console.log(error);
            });

    }

}
