async function uploadImage(event) {

    if (!event.target.image.files[0]) {
        return false;
    }

    const formData = new FormData();
    formData.append("image", event.target.image.files[0]);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });
        return await response.json();

    } catch (error) {
        console.error(error);
        return false;
    };
};

export default uploadImage;