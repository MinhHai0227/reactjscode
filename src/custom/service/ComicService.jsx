import axios from '../axios';

const getAllComics = async () => {
    return await axios.get('comic')
}

const findComicById = async (id) => {
    return await axios.get(`comic/${id}`)
}

const deleteComic = async (id) => {
    try { 

        return await axios.delete(`comic/${id}`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; 
    }
}

const addComic = async (comicData) => {
    try {
        const formData = new FormData();
        formData.append("title", comicData.title);
        formData.append("slug", comicData.slug);
        formData.append("description", comicData.description);
        formData.append("author", comicData.author);
        formData.append("file", comicData.file);  
        formData.append("country_id", comicData.country_id);

        if (Array.isArray(comicData.categoryIds) && comicData.categoryIds.length > 0) {
            comicData.categoryIds.forEach(category => {
                formData.append("categoryIds[]", category);
            });
        }

        const response = await axios.post("comic", formData, {
            headers: {
                "Content-Type": "multipart/form-data", 
            },
        });

        console.log("Response received:", response);
        return response;
    } catch (error) {
        // Log thông tin lỗi chi tiết từ server
        if (error.response) {
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
        } else {
            console.error("Error message:", error.message);
        }
        throw error;
    }
};

const findComicByName = async(keyword) => {
    return await axios.get(`comic/?q=${keyword}`)
}


export {deleteComic, findComicById, getAllComics, addComic, findComicByName}


