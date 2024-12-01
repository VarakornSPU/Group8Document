import React, { createContext, useState } from 'react';

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const addFiles = (file) => {
        setUploadedFiles((prevFiles) => [...prevFiles, file]);
    };

    const removeFile = (fileId) => {
        setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
    };

    return (
        <FileContext.Provider value={{ uploadedFiles, addFiles, removeFile }}>
            {children}
        </FileContext.Provider>
    );
};
