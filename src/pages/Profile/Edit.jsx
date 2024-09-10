import React, { useState } from 'react'
import { getMyInfo, updateProfile } from '../../api/auth'
import { useQuery, useMutation } from "@tanstack/react-query"
import defaultPfP from "../../images/defaultPfP.jpg";
import { toast } from 'react-toastify';
const Edit = () => {
  const [image, setImage] = useState('')
  
  const { data, isPending } = useQuery({
    queryKey: ["getMyInfo"],
    queryFn: getMyInfo,
  });
  const {mutate: editPfp} = useMutation({
    mutationKey: ["editPfp"],
    mutationFn: ()=> updateProfile(image),
  })
  function handleSubmit(e){
    e.preventDefault(); 
    editPfp()
  }
  function displayPicture(e) {
    if (e.target.files[0]) {
      console.log(e.target.files[0])
    setImage(e.target.files[0])
    var reader = new FileReader();
    
    reader.onload = function (e) {
      document.getElementById('the-picture').setAttribute('src', e.target.result);
    };
    
    reader.readAsDataURL(e.target.files[0]);
  }
 }

  return (
    <form onSubmit={handleSubmit} className='h-full flex flex-col items-center justify-center' >
    {data ? (
            <div className="flex z-50 flex-col items-center gap-5 border rounded-md">
              <div className='relative'>
                  <label className='text-3xl bg-accent absolute rounded-lg font-extrabold p-1 w-full h-full opacity-0 hover:opacity-70 flex items-center justify-center' htmlFor="img">
                    
                  +
                  <input required accept="image/*, image/jpeg" onChange={displayPicture} className='hidden' id='img' type="file" />
                  </label>

                <img
                id="the-picture"
                  className="w-[300px] max-h-[500px] rounded-t-md"
                  src={
                    // image ||
                    (data.image
                    ? "https://react-bank-project.eapi.joincoded.com/" +
                    data.image
                    : defaultPfP)
                  } // the + here will add the image as the endpoint to the url
                  alt={`${data.username || ""}'s img`}
                  />
              </div>
              <div className='flex flex-col px-5 py-6 gap-5'>

                <h1 className="text-4xl font-extrabold text-center">{data.username}</h1>
                <h1>Balance: ${data.balance}</h1>
                <button  className='bg-accent p-2 rounded-md' type="submit">Save Changes</button>
              </div>

            </div>
          ) : (
            "Loading"
          )}
    
    </form>
  )
}

export default Edit