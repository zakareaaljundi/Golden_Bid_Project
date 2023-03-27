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