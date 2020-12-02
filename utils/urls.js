export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
export const MAGIC_PUBLIC_KEY =process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_15DB852EBDE47826"
export const STRIPE_PK =process.env.NEXT_PUBLIC_STRIPE_PK || "pk_live_51Hh7GSDCUMC8SpWDKPsPjuHjdQDrJ8DjJDzooFITDu9jCUSK6u6vATMk89ukFzKfWnMpjIfeTsEPtIsP0BydjDV500hBuQfL1y"
/**
 *  Given an image to returnthe Url
 *  Works for local and deployed strapi
 * @param {any} image
 */

 export const fromImageToUrl = (image)=>{
     if(!image){
         return "/vercel.svg"
     }

     if(image.url.indexOf("/")==0){
         return `${API_URL}${image.url}`
     }
     return image.url

 }