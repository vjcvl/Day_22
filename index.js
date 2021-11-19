fetch("https://restcountries.com/v3.1/all").then((res) => {
    console.log(res);
    return res.json();
}).then((resData) => {
    let box = document.getElementById("box");
    resData.forEach(element => {
        console.log(element);
        let con = document.createElement("div");
        
        let mod = document.createElement('div3');
        let modCon = document.createElement('div4');
        
        
        
        // creating image element and add to the box
        let img = document.createElement("img");
        img.src = element.flags.png;
        con.appendChild(img);
        // country names and details
        let cou = document.createElement("div2");

        cou.innerText = `Country Name: ${
            element.name.common
        }\n Code No: ${
            element.cca2
        }\n`;
        con.appendChild(cou);
        // Get Weather button creating
    

        box.appendChild(con);

    });
    console.log(resData.length);
  

}).catch((rej) => {
    console.error(`${rej} Something went wrong!!!`);
})
