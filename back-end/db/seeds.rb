# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user_list = [
  [ "anpham@mail.vn", 12345678, 1 ],
  [ "admin@mail.vn", 12345678, 1 ],
  [ "agent1@mail.vn", 12345678, 2 ],
  [ "agent2@mail.vn", 12345678, 2 ],
  [ "customer1@mail.vn", 12345678, 3 ],
  [ "customer2@mail.vn", 12345678, 3 ]
]

image_list = [
  "http://ap.rdcpix.com/1336223315/a78b1c7c212722d0eeaaeb390b31cc33l-m0xd-w640_h480_q80.jpg",
  "http://ap.rdcpix.com/1496344611/a78b1c7c212722d0eeaaeb390b31cc33l-m1xd-w640_h480_q80.jpg",
  "http://ap.rdcpix.com/142029107/c3d5b8c65584d753a1a3a35898451bedl-m0xd-w640_h480_q80.jpg",
  "http://ap.rdcpix.com/1176702658/c3d5b8c65584d753a1a3a35898451bedl-m1xd-w640_h480_q80.jpg",
  "http://ap.rdcpix.com/1811970413/c3d5b8c65584d753a1a3a35898451bedl-m2xd-w640_h480_q80.jpg"
]

image_urls = [].tap do |array|
  4.times { array << image_list.sample }
end.join("||")

city_list = [].tap do |array|
  10.times {array << FFaker::AddressUS.city}
end

user_list.each do |email, password, role|
  user = User.create(email: email, password: password, role: role, avatar_url: FFaker::Avatar.image, full_name: FFaker::Name.name)  
end

60.times do 
  user = User.offset(rand(User.count)).first
  product = FactoryGirl.create :product, user: user, images: image_urls, stock: rand(100), price: rand(100000).to_f, title: FFaker::Company.name, description: FFaker::Lorem.paragraphs
  address = FactoryGirl.create :address, location: FFaker::AddressUS.street_address, longitude: FFaker::Geolocation.lng, latitude: FFaker::Geolocation.lat, city: city_list.sample, product: product
end

20.times do
  user = User.offset(rand(User.count)).first

  product_1 = Product.offset(rand(Product.count)).first
  product_2 = Product.offset(rand(Product.count)).first

  order_item_1 = FactoryGirl.build :order_item, product: product_1, quantity: 1
  order_item_2 = FactoryGirl.build :order_item, product: product_2, quantity: 1

  @order = FactoryGirl.create :order, user: user

  @order.order_items << order_item_1
  @order.order_items << order_item_2
end
