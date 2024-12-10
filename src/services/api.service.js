import axios from "./axio.customize"

const CreateUserAPI= (fullName, password, email, phone) => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzU1YjQ3YjMzOTRhYzY0MWNjNTA1OTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM3NDk0MjgsImV4cCI6MTczMzc4NTQyOH0.DaW-Ku657KjssSIrHM3YNBvAn4-znAP14ENQgInyPZY";
    const URL_BACKEND = "/api/v1/user";
        const data = {
            fullName: fullName,
            password: password,
            email: email,
            phone: phone
        };
        return  axios.post(URL_BACKEND, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                },
            });
}

const UpdateUserAPI= (_id, fullName, phone) => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzU1YjQ3YjMzOTRhYzY0MWNjNTA1OTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM3NDk0MjgsImV4cCI6MTczMzc4NTQyOH0.DaW-Ku657KjssSIrHM3YNBvAn4-znAP14ENQgInyPZY";
    const URL_BACKEND = "/api/v1/user";
        const data = {
            _id: _id,
            fullName: fullName,
            phone: phone
        };
        return  axios.put(URL_BACKEND, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                },
            });
}
const fetchALLUserAPI= (current,pageSize) => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzU1YjQ3YjMzOTRhYzY0MWNjNTA1OTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM3NDk0MjgsImV4cCI6MTczMzc4NTQyOH0.DaW-Ku657KjssSIrHM3YNBvAn4-znAP14ENQgInyPZY";
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
        return  axios.get(URL_BACKEND, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                },
            });
}
const deleteUserAPI= (_id) => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzU1YjQ3YjMzOTRhYzY0MWNjNTA1OTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM3NDk0MjgsImV4cCI6MTczMzc4NTQyOH0.DaW-Ku657KjssSIrHM3YNBvAn4-znAP14ENQgInyPZY";
    const URL_BACKEND = `/api/v1/user/${_id}`;
        return  axios.delete(URL_BACKEND, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                },
            });
}

const handleUploadFile= (file, folder) => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzU1YjQ3YjMzOTRhYzY0MWNjNTA1OTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM3NDk0MjgsImV4cCI6MTczMzc4NTQyOH0.DaW-Ku657KjssSIrHM3YNBvAn4-znAP14ENQgInyPZY";
    const URL_BACKEND = `/api/v1/file/upload`;
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file)
        return  axios.post(URL_BACKEND, bodyFormData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                    "upload-type": folder,
                    "Content-Type": "multipart/form-data", 
                },
            });
}
const UpdateUserAvataAPI= (avatar,_id, fullName, phone ) => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzU1YjQ3YjMzOTRhYzY0MWNjNTA1OTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM3NDk0MjgsImV4cCI6MTczMzc4NTQyOH0.DaW-Ku657KjssSIrHM3YNBvAn4-znAP14ENQgInyPZY";
    const URL_BACKEND = "/api/v1/user";
        const data = {
            _id: _id,
            avatar: avatar,
            fullName: fullName,
            phone: phone
        };
        return  axios.put(URL_BACKEND, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                },
            });
}


export {
    CreateUserAPI, UpdateUserAPI, fetchALLUserAPI, deleteUserAPI,
    handleUploadFile, UpdateUserAvataAPI
}