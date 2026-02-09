
export interface SnowedInNumber {
  apartment: number;
  room: number;
  bed: number;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: number;
}

export interface User {
  id: string;
  name: string;
  password?: string;
  snowNumber: SnowedInNumber;
  avatar: string;
  isAdmin?: boolean;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userSnowNumber: string;
  imageUrl: string;
  caption: string;
  timestamp: number;
  likes: number;
  likedByMe?: boolean;
  comments: Comment[];
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  text: string;
  timestamp: number;
}

export type View = 'feed' | 'chat-list' | 'chat-detail' | 'profile' | 'post' | 'search';

export const formatSnowNumber = (num: SnowedInNumber): string => {
  return `Apt ${num.apartment} - R${num.room} - B${num.bed}`;
};

export const parseSnowedInID = (id: string): SnowedInNumber | null => {
  if (id.length < 4) return null;
  
  const bedStr = id.slice(-2);
  const roomStr = id.slice(-3, -2);
  const aptStr = id.slice(0, id.length - 3);

  const apartment = parseInt(aptStr);
  const room = parseInt(roomStr);
  const bed = parseInt(bedStr);

  if (isNaN(apartment) || isNaN(room) || isNaN(bed)) return null;
  if (apartment < 1 || apartment > 12) return null;
  
  const maxRooms = [2, 5, 8, 11].includes(apartment) ? 5 : 4;
  if (room < 1 || room > maxRooms) return null;
  if (bed < 1 || bed > 2) return null;

  return { apartment, room, bed };
};
