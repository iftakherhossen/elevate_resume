import { useEffect, useState } from "react";

const useFunctions = () => {
    const handleSaveData = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data));
    }

    return {
        handleSaveData,
    };
};

export default useFunctions;