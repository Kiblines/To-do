import { useState } from "react";

function useNewId(firstId: number) {
const [id, setId] = useState(firstId);

const getNewId = () => {
    setId(id+1);
    console.log(id);
    
};
return getNewId;

}
export default useNewId;
