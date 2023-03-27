// function handleFileSelect() {
//     if (window.File && window.FileList && window.FileReader) {
//                 document.getElementById('result').textContent = '';
//         var files = event.target.files; //FileList object
//         var output = document.getElementById("result");
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             if (!file.type.match('image')) continue;
//             var picReader = new FileReader();
//             picReader.addEventListener("load", function (event) {
//                 var picFile = event.target;
//                 var div = document.createElement("div");
//                 div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" + "title='" + picFile.name + "'/>";
//                 console.log(file.name+'::'+file.size);
//                 output.insertBefore(div, null);
//             });
//             picReader.readAsDataURL(file);
//         }
//     } else {
//         console.log("Your browser does not support File API");
//     }
// }
// document.getElementById('files').addEventListener('change', handleFileSelect, false);
function getFile1(){
    document.getElementById("profile-image-input").click();
}
const image_input_1 = document.querySelector("#profile-image-input");
image_input_1.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#profile-image-displaying-container").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

// var bg = document.getElementById("demo");
// function x() {
//     bg.style.color = "red";
// }
// window.addEventListener("click", function(event) {
//     if (event.target == bg) {
//         bg.style.color = "black";
//     }
// });
// // function myFunction() {
//     // document.getElementById("demo").style.backgroundColor = "red";
// // }
// // onclick="myFunction()"