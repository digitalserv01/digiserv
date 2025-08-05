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
        throw new Error('Invalid image data URI. The string must start with "data:image".');
    }

    const imageParts = base64Image.split(',');
    if (imageParts.length !== 2) {
        throw new Error('Invalid image data URI format. Expected "data:<mimetype>;base64,<data>".');
    }
    
    const mimeType = imageParts[0].split(';')[0].split(':')[1];
    const imageType = mimeType.split('/')[1];
    const imageData = imageParts[1];
    const fileName = `${uuidv4()}.${imageType}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);

    try {
        const snapshot = await uploadString(storageRef, imageData, 'base64', { contentType: mimeType });
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error: any) {
        console.error("Error uploading image to Firebase Storage:", error);
        // Provide a more descriptive error message
        throw new Error(`Image upload failed: ${error.message}. This might be due to Firebase Storage security rules. Please check your rules in the Firebase console to ensure they allow writes to the '${folder}/' path.`);
    }
}
