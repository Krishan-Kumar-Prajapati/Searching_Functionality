// I have to use API, It was not mentioned So i used Array of ClothingItems
const clothingItems = [
    { id: 1, name: 'Red T-shirt', description: 'Bright red t-shirt made from soft, breathable cotton.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Blue Jeans', description: 'Classic blue jeans with a modern fit and durable fabric.', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Green Jacket', description: 'Stylish green jacket with a warm lining for cooler weather.', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Black Shoes', description: 'Elegant black shoes perfect for formal occasions.', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'White Hat', description: 'Chic white hat designed to complement any outfit.', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Yellow Scarf', description: 'Vibrant yellow scarf to add a pop of color to your ensemble.', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Gray Sweatshirt', description: 'Comfortable gray sweatshirt ideal for lounging or casual wear.', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Brown Belt', description: 'Classic brown belt with a sleek buckle for a refined look.', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Purple Gloves', description: 'Warm purple gloves that provide both style and comfort.', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Orange Socks', description: 'Fun and colorful orange socks to brighten up your day.', image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Pink Blouse', description: 'Elegant pink blouse suitable for both work and casual outings.', image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Beige Shorts', description: 'Casual beige shorts perfect for a summer day out.', image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Navy Blazer', description: 'Timeless navy blazer that adds sophistication to any outfit.', image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Charcoal Pants', description: 'Versatile charcoal pants suitable for both formal and casual settings.', image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Teal Backpack', description: 'Stylish teal backpack with ample space for all your essentials.', image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Coral Tank Top', description: 'Bright coral tank top perfect for layering or wearing alone.', image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Olive Cargo Pants', description: 'Functional olive cargo pants with multiple pockets for convenience.', image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Maroon Hoodie', description: 'Cozy maroon hoodie with a spacious front pocket.', image: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Tan Boots', description: 'Durable tan boots suitable for all-day wear.', image: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Sky Blue Dress', description: 'Elegant sky blue dress perfect for special occasions.', image: 'https://via.placeholder.com/150' },
    { id: 21, name: 'Cream Sweater', description: 'Soft cream sweater ideal for cooler weather.', image: 'https://via.placeholder.com/150' },
    { id: 22, name: 'Teal Dress Shirt', description: 'Sharp teal dress shirt ideal for business settings.', image: 'https://via.placeholder.com/150' },
    { id: 23, name: 'Burgundy Skirt', description: 'Stylish burgundy skirt that pairs well with various tops.', image: 'https://via.placeholder.com/150' },
    { id: 24, name: 'Khaki Chinos', description: 'Versatile khaki chinos suitable for both work and play.', image: 'https://via.placeholder.com/150' },
    { id: 25, name: 'Light Gray Beanie', description: 'Warm light gray beanie for added comfort during cold weather.', image: 'https://via.placeholder.com/150' },
    { id: 26, name: 'Purple Cardigan', description: 'Charming purple cardigan perfect for layering.', image: 'https://via.placeholder.com/150' },
    { id: 27, name: 'Cobalt Blue Blazer', description: 'Bright cobalt blue blazer to stand out in a crowd.', image: 'https://via.placeholder.com/150' },
    { id: 28, name: 'Black Leggings', description: 'Comfortable black leggings that can be dressed up or down.', image: 'https://via.placeholder.com/150' },
    { id: 29, name: 'Olive Green Polo', description: 'Casual olive green polo shirt for a relaxed look.', image: 'https://via.placeholder.com/150' },
    { id: 30, name: 'Rust Brown Sweater', description: 'Warm rust brown sweater with a classic fit.', image: 'https://via.placeholder.com/150' },
    { id: 31, name: 'White Sneakers', description: 'Clean white sneakers ideal for everyday wear.', image: 'https://via.placeholder.com/150' },
    { id: 32, name: 'Black Leather Jacket', description: 'Stylish black leather jacket for a bold statement.', image: 'https://via.placeholder.com/150' },
    { id: 33, name: 'Forest Green Scarf', description: 'Luxurious forest green scarf for added warmth and style.', image: 'https://via.placeholder.com/150' },
    { id: 34, name: 'Ivory Blouse', description: 'Elegant ivory blouse suitable for both professional and casual settings.', image: 'https://via.placeholder.com/150' },
    { id: 35, name: 'Dark Blue Overalls', description: 'Functional dark blue overalls with multiple pockets.', image: 'https://via.placeholder.com/150' },
    { id: 36, name: 'Magenta Skirt', description: 'Bold magenta skirt perfect for a fashion-forward look.', image: 'https://via.placeholder.com/150' },
    { id: 37, name: 'Beige Trench Coat', description: 'Classic beige trench coat ideal for rainy days.', image: 'https://via.placeholder.com/150' },
    { id: 38, name: 'Charcoal Hoodie', description: 'Comfortable charcoal hoodie with a drawstring hood.', image: 'https://via.placeholder.com/150' },
    { id: 39, name: 'Plum V-neck Sweater', description: 'Soft plum sweater with a flattering V-neck cut.', image: 'https://via.placeholder.com/150' },
    { id: 40, name: 'Navy Cargo Shorts', description: 'Versatile navy cargo shorts with ample storage.', image: 'https://via.placeholder.com/150' },
    { id: 41, name: 'Salmon Shirt', description: 'Refreshing salmon shirt perfect for summer days.', image: 'https://via.placeholder.com/150' },
    { id: 42, name: 'Sapphire Blue Dress', description: 'Elegant sapphire blue dress ideal for evening events.', image: 'https://via.placeholder.com/150' },
    { id: 43, name: 'Gray Chinos', description: 'Classic gray chinos with a modern fit.', image: 'https://via.placeholder.com/150' },
    { id: 44, name: 'Mint Green Cardigan', description: 'Stylish mint green cardigan for a fresh look.', image: 'https://via.placeholder.com/150' },
    { id: 45, name: 'Wine Red Scarf', description: 'Rich wine red scarf for a cozy feel.', image: 'https://via.placeholder.com/150' },
    { id: 46, name: 'Electric Blue Shoes', description: 'Eye-catching electric blue shoes for a bold statement.', image: 'https://via.placeholder.com/150' },
    { id: 47, name: 'Lavender Blouse', description: 'Charming lavender blouse perfect for spring.', image: 'https://via.placeholder.com/150' },
    { id: 48, name: 'Burnt Orange Shorts', description: 'Trendy burnt orange shorts for casual outings.', image: 'https://via.placeholder.com/150' },
    { id: 49, name: 'Denim Jacket', description: 'Classic denim jacket with a timeless design.', image: 'https://via.placeholder.com/150' },
    { id: 50, name: 'Sky Blue Vest', description: 'Lightweight sky blue vest ideal for layering.', image: 'https://via.placeholder.com/150' },
    { id: 51, name: 'Royal Blue Tie', description: 'Sophisticated royal blue tie for formal occasions.', image: 'https://via.placeholder.com/150' },
    { id: 52, name: 'Chocolate Brown Shoes', description: 'Elegant chocolate brown shoes for a refined look.', image: 'https://via.placeholder.com/150' },
    { id: 53, name: 'Khaki Vest', description: 'Functional khaki vest with multiple pockets.', image: 'https://via.placeholder.com/150' },
    { id: 54, name: 'Crimson Sweatpants', description: 'Comfortable crimson sweatpants for casual wear.', image: 'https://via.placeholder.com/150' },
    { id: 55, name: 'Light Blue Hoodie', description: 'Cozy light blue hoodie perfect for layering.', image: 'https://via.placeholder.com/150' },
    { id: 56, name: 'Tan Cardigan', description: 'Stylish tan cardigan that complements any outfit.', image: 'https://via.placeholder.com/150' },
    { id: 57, name: 'Forest Green Pants', description: 'Durable forest green pants for versatile styling.', image: 'https://via.placeholder.com/150' },
    { id: 58, name: 'Gold Earrings', description: 'Elegant gold earrings to add a touch of glamour.', image: 'https://via.placeholder.com/150' },
    { id: 59, name: 'Cream Blazer', description: 'Sophisticated cream blazer suitable for formal events.', image: 'https://via.placeholder.com/150' },
    { id: 60, name: 'Royal Purple Skirt', description: 'Regal royal purple skirt perfect for making a statement.', image: 'https://via.placeholder.com/150' },
    { id: 61, name: 'Aqua Blue Shirt', description: 'Refreshing aqua blue shirt ideal for summer days.', image: 'https://via.placeholder.com/150' },
    { id: 62, name: 'Slate Gray Pants', description: 'Classic slate gray pants for a polished look.', image: 'https://via.placeholder.com/150' },
    { id: 63, name: 'Sea Green Dress', description: 'Elegant sea green dress suitable for a variety of occasions.', image: 'https://via.placeholder.com/150' },
    { id: 64, name: 'Copper Brown Shoes', description: 'Stylish copper brown shoes for everyday wear.', image: 'https://via.placeholder.com/150' },
    { id: 65, name: 'Blush Pink Sweater', description: 'Soft blush pink sweater ideal for layering.', image: 'https://via.placeholder.com/150' },
    { id: 66, name: 'Electric Green Hat', description: 'Bold electric green hat to add a pop of color.', image: 'https://via.placeholder.com/150' },
    { id: 67, name: 'Deep Blue Jeans', description: 'Classic deep blue jeans with a comfortable fit.', image: 'https://via.placeholder.com/150' },
    { id: 68, name: 'Sunny Yellow Top', description: 'Bright sunny yellow top perfect for sunny days.', image: 'https://via.placeholder.com/150' },
    { id: 69, name: 'Bright Orange Scarf', description: 'Vibrant orange scarf to brighten up any outfit.', image: 'https://via.placeholder.com/150' },
    { id: 70, name: 'Charcoal Gray Blazer', description: 'Sleek charcoal gray blazer for a refined look.', image: 'https://via.placeholder.com/150' },
    { id: 71, name: 'Ivory Pants', description: 'Classic ivory pants ideal for formal settings.', image: 'https://via.placeholder.com/150' },
    { id: 72, name: 'Burnt Sienna Sweater', description: 'Warm burnt sienna sweater with a cozy fit.', image: 'https://via.placeholder.com/150' },
    { id: 73, name: 'Dusty Rose Blouse', description: 'Elegant dusty rose blouse perfect for a chic look.', image: 'https://via.placeholder.com/150' },
    { id: 74, name: 'Bright Red Gloves', description: 'Eye-catching bright red gloves for cold weather.', image: 'https://via.placeholder.com/150' },
    { id: 75, name: 'Navy Blue Shorts', description: 'Casual navy blue shorts ideal for summer activities.', image: 'https://via.placeholder.com/150' },
    { id: 76, name: 'Ginger Brown Jacket', description: 'Stylish ginger brown jacket perfect for cooler temperatures.', image: 'https://via.placeholder.com/150' },
    { id: 77, name: 'Olive Green Shoes', description: 'Durable olive green shoes for everyday wear.', image: 'https://via.placeholder.com/150' },
    { id: 78, name: 'Cream Sweater Vest', description: 'Cozy cream sweater vest ideal for layering.', image: 'https://via.placeholder.com/150' },
    { id: 79, name: 'Pale Yellow Top', description: 'Soft pale yellow top suitable for a light, casual look.', image: 'https://via.placeholder.com/150' },
    { id: 80, name: 'Midnight Blue Blazer', description: 'Elegant midnight blue blazer for formal events.', image: 'https://via.placeholder.com/150' },
    { id: 81, name: 'Moss Green Pants', description: 'Versatile moss green pants for various occasions.', image: 'https://via.placeholder.com/150' },
    { id: 82, name: 'Fuchsia Dress', description: 'Bold fuchsia dress perfect for making a statement.', image: 'https://via.placeholder.com/150' },
    { id: 83, name: 'Sand Beige Jacket', description: 'Classic sand beige jacket ideal for a casual look.', image: 'https://via.placeholder.com/150' },
    { id: 84, name: 'Cinnamon Scarf', description: 'Warm cinnamon scarf perfect for chilly weather.', image: 'https://via.placeholder.com/150' },
    { id: 85, name: 'Ash Gray Sweatshirt', description: 'Comfortable ash gray sweatshirt for a relaxed style.', image: 'https://via.placeholder.com/150' },
    { id: 86, name: 'Coral Red Pants', description: 'Stylish coral red pants for a vibrant look.', image: 'https://via.placeholder.com/150' },
    { id: 87, name: 'Deep Teal Dress', description: 'Elegant deep teal dress ideal for formal occasions.', image: 'https://via.placeholder.com/150' },
    { id: 88, name: 'Bright Pink Hoodie', description: 'Bold bright pink hoodie for a fun and casual look.', image: 'https://via.placeholder.com/150' },
    { id: 89, name: 'Amber Brown Shoes', description: 'Elegant amber brown shoes perfect for both casual and formal wear.', image: 'https://via.placeholder.com/150' },
    { id: 90, name: 'Lilac Cardigan', description: 'Charming lilac cardigan that adds a touch of color to any outfit.', image: 'https://via.placeholder.com/150' },
    { id: 91, name: 'Slate Blue Vest', description: 'Cool slate blue vest for layering and added warmth.', image: 'https://via.placeholder.com/150' },
    { id: 92, name: 'Berry Purple Shorts', description: 'Fun berry purple shorts for a vibrant summer look.', image: 'https://via.placeholder.com/150' },
    { id: 93, name: 'Steel Gray Blazer', description: 'Modern steel gray blazer for a sleek and professional appearance.', image: 'https://via.placeholder.com/150' },
    { id: 94, name: 'Wine Red Sweater', description: 'Rich wine red sweater for a cozy and stylish look.', image: 'https://via.placeholder.com/150' },
    { id: 95, name: 'Sapphire Blue Pants', description: 'Bright sapphire blue pants for a bold, fashion-forward style.', image: 'https://via.placeholder.com/150' },
    { id: 96, name: 'Mauve Blouse', description: 'Soft mauve blouse suitable for a delicate, feminine look.', image: 'https://via.placeholder.com/150' },
    { id: 97, name: 'Charcoal Brown Shoes', description: 'Versatile charcoal brown shoes ideal for any occasion.', image: 'https://via.placeholder.com/150' },
    { id: 98, name: 'Azure Blue Dress', description: 'Elegant azure blue dress perfect for formal events.', image: 'https://via.placeholder.com/150' },
    { id: 99, name: 'Olive Green Sweater', description: 'Cozy olive green sweater ideal for cooler weather.', image: 'https://via.placeholder.com/150' },
    { id: 100, name: 'Mint Green Socks', description: 'Fresh mint green socks for a touch of color in your outfit.', image: 'https://via.placeholder.com/150' },
  ];


  // Initial DOM updating for all items
renderResults(clothingItems);

// DOM updating with the data
function renderResults(items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        resultsDiv.appendChild(div);
    });
}

function normalizeString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,     
                    matrix[i - 1][j] + 1      
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function fuzzySearch(query) {
    const normalizedQuery = normalizeString(query);
    if (query.length <= 3) {
        return clothingItems;
    }
    return clothingItems.filter((item) => {
        let mindistance = Infinity;

        let array = item.name.split(" ");

        for (let i = 0; i < array.length; i++) {
            let itemNameNormalized = normalizeString(array[i]);

            var distance = levenshteinDistance(
                normalizedQuery,
                itemNameNormalized,
            );
            if (distance < mindistance) {
                mindistance = distance;
            } else {
                mindistance = mindistance;
            }
        }

        return mindistance <= 2;
    });
}
// Event listener for search input
document.getElementById('searchbarinput').addEventListener('input', (event) => {
    const query = event.target.value;
    if (query.length > 3) {
        const filteredItems = fuzzySearch(query);
        renderResults(filteredItems);
    } else {
        renderResults(clothingItems); // Showing all items when query length is 3 or less
    }
});




