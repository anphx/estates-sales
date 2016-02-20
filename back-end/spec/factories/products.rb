FactoryGirl.define do
  factory :product do
    title { FFaker::Product.product_name }
    price { rand() * 100 }
    published false
    description { FFaker::Product.brand }
    stock 100
    user
  end
end
