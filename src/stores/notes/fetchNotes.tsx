import React from "react";
import { API_ENDPOINTS } from "../../config/apiConfig";
import axios from "../../config/axiosConfig";

export const fetchNotes = async (project_id:number) => {

    const response = await axios.get(
        API_ENDPOINTS.fetchNotes + project_id + "/notes/",
        
        {
            withCredentials: true,
        },
    );

    console.log(response.data);

    const unpackedResponse = [];

    for (let i = 0; i < response.data.length; i++) {
        const obj = response.data[i];
        
        // add the question and answer to the unpackedResponse array
        unpackedResponse.push({
            id: obj.id,
            name: obj.name,
            content: obj.content,
            active: false
        });
    }

    return unpackedResponse;

};