export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'perfect-pho',
    title: 'The Art of Perfect Pho',
    excerpt: 'Discover the secrets behind creating the perfect bowl of Vietnamese Pho.',
    content: 'Pho is more than just a soup—it\'s a cultural icon of Vietnam. The journey to a perfect bowl starts with the broth, clear yet rich with the essence of beef and toasted spices. At Madame Mai, we simmer our bones for over 24 hours to achieve that crystal clarity and deep umami that our customers love.',
    image: 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
    date: 'March 15, 2026',
  },
  {
    id: '2',
    slug: 'laksa-origins',
    title: 'The Origins of Laksa',
    excerpt: 'Exploring the rich history and cultural significance of this beloved Southeast Asian dish.',
    content: 'Laksa represents the beautiful fusion of Chinese and Malay cuisines. Our version pays homage to the creamy, spicy coconut-based broths of the Peranakan culture, balanced with the freshest local Australian ingredients.',
    image: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
    date: 'March 10, 2026',
  },
  {
    id: '3',
    slug: 'hu-tieu-secrets',
    title: 'Secrets of the Perfect Hu Tieu',
    excerpt: 'Exploring the delicate balance of flavors in Southern Vietnam\'s most beloved breakfast soup.',
    content: 'Hu Tieu is more than just a noodle soup in Southern Vietnam—it is a symbol of versatility and the rich tapestry of flavors that define the Mekong Delta. Unlike the robust Pho of the North, Hu Tieu is known for its clear, delicate broth and the abundance of sweet pork and fresh seafood. The key to our Hu Tieu lies in the clarity of the broth, achieved by simmering pork bones for hours with dried squid and special aromatic roots.',
    image: 'linear-gradient(135deg, #4a7c59 0%, #6b9080 100%)',
    date: 'March 20, 2026',
  },
  {
    id: '4',
    slug: 'madame-mai-journey',
    title: 'Madame Mai\'s Journey',
    excerpt: 'From the bustling streets of Saigon to the heart of Adelaide.',
    content: 'The story of Madame Mai began in a small kitchen in Saigon, where recipes were passed down from grandmother to granddaughter. Today, we bring those same authentic flavors to your table here in Adelaide, preserved with love and frozen for your convenience.',
    image: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
    date: 'March 25, 2026',
  },
];
