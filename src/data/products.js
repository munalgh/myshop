const listingImages = import.meta.glob('/src/assets/listing/*.png', { eager: true, import: 'default' })

export const products = [
  {
    id: 1,
    name: 'Belted Blazer',
    price: 132,
    oldPrice: 188,
    colors: ['Brown', 'Black', 'Gray'],
    discount: 30,
    category: 'Jacket',
    materials: ['Recycled Wool', 'Organic Cotton'],
    images: [
      listingImages['/src/assets/listing/Belted_blazer1.png'],
      listingImages['/src/assets/listing/Belted_blazer2.png'],
      listingImages['/src/assets/listing/Belted_blazer3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 2,
    name: 'Cable Knit Jumper',
    price: 65,
    oldPrice: 88,
    colors: ['Navy', 'Red', 'Beige'],
    discount: 30,
    category: 'Sweater',
    materials: ['Organic Cotton'],
    images: [
      listingImages['/src/assets/listing/Cable_knit_jumper1.png'],
      listingImages['/src/assets/listing/Cable_knit_jumper2.png'],
      listingImages['/src/assets/listing/Cable_knit_jumper3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 3,
    name: 'Collared Cardigan',
    price: 167,
    oldPrice: 238,
    colors: ['Camal', 'Blue', 'White'],
    discount: 30,
    category: 'Cardigan',
    materials: ['Recycled Wool'],
    images: [
      listingImages['/src/assets/listing/Collared_cardigan1.png'],
      listingImages['/src/assets/listing/Collared_cardigan2.png'],
      listingImages['/src/assets/listing/Collared_cardigan3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 4,
    name: 'Flared Low Jeans',
    price: 132,
    oldPrice: 188,
    colors: ['Blue', 'Black'],
    discount: 30,
    category: 'Jeans',
    materials: ['Recycled Wool', 'Organic Cotton'],
    images: [
      listingImages['/src/assets/listing/Flared_Low_Jeans1.png'],
      listingImages['/src/assets/listing/Flared_Low_Jeans2.png'],
      listingImages['/src/assets/listing/Flared_Low_Jeans3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 5,
    name: 'Jacquard Knit Cardigan',
    price: 65,
    oldPrice: 88,
    colors: ['Navy', 'Gray', 'Black'],
    discount: 30,
    category: 'Cardigan',
    materials: ['Organic Cotton'],
    images: [
      listingImages['/src/assets/listing/Jacquard_knit_cardigan1.png'],
      listingImages['/src/assets/listing/Jacquard_knit_cardigan2.png'],
      listingImages['/src/assets/listing/Jacquard_knit_cardigan3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 6,
    name: 'Jumper',
    price: 167,
    oldPrice: 238,
    colors: ['White', 'Black'],
    discount: 30,
    category: 'Sweater',
    materials: ['Recycled Wool'],
    images: [
      listingImages['/src/assets/listing/Jumper1.png'],
      listingImages['/src/assets/listing/Jumper2.png'],
      listingImages['/src/assets/listing/Jumper3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 7,
    name: 'Loose Fit Cardigan',
    price: 132,
    oldPrice: 188,
    colors: ['Chocolate', 'Red'],
    discount: 30,
    category: 'Cardigan',
    materials: ['Recycled Wool', 'Organic Cotton'],
    images: [
      listingImages['/src/assets/listing/Loose_fit_cardigan1.png'],
      listingImages['/src/assets/listing/Loose_fit_cardigan2.png'],
      listingImages['/src/assets/listing/Loose_fit_cardigan3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 8,
    name: 'Oversized Jumper',
    price: 65,
    oldPrice: 88,
    colors: ['Navy', 'Pink'],
    discount: 30,
    category: 'Jumper',
    materials: ['Organic Cotton'],
    images: [
      listingImages['/src/assets/listing/Oversized_jumper1.png'],
      listingImages['/src/assets/listing/Oversized_jumper2.png'],
      listingImages['/src/assets/listing/Oversized_jumper3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  },
  {
    id: 9,
    name: 'Wide Ultra High Jeans',
    price: 167,
    oldPrice: 238,
    colors: ['Blue', 'Black', 'White'],
    discount: 30,
    category: 'Jeans',
    materials: ['Recycled Wool'],
    images: [
      listingImages['/src/assets/listing/Wide_Ultra_High_Jeans1.png'],
      listingImages['/src/assets/listing/Wide_Ultra_High_Jeans2.png'],
      listingImages['/src/assets/listing/Wide_Ultra_High_Jeans3.png']
    ],
    title: 'Part shirt, part jacket, all style.',
    description: `Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.`,
    modelSize: 'Model is 6′2″, wearing a size M'
  }
]
