// var btn_1 = document.getElementById("first-input");
// var btn_2 = document.getElementById("second-input");
// btn_1.addEventListener("click", function() {
//     getFile();
// }
// btn_2.addEventListener("click", function() {
//     getFile();
// }

function getFile1(){
    document.getElementById("real-estate-first-input").click();
}
const image_input_1 = document.querySelector("#real-estate-first-input");
image_input_1.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#real-estate-first-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

function getFile2(){
    document.getElementById("real-estate-second-input").click();
}
const image_input_2 = document.querySelector("#real-estate-second-input");
image_input_2.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#real-estate-second-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile3(){
    document.getElementById("real-estate-third-input").click();
}
const image_input_3 = document.querySelector("#real-estate-third-input");
image_input_3.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#real-estate-third-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile4(){
    document.getElementById("real-estate-fourth-input").click();
}
const image_input_4 = document.querySelector("#real-estate-fourth-input");
image_input_4.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#real-estate-fourth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile5(){
    document.getElementById("real-estate-fifth-input").click();
}
const image_input_5 = document.querySelector("#real-estate-fifth-input");
image_input_5.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#real-estate-fifth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile6(){
    document.getElementById("electronic-first-input").click();
}
const image_input_6 = document.querySelector("#electronic-first-input");
image_input_6.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#electronic-first-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

function getFile7(){
    document.getElementById("electronic-second-input").click();
}
const image_input_7 = document.querySelector("#electronic-second-input");
image_input_7.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#electronic-second-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile8(){
    document.getElementById("electronic-third-input").click();
}
const image_input_8 = document.querySelector("#electronic-third-input");
image_input_8.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#electronic-third-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile9(){
    document.getElementById("electronic-fourth-input").click();
}
const image_input_9 = document.querySelector("#electronic-fourth-input");
image_input_9.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#electronic-fourth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile10(){
    document.getElementById("electronic-fifth-input").click();
}
const image_input_10 = document.querySelector("#electronic-fifth-input");
image_input_10.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#electronic-fifth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

function getFile11(){
    document.getElementById("fashion-first-input").click();
}
const image_input_11 = document.querySelector("#fashion-first-input");
image_input_11.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#fashion-first-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

function getFile12(){
    document.getElementById("fashion-second-input").click();
}
const image_input_12 = document.querySelector("#fashion-second-input");
image_input_12.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#fashion-second-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile13(){
    document.getElementById("fashion-third-input").click();
}
const image_input_13 = document.querySelector("#fashion-third-input");
image_input_13.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#fashion-third-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile14(){
    document.getElementById("fashion-fourth-input").click();
}
const image_input_14 = document.querySelector("#fashion-fourth-input");
image_input_14.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#fashion-fourth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile15(){
    document.getElementById("fashion-fifth-input").click();
}
const image_input_15 = document.querySelector("#fashion-fifth-input");
image_input_15.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#fashion-fifth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

function getFile16(){
    document.getElementById("cars-first-input").click();
}
const image_input_16 = document.querySelector("#cars-first-input");
image_input_16.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#cars-first-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

function getFile17(){
    document.getElementById("cars-second-input").click();
}
const image_input_17 = document.querySelector("#cars-second-input");
image_input_17.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#cars-second-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile18(){
    document.getElementById("cars-third-input").click();
}
const image_input_18 = document.querySelector("#cars-third-input");
image_input_18.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#cars-third-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile19(){
    document.getElementById("cars-fourth-input").click();
}
const image_input_19 = document.querySelector("#cars-fourth-input");
image_input_19.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#cars-fourth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function getFile20(){
    document.getElementById("cars-fifth-input").click();
}
const image_input_20 = document.querySelector("#cars-fifth-input");
image_input_20.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#cars-fifth-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});