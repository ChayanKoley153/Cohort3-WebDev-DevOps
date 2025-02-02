import { atomFamily, selectorFamily } from 'recoil'; 
import axios from 'axios';

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily', 
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/todos/${id}`
                );
                return response.data; 
            } catch (error) {
                console.error("Error fetching todo:", error);
                return { title: "Error loading todo", description: "Please try again later." };
            }
        },
    })
});