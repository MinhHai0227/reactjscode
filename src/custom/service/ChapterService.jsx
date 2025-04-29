import axios from '../axios';

const findChapterByComicId = async (id) => {
    return await axios.get(`chapters/${id}`)
}


const getAllContentChapterByChapterSlug = async (slug) => {
    return await axios.get(`chapter/${slug}`)
}   


const addChapter = async (comic_id, title, slug, price_xu,auto_unlock_time) => {
    try {

        return await axios.post(`chapters`,
            {
                comic_id,
                title,
                slug,
                price_xu,
                auto_unlock_time,
            },
           );
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; 
    }
}

const deleteChapter = async (id) => {
    try { 

        return await axios.delete(`chapters/${id}`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; 
    }
}

const uploadImg = async (chapterId, files) => {
    const formData = new FormData()

    formData.append('chapter_id', chapterId);

   Array.from(files).forEach(file => {
    formData.append('files', file)
   });

    try {
        const res = await axios.post('chapterimages',formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        return res
    } catch (error) {
        console.error('Error uploading files:', error);
        throw error;
    }
}

export {getAllContentChapterByChapterSlug,findChapterByComicId, deleteChapter, addChapter, uploadImg}