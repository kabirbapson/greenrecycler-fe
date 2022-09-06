import { api } from "./config";


export const submitMaterials = async (form) => {

    const response = await api.post('api/v1/materials', form);

    if (response.ok) {
        return response.data
    }

    return false

}