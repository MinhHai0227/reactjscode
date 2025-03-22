import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { uploadImg } from "../custom/service/ChapterService";

function ChapterImgAdminPage() {

const { register, handleSubmit, formState: { errors }, setValue } = useForm();
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');

const {chapter_id} = useParams()

const onSubmit = async (data) => {
   const {chapter_id, files} = data;
   if(!files || files.length === 0){
    setMessage('No files uploaded!');
    return;
   }
   try {
    setLoading(true);
    const result = await uploadImg(chapter_id, files); 
    setMessage('Images uploaded successfully!');
    console.log(result);  
  } catch (error) {
    setMessage('Error uploading images!');
  } finally {
    setLoading(false);
  }
};

return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <h1 className="font-bold text-lg mb-4">Upload Chapter Images</h1>

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        {/* Chapter ID */}       
          <input 
            type="hidden" 
            value={chapter_id}
            {...register("chapter_id", { required: "Chapter ID is required" })} 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          

        {/* File upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Images</label>
          <input 
            type="file" 
            {...register("files", { required: "At least one file is required" })} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            multiple
          />
          {errors.files && <p className="text-red-500 text-sm">{errors.files.message}</p>}
        </div>

        {/* Submit button */}
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          {loading ? 'Uploading ...' : 'UploadImg'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ChapterImgAdminPage;
