const axiosParams = ({ method, route, headers = null, body = null}) => {
    return {
        method: method,
        url: route,
        headers: { "Content-Type": 'multipart/form-data' },
        data: body,
    }
}


const UploadServices = {
    uploadDocument : (document)=>{
        return axiosParams({ method: 'POST', route: '/api/v1/upload/', body : document});
    },
    getDocument : ()=>{
        return axiosParams({ method: 'GET', route: '/api/v1/upload/'}); 
    }
}

export default UploadServices;