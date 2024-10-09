import React, { useState, useEffect } from 'react';
import FullScreenViewer from './FullScreenViewer';
import './Photogallery.css';
import NavigationBar from './nav';

const ACCESS_TOKEN = '';
const FOLDER_PATH = '/monarcaoutdoor-dropbox/monarca_images'; // Dropbox folder path

const DropboxFileFetcher = ({ setImages, setError }) => {
    const fetchFilesFromDropbox = async () => {
        const url = 'https://api.dropboxapi.com/2/files/list_folder';
        const headers = {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        };

        const body = {
            path: FOLDER_PATH,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.error_summary}`);
            }

            const data = await response.json();
            console.log(data);

            const files = data.entries
                .filter(entry => entry['.tag'] === 'file') // Only get files
                .map(file => file.path_lower);

            // Get URLs for each file
            const urls = await Promise.all(files.map(fetchFileUrl));

            setImages(urls);
        } catch (error) {
            console.error('Error fetching files from Dropbox:', error);
            setError('Failed to fetch files from Dropbox');
        }
    };

    const fetchFileUrl = async (path) => {
        const downloadUrl = 'https://content.dropboxapi.com/2/files/download';
        const headers = {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Dropbox-API-Arg': JSON.stringify({
                path: path,
            }),
        };

        try {
            const response = await fetch(downloadUrl, {
                method: 'POST',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const fileBlob = await response.blob();
            return URL.createObjectURL(fileBlob);
        } catch (error) {
            console.error('Error fetching file from Dropbox:', error);
            return null;
        }
    };

    useEffect(() => {
        fetchFilesFromDropbox();
    }, []);

    return null; // No UI for this component
};

const Photogallery = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

    const handleCloseViewer = () => {
        setCurrentIndex(null);
    };

    return (
        <>
            <NavigationBar />
            <div className="photo-gallery">
                {error && <p className="error">{error}</p>}
                <DropboxFileFetcher setImages={setImages} setError={setError} />
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="gallery-image"
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>

                {currentIndex !== null && (
                    <FullScreenViewer
                        images={images}
                        currentIndex={currentIndex}
                        onClose={handleCloseViewer}
                        setCurrentIndex={setCurrentIndex}
                    />
                )}
            </div>
        </>
    );
};

export default Photogallery;

