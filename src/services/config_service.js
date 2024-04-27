import axios from "axios"
// const token = localStorage.getItem('token');

let token ='';
if(localStorage.getItem('USER')){
    token =JSON.parse(localStorage.getItem('USER'))?.accessToken
}
// console.log('lllllllllllllllllllllllllxxxxxxxxxxxxx',token)

// console.log('`Bearer ${token}`',`Bearer ${token}`)

export const http = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api",
    headers: {
        tokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0",
        Authorization: `Bearer`+` `+`${token}`
        
    },
    timeout: 5000
});


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hvbmhhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidHJtdGhhbmgyMnNzMDg5NUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsInRybXRoYW5oMjJzczA4OTVAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE3MTM2NDg0MDQsImV4cCI6MTcxMzY1MjAwNH0.oix-wMTFqiJ5MaiTzJlNZQwH1OeGnQyD0Yg3TEwbG3Y