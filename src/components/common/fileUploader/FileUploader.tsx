import React from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import Cookies from 'js-cookie';
interface IProps {
	onFileUpload: (file: File) => void;
	onChange: (thumbnailPath: string) => void;
	sendFileIsLoading: boolean;
	value: string;
}

const FileUploader: React.FC<IProps> = ({ onFileUpload, sendFileIsLoading, onChange, value }) => {
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			onFileUpload(files[0]);

			const formData = new FormData();
			formData.append('file', files[0]);
			axios
				.post('https://investing-nta8.onrender.com/file/image', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${Cookies.get('investing-accessToken')}`,
					},
				})
				.then(function (response) {
					const filepath = response?.data?.filepath;
					onChange(filepath);
				})
				.catch(function (error) {
					console.log('error', error);
				});
		}
	};

	return (
		<div className="flex w-full items-center justify-between">
			<label className="flex w-1/3 items-center justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:cursor-pointer hover:bg-blue-700">
				<div>{sendFileIsLoading ? <ClipLoader size={30} color="#f5f5f5" /> : 'upload'}</div>
				<input type="file" className="hidden" disabled={sendFileIsLoading} onChange={handleFileChange} />
			</label>
			<span className="fornt-base w-1/3 border">thumbnail path is : {value}</span>
		</div>
	);
};
export default FileUploader;
