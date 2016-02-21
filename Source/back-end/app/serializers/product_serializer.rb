class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :published, :description, :images
  has_one :user
  has_one :address
end
