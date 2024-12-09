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

const UpdateUserAPI= (fullName, password, email, phone) => {
    
}
const fetchALLUserAPI= () => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzU1YjQ3YjMzOTRhYzY0MWNjNTA1OTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM3NDk0MjgsImV4cCI6MTczMzc4NTQyOH0.DaW-Ku657KjssSIrHM3YNBvAn4-znAP14ENQgInyPZY";
    const URL_BACKEND = "/api/v1/user";
        return  axios.get(URL_BACKEND, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                },
            });
}


export {
    CreateUserAPI, UpdateUserAPI, fetchALLUserAPI
}