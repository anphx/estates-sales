FactoryGirl.define do
  factory :address do
    location "MyString"
    longitude "MyString"
    latitude "MyString"
    city { FFaker::AddressUS.city }
    product
  end
end
