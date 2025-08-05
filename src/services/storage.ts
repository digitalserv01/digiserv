import { storage } from '@/lib/firebase';
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

/**
 * Uploads a base64 encoded image to Firebase Storage.
 * @param base64Image The base64 encoded image string (e.g., from a data URI).
 * @param folder The folder in the storage bucket to upload to.
 * @returns The public download URL of the uploaded image.
 */
export async function uploadImage(base64Image: string, folder: string): Promise<string> {
    if (!base64Image.startsWith('data:image')) {
        throw new Error('Invalid image data URI.');
    }

    const imageType = base64Image.split(';')[0].split('/')[1];
    const imageData = base64Image.split(',')[1];
    const fileName = `${uuidv4()}.${imageType}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);

    try {
        const snapshot = await uploadString(storageRef, imageData, 'base64');
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image to Firebase Storage:", error);
        throw new Error("Image upload failed.");
    }
}
