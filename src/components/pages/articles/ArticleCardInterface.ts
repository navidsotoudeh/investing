export interface ArticleInterface {
	id: number;
	slug: string;
	title: string;
	type: string;
	status: string;
	content: string;
	htmlContent: string;
	thumbnail: string;
	thumbnailAlt: any;
	seoTitle: any;
	seoText: any;
	keywords: any;
	source: any;
	link: any;
	publishDate: any;
	createUserId: number;
	createDate: string;
	updateDate: string;
	createUser: CreateUser;
}

export interface CreateUser {
	id: number;
	phone: string;
	password: string;
	fullname: any;
	isActive: boolean;
	createDate: string;
	updateDate: string;
}
