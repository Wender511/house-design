import ProductBanner from '/public/images/banner/product-banner.jpg';

import ProductsList from '@/components/Products/ProductsList';
import Banner from 'components/common/Banner/Banner';
const productsMock = [
  {
    name: 'Sofa',
    price: 2299000,
    salePrice: 1839000,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/07/Armchair-Royal-mau-do-204117-300x200.jpg',
    description: 'A comfortable sofa for your living room.',
    category: 'Interior',
  },
  {
    name: 'Coffee Table',
    price: 3432000,
    salePrice: 2745600,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-4-300x200.jpg',
    description: 'A stylish coffee table for your home.',
    category: 'Interior',
  },
  {
    name: 'Bookshelf',
    price: 1739000,
    salePrice: 1391200,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/07/Armchair-Royal-mau-do-204117-300x200.jpg',
    description: 'A bookshelf to store and display your books and decor.',
    category: 'Interior',
  },
  {
    name: 'Bed',
    price: 5209000,
    salePrice: 4166400,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/08/GHE-RELAX-CHAIR-LEONARD-LEAT-META-37528P-1-300x194.jpg',
    description: "A comfortable bed for a good night's sleep.",
    category: 'Interior',
  },
  {
    name: 'Dining Table',
    price: 1099000,
    salePrice: 1099000,
    image: 'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-BOC-VAI-MAU-XANH-MB833-21-300x200.jpg',
    description: 'A sturdy dining table for your home.',
    category: 'Interior',
  },
  {
    name: 'Office Chair',
    price: 1529000,
    salePrice: 1223200,
    image: 'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-MB-23-03-1-300x200.jpg',
    description: 'A comfortable chair for your office space.',
    category: 'Interior',
  },
  {
    name: 'Wardrobe',
    price: 3879000,
    salePrice: 3099200,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/08/GHE-RELAX-CHAIR-LEONARD-LEAT-META-37528P-1-300x194.jpg',
    description: 'A spacious wardrobe to store your clothes and accessories.',
    category: 'Interior',
  },
  {
    name: 'TV Stand',
    price: 2759000,
    salePrice: 2207200,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/07/Armchair-Royal-mau-do-204117-300x200.jpg',
    description: 'A stand for your TV and media devices.',
    category: 'Interior',
  },
  {
    name: 'Side Table',
    price: 1019000,
    salePrice: 1019000,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-4-300x200.jpg',
    description: 'A small table to place beside your sofa or bed.',
    category: 'Interior',
  },
  {
    name: 'Curtains',
    price: 4029000,
    salePrice: 3223200,
    image: 'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-BOC-VAI-MAU-XANH-MB833-21-300x200.jpg',
    description: "Beautiful curtains to enhance your room's decor.",
    category: 'Interior',
  },
  {
    name: 'Rug',
    price: 4029000,
    salePrice: 1759200,
    image: 'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-MB-23-03-1-300x200.jpg',
    description: 'A soft and cozy rug to add warmth to your floor.',
    category: 'Interior',
  },
  {
    name: 'Desk',
    price: 2199000,
    salePrice: 1759200,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-4-300x200.jpg',
    description: 'A functional desk for your home office or study area.',
    category: 'Interior',
  },
  {
    name: 'Accent Chair',
    price: 1689000,
    salePrice: 1351200,
    image: 'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-BOC-VAI-MAU-XANH-MB833-21-300x200.jpg',
    description: "A stylish chair to enhance your room's decor.",
    category: 'Interior',
  },
  {
    name: 'Wall Art',
    price: 4029000,
    salePrice: 4029000,
    image: 'https://nhaxinh.com/wp-content/uploads/2022/08/GHE-RELAX-CHAIR-LEONARD-LEAT-META-37528P-1-300x194.jpg',
    description: 'Beautiful artwork to adorn your walls.',
    category: 'Interior',
  },
];

const Products = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Banner
        background={ProductBanner}
        title='Products'
        height='large'
        overlay
      />
      <ProductsList products={productsMock} />
    </div>
  );
};

export default Products;
