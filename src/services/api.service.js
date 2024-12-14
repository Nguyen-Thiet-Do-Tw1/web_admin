import axios from "./axio.customize"

const CreateUserAPI= (fullName, password, email, phone) => {
    const URL_BACKEND = "/api/v1/user";
        const data = {
            fullName: fullName,
            password: password,
            email: email,
            phone: phone
        };
        return  axios.post(URL_BACKEND, data);
}

const UpdateUserAPI= (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
        const data = {
            _id: _id,
            fullName: fullName,
            phone: phone
        };
        return  axios.put(URL_BACKEND, data);
}
const fetchALLUserAPI= (current,pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
        return  axios.get(URL_BACKEND);
}
const deleteUserAPI= (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
        return  axios.delete(URL_BACKEND);
}

const handleUploadFile= (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file)
        return  axios.post(URL_BACKEND, bodyFormData, {
                headers: {
                    "upload-type": folder,
                    "Content-Type": "multipart/form-data", 
                },
            });
}
const UpdateUserAvataAPI= (avatar,_id, fullName, phone ) => {
    const URL_BACKEND = "/api/v1/user";
        const data = {
            _id: _id,
            avatar: avatar,
            fullName: fullName,
            phone: phone
        };
        return  axios.put(URL_BACKEND, data);
}
const registerUserAPI= (fullName, password, email, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
        const data = {
            fullName: fullName,
            password: password,
            email: email,
            phone: phone
        };
        return  axios.post(URL_BACKEND, data);
}
const loginUserAPI= (email, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
        const data = {
            username: email,
            password: password,
            // delay: 2000
        };
        return  axios.post(URL_BACKEND, data);
}

const getAccountAPI= () => {
    const URL_BACKEND = "/api/v1/auth/account";
        return  axios.get(URL_BACKEND);
}
const logoutAPI= () => {
    const URL_BACKEND = "/api/v1/auth/logout";
        return  axios.post(URL_BACKEND);
}

const fetchALLProductAPI= (current,pageSize) => {
    const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`;
        return  axios.get(URL_BACKEND);
}
const CreateProductAPI= (thumbnail,slider, mainText, author, price, sold, quantity, category) => {
    const URL_BACKEND = "/api/v1/book";
        const data = {
            thumbnail : thumbnail, 
            slider: slider,
            mainText : mainText, 
            author: author, 
            price: price, 
            sold: sold,
            quantity: quantity, 
            category: category
        };
        return  axios.post(URL_BACKEND, data);
}
const deleteProductAPI= (_id) => {
    const URL_BACKEND = `/api/v1/book/${_id}`;
        return  axios.delete(URL_BACKEND);
}


export {
    CreateUserAPI, UpdateUserAPI, fetchALLUserAPI, deleteUserAPI,
    handleUploadFile, UpdateUserAvataAPI, registerUserAPI, loginUserAPI,
    getAccountAPI,logoutAPI, fetchALLProductAPI, CreateProductAPI, deleteProductAPI
}