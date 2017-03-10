export interface Micropost {
  id: number;
  content: string;
  user: User;
  createdAt: number;
  isMyPost?: boolean;
}

export interface User {
  id: string | number;
  email?: string;
  name?: string;
  userStats?: UserStats;
  isMyself?: boolean;
  isFollowedByMe?: boolean;
  avatarHash?: string;
}

export interface RelatedUser extends User {
  relationshipId: number;
}

export interface UserStats {
  micropostCnt: number;
  followingCnt: number;
  followerCnt: number;
}

export class Product {
  constructor(
  id: number,
  name: string,
  price: number,
  description: string,
  pieces: number,
  barcode: number
){}
}

