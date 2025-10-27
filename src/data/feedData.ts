export interface PostData {
  id: number;
  type: 'video' | 'image';
  mediaUrl: string;
  timeAgo: string;
  caption?: string;
  comments: number;
}

export const feedPosts: PostData[] = [
  { id: 1, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo1.mp4', timeAgo: '1 hora', caption: 'Momento especial só pra vocês 💋', comments: 28 },
  { id: 2, type: 'image', mediaUrl: 'https://s3.chefexpress.site/vortex/imagem1.jpeg', timeAgo: '3 horas', caption: 'Boa tarde meus amores 😘', comments: 15 },
  { id: 3, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo3.mp4', timeAgo: '6 horas', caption: 'Vídeo novo pra vocês 🔥', comments: 42 },
  { id: 4, type: 'image', mediaUrl: 'https://s3.chefexpress.site/vortex/imagem2.jpeg', timeAgo: '12 horas', comments: 18 },
  { id: 5, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo5.mp4', timeAgo: '1 dia', caption: 'Conteúdo exclusivo 💕', comments: 35 },
  { id: 6, type: 'image', mediaUrl: 'https://s3.chefexpress.site/vortex/imagem3.jpeg', timeAgo: '1 dia', comments: 22 },
  { id: 7, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo7.mp4', timeAgo: '2 dias', caption: 'Final de semana chegando 🎉', comments: 51 },
  { id: 8, type: 'image', mediaUrl: 'https://s3.chefexpress.site/vortex/imagem2.jpeg', timeAgo: '2 dias', comments: 13 },
  { id: 9, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo9.mp4', timeAgo: '3 dias', comments: 37 },
  { id: 10, type: 'image', mediaUrl: 'https://s3.chefexpress.site/vortex/imagem3.jpeg', timeAgo: '3 dias', caption: 'Memórias lindas 🌟', comments: 64 },
  { id: 11, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo11.mp4', timeAgo: '4 dias', comments: 29 },
  { id: 12, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo12.mp4', timeAgo: '5 dias', comments: 44 },
  { id: 13, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo13.mp4', timeAgo: '5 dias', comments: 31 },
  { id: 14, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo14.mp4', timeAgo: '6 dias', comments: 56 },
  { id: 15, type: 'video', mediaUrl: 'https://s3.chefexpress.site/vortex/arquivo15.mp4', timeAgo: '6 dias', comments: 39 }
];
