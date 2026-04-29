export const getSummerData = async() =>{
    const res = await fetch("https://a-08-summer-store.vercel.app/db.json");
    const data = await res.json();
    return data
}