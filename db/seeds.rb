1000.times do 
    item = Product.create(
    product_name: Faker::Commerce.product_name,
    price: Faker::Commerce.price,
    category: Faker::Commerce.department(5),
    city: ['Provo', 'Salt Lake', 'Ogden', 'Draper', 'Sandy'].sample,
    state: 'Utah',
    brand: Faker::Hipster.word,
    size: ['s','m','l'].sample,
    gender: ['Male', 'Female' ].sample,
    description: Faker::Hipster.sentence(5)
    )
end
    puts 'seeded'


