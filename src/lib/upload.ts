export type UploadResult = { url: string; filename: string; size: number }


export async function handleUpload(formData: FormData): Promise<UploadResult> {
const file = formData.get("file") as File | null
if (!file) throw new Error("No file provided")


// TODO: integrate Cloudinary/S3. For now, pretend we uploaded and return a local URL.
return {
url: `/uploads/${encodeURIComponent(file.name)}`,
filename: file.name,
size: file.size,
}
}

