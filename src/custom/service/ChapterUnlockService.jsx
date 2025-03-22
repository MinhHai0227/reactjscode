import axios from '../axios';

const checkUserUnlock = async (chapterId) => {
    const token = localStorage.getItem('token')
    if(!token){
        return;
    }
    const res =  await axios.get(`chapterunlocks/${chapterId}`,{
        headers: {Authorization: `Bearer ${token}`}
    })

    return res;
}

const unlockChapter = async (chapterId) => {
    const token = localStorage.getItem('token');  // Lấy token từ localStorage
    if (!token) {
        console.error('No token found');  // Nếu không có token, thông báo lỗi
        return;
    }

    try {
        
        const res = await axios.post(`chapterunlocks/${chapterId}`, null, {
            headers: { Authorization: `Bearer ${token}` }  
        });
        return res;  
    } catch (error) {
        console.error('Error unlocking chapter:', error);
        throw error;  // Ném lỗi nếu có lỗi xảy ra
    }
}


export {checkUserUnlock, unlockChapter}