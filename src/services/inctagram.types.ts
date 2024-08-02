export interface GetPostsResponse {
    totalCount: number;
    pageSize: number;
    items: Item[];
    totalUsers: number;
  }

  export interface GetPostsArgs {
    pageSize: number
  }
  
  export interface Item {
    id: number;
    userName: string;
    description: string;
    location?: any;
    images: Image[];
    createdAt: string;
    updatedAt: string;
    ownerId: number;
    owner: Owner;
    likesCount: number;
    isLiked: boolean;
    avatarOwner?: string;
  }
  
  export interface Owner {
    firstName?: string;
    lastName?: string;
  }
  
  export interface Image {
    url: string;
    width: number;
    height: number;
    fileSize: number;
    createdAt: string;
    uploadId: string;
  }